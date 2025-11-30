import { NavItem, ExperienceItem, TestimonialItem, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', href: '#home' },
  // { label: '项目', href: '#projects' },
  { label: '关于', href: '#about' },
  { label: '评价', href: '#testimonials' },
  { label: '问答', href: '#faq' },
  { label: '每日新闻', href: 'https://dkrillex.github.io/TrendRadar/', external: true },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    period: '2024年1月 - 至今',
    role: 'AI产品专家',
    company: '某知名 AI 数据智能公司',
    companyColor: 'text-blue-600',
    isLink: true
  },
  {
    id: '2',
    period: '2018年6月 - 2024年1月',
    role: '全栈开发工程师',
    company: '某网络科技公司',
    companyColor: 'text-orange-500',
    isLink: true
  },
];

// Narrative sections for the new About Me layout
export const ABOUT_SECTIONS = {
  intro: {
    title: "你好，我是 Jackie Chen",
    content: "一名常驻广州的 AI 产品专家与全栈开发者。在过去的六年中，我沉浸在数字产品创造的世界里，专注于构建不仅功能强大，而且对用户来说真正直观、有吸引力的体验。我的职业生涯始于波士顿大学，在那里我获得了计算机科学学位。正是在那里，我发现了自己对技术逻辑与产品设计双重领域的热情。自那以后，我在这两个领域不断磨练技能，坚信最好的数字产品源于对美学和实现的深刻理解。"
  },
  philosophy: {
    title: "我的设计理念",
    content: "我的设计理念植根于同理心和解决问题。我相信优秀的设计始于理解“为什么”——用户的需求、动机和痛点。我利用深度研究、快速原型设计和用户测试，确保我构建的解决方案真正有效。我致力于创造感觉轻松自然的界面，让功能与美学齐头并进。无论是微调大模型参数还是打磨 UI 细节，我的重点始终是为最终用户创造价值。"
  },
  drive: {
    title: "什么驱动着我",
    content: "在这个领域，让我保持兴奋的是不断的学习和将复杂想法转化为简单、优雅解决方案的挑战。无论是优化 RAG 检索效率，还是设计一个让 AI 更具人性化的交互界面，没有什么比看到创意变为现实，并知道它让某人的工作变得更轻松、更高效更有成就感了。"
  },
  personal: {
    title: "屏幕之外",
    content: "当我不研究算法或写代码时，你可能会发现我在探索波士顿最新的咖啡店，徒步新英格兰的秋季步道，或者偶尔为开源社区贡献代码。如果你想合作，或者只是想聊聊 AI 的未来，欢迎随时与我联系！"
  }
};

export const POLAROID_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    caption: "我的办公桌日常",
    rotation: "-rotate-2"
  },
  {
    src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    caption: "东京之旅",
    rotation: "rotate-1"
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    caption: "技术分享会",
    rotation: "-rotate-1"
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    caption: "团队头脑风暴",
    rotation: "rotate-2"
  }
];

export const INTRO_TITLE = "Jackie Chen｜AI 产品专家";
export const INTRO_SUBTITLE = "我致力于打造设计与功能完美融合的直观数字体验。\n常驻广州，通过代码与创意将想法变为现实。";

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: "与陈杰合作开发生成式AI平台，是我们的关键转折点。他不止是设计功能——而是深入挖掘用户的内容创作痛点，打造出6个月内日活用户（DAU）突破10万的解决方案。他与我们算法团队的技术沟通，让模型迭代速度提升3倍。",
    authorName: "王莉萨 (Lisa Wang)",
    authorRole: "工程经理",
    authorCompany: "内容科技公司 (ContentTech)",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: '2',
    quote: "Jackie 对 RAG 架构的深刻理解帮助我们将幻觉率降低了 40%。他不仅具备卓越的产品思维，更能直接阅读代码并提出优化建议，这种跨界能力在 AI 产品经理中非常罕见。",
    authorName: "张马克 (Mark Zhang)",
    authorRole: "CTO",
    authorCompany: "DataFlow AI",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: '3',
    quote: "高效、富有创造力且始终以用户为中心。他为我们运营团队构建的内部 AI 助手工具，每周为团队节省了超过 20 个小时的重复劳动时间。",
    authorName: "Sarah Chen",
    authorRole: "运营VP",
    authorCompany: "智汇云图 (CloudWisdom)",
    authorImage: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    category: 'AI产品服务',
    question: '您擅长哪些AI产品领域？',
    answer: '我主要深耕于生成式AI（AIGC）、企业级大模型应用（RAG架构）、以及NLP驱动的智能客服系统。特别是在SaaS工具和内容创作平台方面有从0到1的完整实战经验，能够帮助企业快速验证AI应用场景并实现商业化落地。'
  },
  {
    id: '2',
    category: 'AI产品服务',
    question: '您会参与模型选型、API集成等技术环节吗？',
    answer: '是的。凭借计算机科学硕士背景和全栈开发经验，我能深入参与技术决策。我不仅能评估GPT-4、Claude、Llama等模型的适用性，还能与工程师直接讨论Prompt Engineering优化策略、Context Window管理以及微调（Fine-tuning）的可行性，确保产品设计在技术上既先进又可落地。'
  },
  {
    id: '3',
    category: '项目流程与周期',
    question: '典型的合作流程是怎样的？',
    answer: '通常包括四个阶段：1. 需求与痛点诊断（1周）；2. 方案设计与原型验证（2-3周）；3. 开发跟进与模型调优（持续迭代）；4. 上线后数据分析与增长策略。我会全程把控产品方向，确保交付物符合市场预期。'
  },
  {
    id: '4',
    category: '关于我的专业能力',
    question: '您如何处理AI产品的幻觉（Hallucination）问题？',
    answer: '这是AI产品体验的核心挑战。我通常采用"RAG（检索增强生成）+ 结构化约束 + 人工反馈闭环（RLHF）"的组合策略。在产品交互层，我会设计引用来源标注、置信度提示以及便捷的修正机制，从产品设计和技术实现双管齐下来降低幻觉带来的负面影响。'
  }
];

export const FAQ_CATEGORIES = ['AI产品服务', '项目流程与周期', '关于我的专业能力'];