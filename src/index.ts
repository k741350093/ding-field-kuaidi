import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode, AuthorizationType } from 'dingtalk-docs-cool-app';
const { t } = fieldDecoratorKit;

const domain = '52b984d0.r1.cpolar.top';

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList([domain]);

fieldDecoratorKit.setDecorator({
  name: '物流查询助手',
  // 定义捷径的i18n语言资源
  i18nMap: {
    'zh-CN': {
      'number': '物流单号',
      'company': '地区/快递公司'
    },
    'en-US': {
      'number': 'Tracking Number',
      'company': 'company'
    },
    'ja-JP': {
      'number': '追跡番号',
      'company': '宅配会社'
    },
  },
  errorMessages: {
    // 定义错误信息集合
    'error1': '物流单号是空的',
    'error2': '查询物流信息失败',
    'error3': '能量点可能不足'
  },
  // 定义捷径的入参
  formItems: [
    {
      key: 'number',
      label: t('number'),
      component: FormItemComponent.FieldSelect,
      props: {
        mode: 'single',
        supportTypes: [FieldType.Text],
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'company',
      label: t('company'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: '默认国内，可输入海外/快递公司',
        enableFieldReference: true,
      },
      validator: {
        required: false,
      }
    }
  ],
  // 定义捷径的返回结果类型
  resultType: {
    type: FieldType.Object,
    extra: {
      properties: [
        {
          key: 'latestStatus',
          title: '最新状态',
          type: FieldType.Text,
          primary: true,
          defaultSelected: true
        },
        {
          key: 'latestStatusDesc',
          title: '状态描述',
          type: FieldType.Text,
          defaultSelected: true
        },
        {
          key: 'latestTime',
          title: '快递更新时间',
          type: FieldType.Text,
          defaultSelected: true
        },
        {
          key: 'company',
          title: '快递公司',
          type: FieldType.Text,
          defaultSelected: true
        },
        {
          key: 'trackDetails',
          title: '物流详情',
          type: FieldType.Text,
          defaultSelected: true
        },
        {
          key: 'dataUpdateTime',
          title: '数据写入时间',
          type: FieldType.Text,
          defaultSelected: true
        }
      ]
    }
  },
  authorizations: {
    type: AuthorizationType.MultiHeaderToken,
    params: [{ key: "shiliuAIApiKey", placeholder: "请输入API Key" }],
    id: 'shiliu_ai',
    platform: 'shiliu_ai',
    instructionsUrl: 'https://bigbrain.work/shiliuai/',
    required: true,
    label: '石榴AI',
    icon: {
      light: '',
      dark: ''
    },
    tooltips: '石榴AI API Key'
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (context, formData) => {
    const { number, company } = formData;
    try {

      if (!number) {
        return {
          code: FieldExecuteCode.Error,
          errorMessage: 'error1'
        }
      }

      // 物流查询请求
      const res: any = await context.fetch(`https://${domain}/logistics/track`, { // 已经在addDomainList中添加为白名单的请求
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          number: number,
          company: company ? company : '国内',
          platform: 'dingding'
        })
      }, 'shiliu_ai').then(res => res.json());

      if (res.code !== 200) {

        if (res.code === 10001) {
          return {
            code: FieldExecuteCode.Error,
            errorMessage: 'error3',
            extra: {
              traceId: res.traceId
            }
          }
        }

        return {
          code: FieldExecuteCode.Error,
          errorMessage: 'error2',
          extra: {
            traceId: res.traceId
          }
        }
      }

      const { trackDetails } = res.data;

      let trackDetailsText = '';

      for (const item of trackDetails) {
        trackDetailsText += `${item.time} ${item.status} ${item.desc}`;
      }

      return {
        code: FieldExecuteCode.Success,
        data: {
          ...res.data,
          trackDetails: trackDetailsText
        }
      }

    } catch (e) {
      console.log('====error', String(e));
      return {
        code: FieldExecuteCode.Error,
        errorMessage: 'error2'
      }
    }
  },
});
export default fieldDecoratorKit;
