import { Question } from '../types';

export const mockQuestions: Question[] = [
  // 性格测试部分 (10题)
  {
    id: 'personality-1',
    type: 'personality',
    title: '在社交场合中,你通常会...',
    description: '选择最符合你的选项',
    options: [
      { id: 'p1-1', text: '主动与他人交谈,享受社交', value: 5 },
      { id: 'p1-2', text: '等待他人来搭话,保持适度社交', value: 3 },
      { id: 'p1-3', text: '更喜欢独处或与熟悉的人交谈', value: 1 }
    ]
  },
  {
    id: 'personality-2',
    type: 'personality',
    title: '面对压力时,你倾向于...',
    description: '选择最接近你处理方式的选项',
    options: [
      { id: 'p2-1', text: '积极寻求解决方案,主动应对', value: 5 },
      { id: 'p2-2', text: '与亲友倾诉,寻求建议和支持', value: 3 },
      { id: 'p2-3', text: '需要时间独处,自我调节', value: 1 }
    ]
  },
  {
    id: 'personality-3',
    type: 'personality',
    title: '在做决定时,你通常会...',
    description: '选择最符合你决策风格的选项',
    options: [
      { id: 'p3-1', text: '理性分析利弊,追求最优解', value: 5 },
      { id: 'p3-2', text: '权衡情感和理性,寻求平衡', value: 3 },
      { id: 'p3-3', text: '依靠直觉,相信第一感觉', value: 1 }
    ]
  },
  {
    id: 'personality-4',
    type: 'personality',
    title: '对于新事物,你的态度是...',
    description: '选择最符合你性格的选项',
    options: [
      { id: 'p4-1', text: '充满好奇,乐于尝试', value: 5 },
      { id: 'p4-2', text: '谨慎评估后再决定', value: 3 },
      { id: 'p4-3', text: '倾向保持现状', value: 1 }
    ]
  },
  {
    id: 'personality-5',
    type: 'personality',
    title: '在与人相处时,你更注重...',
    options: [
      { id: 'p5-1', text: '真诚坦率,直接表达', value: 5 },
      { id: 'p5-2', text: '委婉得体,照顾他人感受', value: 3 },
      { id: 'p5-3', text: '保持距离,选择性表达', value: 1 }
    ]
  },
  {
    id: 'personality-6',
    type: 'personality',
    title: '遇到矛盾时,你通常会...',
    options: [
      { id: 'p6-1', text: '及时沟通,寻求共识', value: 5 },
      { id: 'p6-2', text: '冷静思考后再处理', value: 3 },
      { id: 'p6-3', text: '回避冲突,等待时机', value: 1 }
    ]
  },
  {
    id: 'personality-7',
    type: 'personality',
    title: '对于生活节奏,你更偏好...',
    options: [
      { id: 'p7-1', text: '充实忙碌,追求效率', value: 5 },
      { id: 'p7-2', text: '张弛有度,适度安排', value: 3 },
      { id: 'p7-3', text: '从容自在,随性而为', value: 1 }
    ]
  },
  {
    id: 'personality-8',
    type: 'personality',
    title: '在情感表达方面,你倾向于...',
    options: [
      { id: 'p8-1', text: '主动表达,热情直接', value: 5 },
      { id: 'p8-2', text: '适度表达,含蓄委婉', value: 3 },
      { id: 'p8-3', text: '内敛克制,需要时间', value: 1 }
    ]
  },
  {
    id: 'personality-9',
    type: 'personality',
    title: '面对挑战时,你通常会...',
    options: [
      { id: 'p9-1', text: '迎难而上,享受挑战', value: 5 },
      { id: 'p9-2', text: '评估能力,适度尝试', value: 3 },
      { id: 'p9-3', text: '寻求稳妥,避免风险', value: 1 }
    ]
  },
  {
    id: 'personality-10',
    type: 'personality',
    title: '对于生活细节,你更注重...',
    options: [
      { id: 'p10-1', text: '追求完美,事事讲究', value: 5 },
      { id: 'p10-2', text: '适度关注,重点把控', value: 3 },
      { id: 'p10-3', text: '随性自然,不过分在意', value: 1 }
    ]
  },

  // 价值观调查部分 (6题)
  {
    id: 'values-1',
    type: 'values',
    title: '对于未来的家庭生活,你更看重...',
    options: [
      { id: 'v1-1', text: '事业发展与家庭的平衡', value: 5 },
      { id: 'v1-2', text: '家庭生活质量', value: 3 },
      { id: 'v1-3', text: '个人发展空间', value: 1 }
    ]
  },
  {
    id: 'values-2',
    type: 'values',
    title: '在理财方面,你的态度是...',
    description: '选择最接近你理财观念的选项',
    options: [
      { id: 'v2-1', text: '计划性强,注重长期投资', value: 5 },
      { id: 'v2-2', text: '平衡储蓄和享受生活', value: 3 },
      { id: 'v2-3', text: '随性而为,享受当下', value: 1 }
    ]
  },
  {
    id: 'values-3',
    type: 'values',
    title: '关于子女教育,你的观点是...',
    description: '选择最符合你教育理念的选项',
    options: [
      { id: 'v3-1', text: '注重全面发展,培养兴趣爱好', value: 5 },
      { id: 'v3-2', text: '重视学业,同时关注身心健康', value: 3 },
      { id: 'v3-3', text: '尊重孩子选择,给予自由发展空间', value: 1 }
    ]
  },
  {
    id: 'values-4',
    type: 'values',
    title: '对于家庭分工,你认为...',
    options: [
      { id: 'v4-1', text: '明确分工,各尽其责', value: 5 },
      { id: 'v4-2', text: '灵活安排,互相配合', value: 3 },
      { id: 'v4-3', text: '随性安排,谁有时间谁做', value: 1 }
    ]
  },
  {
    id: 'values-5',
    type: 'values',
    title: '对于亲友关系,你期望...',
    options: [
      { id: 'v5-1', text: '保持密切往来,互帮互助', value: 5 },
      { id: 'v5-2', text: '适度交往,保持适当距离', value: 3 },
      { id: 'v5-3', text: '各自独立,互不干涉', value: 1 }
    ]
  },
  {
    id: 'values-6',
    type: 'values',
    title: '对于家庭决策,你倾向于...',
    options: [
      { id: 'v6-1', text: '共同商议,达成一致', value: 5 },
      { id: 'v6-2', text: '各自负责各自的部分', value: 3 },
      { id: 'v6-3', text: '谁更专业谁做决定', value: 1 }
    ]
  },

  // 关键匹配条件 (4题)
  {
    id: 'requirements-1',
    type: 'requirements',
    title: '你期望的另一半年龄范围是...',
    options: [
      { id: 'r1-1', text: '相仿年龄(±3岁)', value: 5 },
      { id: 'r1-2', text: '稍大或稍小(±5岁)', value: 3 },
      { id: 'r1-3', text: '年龄不是主要考虑因素', value: 1 }
    ]
  },
  {
    id: 'requirements-2',
    type: 'requirements',
    title: '对于工作地点,你的要求是...',
    description: '选择最符合你期望的选项',
    options: [
      { id: 'r2-1', text: '必须在同一个城市', value: 5 },
      { id: 'r2-2', text: '可以接受异地,但需要有同城计划', value: 3 },
      { id: 'r2-3', text: '地点不是主要考虑因素', value: 1 }
    ]
  },
  {
    id: 'requirements-3',
    type: 'requirements',
    title: '对于另一半的事业发展,你更希望...',
    description: '选择最符合你期望的选项',
    options: [
      { id: 'r3-1', text: '事业有成,积极上进', value: 5 },
      { id: 'r3-2', text: '工作稳定,生活平衡', value: 3 },
      { id: 'r3-3', text: '追求个人兴趣,不拘泥于传统成功', value: 1 }
    ]
  },
  {
    id: 'requirements-4',
    type: 'requirements',
    title: '对于共同兴趣爱好,你认为...',
    options: [
      { id: 'r4-1', text: '非常重要,需要有共同话题', value: 5 },
      { id: 'r4-2', text: '部分重合即可,保留个人空间', value: 3 },
      { id: 'r4-3', text: '不是必要,互相尊重最重要', value: 1 }
    ]
  }
]; 