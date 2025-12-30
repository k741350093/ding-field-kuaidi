import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode, AuthorizationType } from 'dingtalk-docs-cool-app';
const { t } = fieldDecoratorKit;

const domain = 'api.bigbrain.work'
// const domain = '6eb87d35.r1.cpolar.top'

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList([domain]);

fieldDecoratorKit.setDecorator({
  name: '物流查询助手',
  // 定义捷径的i18n语言资源
  i18nMap: {
    'zh-CN': {
      'number': '物流单号',
      'company': '地区/快递公司',
      'phone': '手机号'
    },
    'en-US': {
      'number': 'Tracking Number',
      'company': 'company',
      'phone': 'phone'
    },
    'ja-JP': {
      'number': '追跡番号',
      'company': '宅配会社',
      'phone': '電話番号'
    },
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
    },
    {
      key: 'phone',
      label: t('phone'),
      tooltips: {
        title: '顺丰、中通必填'
      },
      component: FormItemComponent.FieldSelect,
      props: {
        mode: 'single',
        supportTypes: [FieldType.Text]
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
  errorMessages: {
    // 定义错误信息集合
    'error1': '物流单号不能为空',
    'error2': '服务器错误，请联系开发者',
    'point_not_enough': '可用能量点不足',
    'phone_error': '手机号有误'
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (context, formData) => {
    const { number, company, phone } = formData;
    try {

      if (!number) {
        return {
          code: FieldExecuteCode.Error,
          errorMessage: 'error1'
        }
      }

      // 物流查询请求
      const res: any = await context.fetch(`https://${domain}/kuaidi/logistics/track`, { // 已经在addDomainList中添加为白名单的请求
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          number: number,
          company: company ? company : '国内',
          phone: phone,
          platform: 'dingding'
        })
      }, 'shiliu_ai').then(res => res.json());

      if (res.code !== 200) {

        if (res.code === 1003) {
          return {
            code: FieldExecuteCode.Success,
            data: {
              latestStatus: '暂无物流信息或单号错误',
            }
          }
        }

        if (res.code === 10011) {
          return {
            code: FieldExecuteCode.Error,
            errorMessage: 'point_not_enough',
            extra: {
              traceId: res.traceId
            }
          }
        }

        if (res.code === 20001) {
          return {
            code: FieldExecuteCode.Error,
            errorMessage: 'phone_error',
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
