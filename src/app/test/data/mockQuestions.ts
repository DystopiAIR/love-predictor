import { Question } from '../types';

export const mockQuestions: Question[] = [
  {
    id: 'personality-1',
    type: 'personality',
    title: '在社交场合中,你通常会...',
    description: '选择最符合你的选项',
    options: [
      {
        id: 'p1-1',
        text: '主动与他人交谈,享受社交',
        value: 5
      },
      {
        id: 'p1-2',
        text: '等待他人来搭话,保持适度社交',
        value: 3
      },
      {
        id: 'p1-3',
        text: '更喜欢独处或与熟悉的人交谈',
        value: 1
      }
    ]
  },
  {
    id: 'personality-2',
    type: 'personality',
    title: '面对压力时,你倾向于...',
    description: '选择最接近你处理方式的选项',
    options: [
      {
        id: 'p2-1',
        text: '积极寻求解决方案,主动应对',
        value: 5
      },
      {
        id: 'p2-2',
        text: '与亲友倾诉,寻求建议和支持',
        value: 3
      },
      {
        id: 'p2-3',
        text: '需要时间独处,自我调节',
        value: 1
      }
    ]
  },
  {
    id: 'personality-3',
    type: 'personality',
    title: '在做决定时,你通常会...',
    description: '选择最符合你决策风格的选项',
    options: [
      {
        id: 'p3-1',
        text: '理性分析利弊,追求最优解',
        value: 5
      },
      {
        id: 'p3-2',
        text: '权衡情感和理性,寻求平衡',
        value: 3
      },
      {
        id: 'p3-3',
        text: '依靠直觉,相信第一感觉',
        value: 1
      }
    ]
  },
  {
    id: 'values-1',
    type: 'values',
    title: '对于未来的家庭生活,你更看重...',
    options: [
      {
        id: 'v1-1',
        text: '事业发展与家庭的平衡',
        value: 5
      },
      {
        id: 'v1-2',
        text: '家庭生活质量',
        value: 3
      },
      {
        id: 'v1-3',
        text: '个人发展空间',
        value: 1
      }
    ]
  },
  {
    id: 'values-2',
    type: 'values',
    title: '在理财方面,你的态度是...',
    description: '选择最接近你理财观念的选项',
    options: [
      {
        id: 'v2-1',
        text: '计划性强,注重长期投资',
        value: 5
      },
      {
        id: 'v2-2',
        text: '平衡储蓄和享受生活',
        value: 3
      },
      {
        id: 'v2-3',
        text: '随性而为,享受当下',
        value: 1
      }
    ]
  },
  {
    id: 'values-3',
    type: 'values',
    title: '关于子女教育,你的观点是...',
    description: '选择最符合你教育理念的选项',
    options: [
      {
        id: 'v3-1',
        text: '注重全面发展,培养兴趣爱好',
        value: 5
      },
      {
        id: 'v3-2',
        text: '重视学业,同时关注身心健康',
        value: 3
      },
      {
        id: 'v3-3',
        text: '尊重孩子选择,给予自由发展空间',
        value: 1
      }
    ]
  },
  {
    id: 'requirements-1',
    type: 'requirements',
    title: '你期望的另一半年龄范围是...',
    options: [
      {
        id: 'r1-1',
        text: '相仿年龄(±3岁)',
        value: 5
      },
      {
        id: 'r1-2',
        text: '稍大或稍小(±5岁)',
        value: 3
      },
      {
        id: 'r1-3',
        text: '年龄不是主要考虑因素',
        value: 1
      }
    ]
  },
  {
    id: 'requirements-2',
    type: 'requirements',
    title: '对于工作地点,你的要求是...',
    description: '选择最符合你期望的选项',
    options: [
      {
        id: 'r2-1',
        text: '必须在同一个城市',
        value: 5
      },
      {
        id: 'r2-2',
        text: '可以接受异地,但需要有同城计划',
        value: 3
      },
      {
        id: 'r2-3',
        text: '地点不是主要考虑因素',
        value: 1
      }
    ]
  },
  {
    id: 'requirements-3',
    type: 'requirements',
    title: '对于另一半的事业发展,你更希望...',
    description: '选择最符合你期望的选项',
    options: [
      {
        id: 'r3-1',
        text: '事业有成,积极上进',
        value: 5
      },
      {
        id: 'r3-2',
        text: '工作稳定,生活平衡',
        value: 3
      },
      {
        id: 'r3-3',
        text: '追求个人兴趣,不拘泥于传统成功',
        value: 1
      }
    ]
  }
]; 