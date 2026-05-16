export type Lang = 'zh' | 'en';

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

export function getLangFromParams(params: Promise<{ lang: string }> | { lang: string }): Lang {
  const lang = 'then' in params ? undefined : params.lang;
  return lang === 'zh' || lang === 'en' ? lang : 'en';
}

const dict = {
  zh: {
    site: {
      title: '宁波传祺液压 - 径向柱塞液压马达 | CA/CB/CBP/CBM/MB系列',
      description: '宁波传祺液压有限公司专业生产CA、CB、CBP、CBM、MB系列径向柱塞液压马达，替代低速大扭矩液压马达，提供液压泵、液压阀、液压绞车。高品质，全球供应。',
    },
    nav: {
      home: '首页',
      products: '产品中心',
      about: '关于我们',
      contact: '联系我们',
    },
    home: {
      heroTitle: '专业液压解决方案',
      heroSubtitle: '高品质液压马达及零部件，服务全球工业客户',
      heroCta: '浏览产品',
      categoriesTitle: '产品分类',
      categoriesSubtitle: '覆盖液压系统全品类，一站式采购',
      featuredTitle: '推荐产品',
      featuredSubtitle: '经过严格测试，性能可靠',
      advantagesTitle: '为什么选择我们',
      advantages: [
        { title: '品质保证', desc: '严格的质量控制体系，每台产品出厂前经过100%性能测试' },
        { title: '技术实力', desc: '20年液压行业经验，专业工程师团队提供技术支持' },
        { title: '全球供应', desc: '产品出口全球30多个国家和地区，物流快捷' },
        { title: '售后无忧', desc: '完善的售后服务体系，1年质保期' },
      ],
    },
    products: {
      title: '产品中心',
      subtitle: '浏览我们全系列液压产品',
      allCategories: '全部分类',
      specs: '技术参数',
      features: '产品特点',
      inquiry: '立即询价',
      noProducts: '该分类暂无产品',
      backToList: '返回产品列表',
      relatedProducts: '相关产品',
    },
    about: {
      title: '关于我们',
      subtitle: '专注液压领域，服务全球客户',
      intro: '宁波传祺液压有限公司是一家专注于液压马达及零部件研发、生产和销售的企业。自成立以来，我们始终坚持以客户需求为导向，不断提升产品品质和服务水平。',
      missionTitle: '我们的使命',
      mission: '为全球客户提供高品质、高性价比的液压产品和解决方案，成为液压传动领域的可信赖伙伴。',
      valuesTitle: '核心价值观',
      values: [
        { title: '质量第一', desc: '从原材料采购到成品出厂，每个环节严格把控' },
        { title: '客户至上', desc: '理解客户需求，提供定制化解决方案' },
        { title: '持续创新', desc: '不断研发新技术、新产品，保持行业竞争力' },
      ],
    },
    contact: {
      title: '联系我们',
      subtitle: '有任何问题或需求？请随时联系我们',
      formTitle: '发送询价',
      name: '姓名',
      namePlaceholder: '请输入您的姓名',
      email: '邮箱',
      emailPlaceholder: '请输入您的邮箱',
      phone: '电话',
      phonePlaceholder: '请输入您的电话',
      company: '公司名称',
      companyPlaceholder: '请输入您的公司名称',
      product: '感兴趣的产品',
      productPlaceholder: '请描述您需要的产品型号或规格',
      message: '留言',
      messagePlaceholder: '请描述您的需求或问题',
      submit: '提交询价',
      submitting: '提交中...',
      success: '提交成功！我们会尽快与您联系。',
      error: '提交失败，请稍后重试或直接发送邮件。',
      infoTitle: '联系方式',
      address: '地址',
      addressValue: '浙江省宁波市镇海区汶骆西路镇海轻工机械铸造厂',
      phoneLabel: '电话',
      phoneValue: '+86 136 1678 6884',
      phoneValue2: '+86 190 3236 3502',
      emailLabel: '邮箱',
      emailValue: '1121601670@qq.com',
      whatsapp: 'WhatsApp',
      whatsappValue: '+86 136 1678 6884',
    },
    footer: {
      description: '专业液压马达及零部件供应商，品质可靠，服务全球。',
      quickLinks: '快速链接',
      contactInfo: '联系方式',
      copyright: '版权所有',
    },
  },
  en: {
    site: {
      title: 'Radial Piston Hydraulic Motors | CA CB CBP CBM MB Series - ChuanQi Hydraulic',
      description: 'ChuanQi Hydraulic manufactures CA, CB, CBP, CBM, MB series low speed high torque radial piston hydraulic motors. Also supplies hydraulic pumps, valves, winches. Factory-direct quality, global shipping.',
    },
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About Us',
      contact: 'Contact',
    },
    home: {
      heroTitle: 'Professional Hydraulic Solutions',
      heroSubtitle: 'High-quality hydraulic motors and parts for industrial clients worldwide',
      heroCta: 'View Products',
      categoriesTitle: 'Product Categories',
      categoriesSubtitle: 'Full range of hydraulic systems, one-stop procurement',
      featuredTitle: 'Featured Products',
      featuredSubtitle: 'Rigorously tested, reliable performance',
      advantagesTitle: 'Why Choose Us',
      advantages: [
        { title: 'Quality Assurance', desc: 'Strict quality control, each product undergoes 100% performance testing' },
        { title: 'Technical Expertise', desc: '20 years of hydraulic industry experience, professional engineering support' },
        { title: 'Global Supply', desc: 'Products exported to 30+ countries with efficient logistics' },
        { title: 'After-Sales Service', desc: 'Comprehensive after-sales service system, 1-year warranty' },
      ],
    },
    products: {
      title: 'Products',
      subtitle: 'Browse our full range of hydraulic products',
      allCategories: 'All Categories',
      specs: 'Technical Specifications',
      features: 'Features',
      inquiry: 'Inquire Now',
      noProducts: 'No products in this category',
      backToList: 'Back to Products',
      relatedProducts: 'Related Products',
    },
    about: {
      title: 'About Us',
      subtitle: 'Focused on hydraulics, serving global customers',
      intro: 'ChuanQi Hydraulic is a company specializing in the R&D, manufacturing and sales of hydraulic motors and parts. Since our founding, we have always prioritized customer needs and continuously improved our product quality and service.',
      missionTitle: 'Our Mission',
      mission: 'To provide high-quality, cost-effective hydraulic products and solutions to customers worldwide, and to be a trusted partner in the hydraulic transmission field.',
      valuesTitle: 'Core Values',
      values: [
        { title: 'Quality First', desc: 'Strict control from raw material procurement to finished product delivery' },
        { title: 'Customer First', desc: 'Understanding customer needs and providing customized solutions' },
        { title: 'Continuous Innovation', desc: 'Constantly developing new technologies and products to stay competitive' },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Have any questions or needs? Feel free to contact us',
      formTitle: 'Send Inquiry',
      name: 'Name',
      namePlaceholder: 'Enter your name',
      email: 'Email',
      emailPlaceholder: 'Enter your email',
      phone: 'Phone',
      phonePlaceholder: 'Enter your phone number',
      company: 'Company',
      companyPlaceholder: 'Enter your company name',
      product: 'Product of Interest',
      productPlaceholder: 'Describe the product model or specifications you need',
      message: 'Message',
      messagePlaceholder: 'Describe your requirements or questions',
      submit: 'Submit Inquiry',
      submitting: 'Submitting...',
      success: 'Submitted successfully! We will contact you shortly.',
      error: 'Submission failed. Please try again later or email us directly.',
      infoTitle: 'Contact Info',
      address: 'Address',
      addressValue: 'Wenluo West Road, Zhenhai District, Ningbo, Zhejiang, China',
      phoneLabel: 'Phone',
      phoneValue: '+86 136 1678 6884',
      phoneValue2: '+86 190 3236 3502',
      emailLabel: 'Email',
      emailValue: '1121601670@qq.com',
      whatsapp: 'WhatsApp',
      whatsappValue: '+86 136 1678 6884',
    },
    footer: {
      description: 'Professional hydraulic motor and parts supplier, reliable quality, serving the world.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      copyright: 'All Rights Reserved',
    },
  },
};

export function t(lang: Lang, path: string): unknown {
  const keys = path.split('.');
  let value: unknown = dict[lang];
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return value;
}
