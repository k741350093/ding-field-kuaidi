# deploy.ps1 - Frontend Project Deployment Script
# Purpose: Sync code from dev repo (origin), build, and push to release repo (github)

param(
    [string]$CommitMessage = ""
)

Write-Host "`n=== Starting Deployment ===" -ForegroundColor Cyan
Write-Host ""

# 1. Check if working directory is clean
Write-Host "Checking working directory status..." -ForegroundColor Cyan
$status = git status --porcelain
if ($status) {
    Write-Host "ERROR: Working directory has uncommitted changes:" -ForegroundColor Red
    git status --short
    exit 1
}

# 2. Ensure on main branch
$currentBranch = git rev-parse --abbrev-ref HEAD
if ($currentBranch -ne "main") {
    Write-Host "WARNING: Not on main branch, switching..." -ForegroundColor Yellow
    git checkout main
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Failed to switch branch!" -ForegroundColor Red
        exit 1
    }
}

# 3. Pull latest code from dev repo
Write-Host "Pulling latest code from dev repo (origin)..." -ForegroundColor Cyan
git fetch origin
git pull origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to pull code!" -ForegroundColor Red
    exit 1
}

# 4. Record current commit and prepare commit message
$currentCommit = git rev-parse HEAD
Write-Host "Current commit: $currentCommit" -ForegroundColor Gray

# Generate commit message with timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
if ([string]::IsNullOrWhiteSpace($CommitMessage)) {
    $CommitMessage = "chore: build for release [$timestamp]"
} else {
    $CommitMessage = "$CommitMessage [$timestamp]"
}

# 5. Build project
Write-Host "`nBuilding project..." -ForegroundColor Cyan
npm run pack

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build failed!" -ForegroundColor Red
    exit 1
}

# 6. Check if dist directory exists
if (-not (Test-Path "output")) {
    Write-Host "ERROR: Build output 'dist' directory not found!" -ForegroundColor Red
    exit 1
}

# 7. Add and commit dist
Write-Host "`nPreparing to commit build artifacts..." -ForegroundColor Cyan
git add output -f

$hasChanges = git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    # Has changes to commit
    git commit -m "$CommitMessage"
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Commit failed!" -ForegroundColor Red
        git restore --staged output
        exit 1
    }
    
    Write-Host "Commit created: $CommitMessage" -ForegroundColor Green
} else {
    Write-Host "No new build changes to commit" -ForegroundColor Yellow
    git restore --staged dist
}

# 8. Push to release repo
Write-Host "`nPushing to release repo (github)..." -ForegroundColor Cyan
git push github main

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Push failed! Rolling back..." -ForegroundColor Red
    # Rollback to previous commit if push fails
    git reset --hard $currentCommit
    exit 1
}

Write-Host "Successfully pushed to github!" -ForegroundColor Green

# 9. Restore local state without dist
Write-Host "`nRestoring local working directory..." -ForegroundColor Cyan
git reset --hard $currentCommit

Write-Host "`n=== Deployment Complete! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Deployment Info:" -ForegroundColor Cyan
Write-Host "  - Dev repo (origin): $currentCommit" -ForegroundColor Gray
Write-Host "  - Release repo (github): includes latest build" -ForegroundColor Gray
Write-Host ""
Write-Host "Tips:" -ForegroundColor Yellow
Write-Host "  - For daily development, push to origin repo: git push origin main" -ForegroundColor Gray
Write-Host "  - Local dist directory will not be kept" -ForegroundColor Gray
Write-Host ""
