import { Product } from '@/types/product';

export const products: Product[] = [
  // ==================== CA SERIES (Compact) ====================
  {
    slug: 'ca-50-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/ca.png'],
    name: { zh: 'CA 50 系列径向柱塞液压马达', en: 'CA 50 Series Radial Piston Hydraulic Motor' },
    description: {
      zh: 'CA 50系列为紧凑型径向柱塞液压马达，排量1,256–3,140 cc/rev，比扭矩20–50 Nm/bar。采用静止壳体和旋转空心轴设计，可直接安装于设备驱动轴上。适用于橡塑机械、绞车、破碎机等中等扭矩应用场景。0.5 rpm超低转速平稳运行，启动扭矩≥90%。',
      en: 'CA 50 series compact radial piston motor, displacement 1,256–3,140 cc/rev, specific torque 20–50 Nm/bar. Stationary housing with rotating hollow shaft for direct drive mounting. Ideal for rubber/plastics machinery, winches, crushers. Smooth operation down to 0.5 rpm with starting torque ≥90%.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '1,256 – 3,140 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '20 – 50 Nm/bar' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '170 – 340 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '315 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '空心轴直装 Hollow Shaft' },
    ],
    features: { zh: ['紧凑设计，高功率密度', '空心轴直装，无需联轴器', '0.5 rpm超低速平稳运行', '启动扭矩≥90%', '可承受冲击载荷', '多种排量(20/25/32/40/50)'], en: ['Compact design, high power density', 'Hollow shaft direct mounting', 'Smooth operation at 0.5 rpm', 'Starting torque ≥90%', 'Withstands shock loads', 'Multiple displacements (20/25/32/40/50)'] },
    featured: true,
  },
  {
    slug: 'ca-70-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/ca.png'],
    name: { zh: 'CA 70 系列径向柱塞液压马达', en: 'CA 70 Series Radial Piston Hydraulic Motor' },
    description: {
      zh: 'CA 70系列在中型径向柱塞马达中提供更宽的扭矩选择，排量2,512–4,400 cc/rev，比扭矩40–70 Nm/bar。模块化设计，同框体多种排量可选。广泛应用于注塑机、挤出机、船舶甲板机械等。',
      en: 'CA 70 series offers wider torque options, displacement 2,512–4,400 cc/rev, specific torque 40–70 Nm/bar. Modular design with multiple displacements in same frame. Widely used in injection molding, extruders, marine deck machinery.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '2,512 – 4,400 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '40 – 70 Nm/bar' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '153 – 238 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '315 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '空心轴直装 Hollow Shaft' },
    ],
    features: { zh: ['模块化设计，灵活选型', '高效率(>92%)', '全扭矩全转速持续运行', '免维护设计，长寿命', '多种排量(40/50/60/70)'], en: ['Modular design, flexible selection', 'High efficiency (>92%)', 'Full torque at full speed continuously', 'Maintenance-free, long life', 'Multiple displacements (40/50/60/70)'] },
    featured: true,
  },
  {
    slug: 'ca-100-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/ca.png'],
    name: { zh: 'CA 100 系列径向柱塞液压马达', en: 'CA 100 Series Radial Piston Hydraulic Motor' },
    description: {
      zh: 'CA 100系列提供更大扭矩输出，排量2,512–6,280 cc/rev，比扭矩40–100 Nm/bar。中等转速下即可输出超高扭矩，是移动破碎站、撕碎机、搅拌设备等的理想驱动方案。同框体五种排量可选。',
      en: 'CA 100 series delivers higher torque, displacement 2,512–6,280 cc/rev, specific torque 40–100 Nm/bar. Ultra-high torque at moderate speeds for mobile crushers, shredders, mixers. Five displacement options in same frame.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '2,512 – 6,280 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '40 – 100 Nm/bar' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '162 – 340 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '315 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '空心轴直装 Hollow Shaft' },
    ],
    features: { zh: ['大扭矩输出，替代减速箱', '空心轴设计，安装便捷', '抗冲击能力强', '高效率宽转速范围', '多种排量(40/50/64/80/100)'], en: ['High torque output, replaces gearboxes', 'Hollow shaft, easy installation', 'Strong shock resistance', 'High efficiency wide speed range', 'Multiple displacements (40/50/64/80/100)'] },
    featured: true,
  },
  {
    slug: 'ca-140-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/ca.png'],
    name: { zh: 'CA 140 系列径向柱塞液压马达', en: 'CA 140 Series Radial Piston Hydraulic Motor' },
    description: {
      zh: 'CA 140系列是大排量径向柱塞马达的中坚型号，排量5,024–8,800 cc/rev，比扭矩80–140 Nm/bar。适用于大型破碎机、撕碎机、回转窑、球磨机等重型工业设备。卓越的低速性能和抗冲击能力。',
      en: 'CA 140 series is the backbone of large-displacement radial piston motors, displacement 5,024–8,800 cc/rev, specific torque 80–140 Nm/bar. For large crushers, shredders, rotary kilns, ball mills. Excellent low-speed performance and shock resistance.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '5,024 – 8,800 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '80 – 140 Nm/bar' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '145 – 289 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '315 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '空心轴直装 Hollow Shaft' },
    ],
    features: { zh: ['超大排量，替代传统减速驱动', '高抗冲击性', '极低爬行速度', '全寿命周期成本低', '多种排量(80/100/120/140)'], en: ['Extra-large displacement', 'High shock resistance', 'Ultra-low crawling speed', 'Low total lifecycle cost', 'Multiple displacements (80/100/120/140)'] },
    featured: false,
  },
  {
    slug: 'ca-210-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/ca.png'],
    name: { zh: 'CA 210 系列径向柱塞液压马达', en: 'CA 210 Series Radial Piston Hydraulic Motor' },
    description: {
      zh: 'CA 210系列是CA家族最大型号，排量10,051–13,200 cc/rev，比扭矩160–210 Nm/bar。专为最苛刻的重型应用设计，如大型矿山破碎机、盾构机刀盘驱动、大型船舶推进系统等。',
      en: 'CA 210 series is the largest CA model, displacement 10,051–13,200 cc/rev, specific torque 160–210 Nm/bar. Designed for the most demanding applications: large mine crushers, TBM cutter head drives, large marine propulsion.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '10,051 – 13,200 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '160 – 210 Nm/bar' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '72 – 128 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '315 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '空心轴直装 Hollow Shaft' },
    ],
    features: { zh: ['顶级扭矩密度', '矿山级重型设计', '极端工况可靠运行', '低转速大扭矩直驱', '多种排量(160/180/210)'], en: ['Top-tier torque density', 'Mining-grade heavy-duty design', 'Reliable in extreme conditions', 'Low-speed high-torque direct drive', 'Multiple displacements (160/180/210)'] },
    featured: true,
  },

  // ==================== CB SERIES (Compact) ====================
  {
    slug: 'cb-280-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/cb-280.png'],
    name: { zh: 'CB 280 系列径向柱塞液压马达', en: 'CB 280 Series Radial Piston Hydraulic Motor' },
    description: {
      zh: 'CB 280系列属于重型径向柱塞马达，排量15,100–17,600 cc/rev，比扭矩240–280 Nm/bar，最大扭矩92 kNm。内置多排柱塞结构确保平稳动力输出。适用于大型矿山设备、钢铁冶金机械、大型绞车等。',
      en: 'CB 280 series heavy-duty radial piston motor, displacement 15,100–17,600 cc/rev, specific torque 240–280 Nm/bar, max torque 92 kNm. Multi-row piston design for smooth power delivery. For large mining equipment, steel/metallurgy machinery, large winches.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '15,100 – 17,600 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '240 – 280 Nm/bar' },
      { label: { zh: '最大扭矩', en: 'Max Torque' }, value: '92 kNm' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '58 – 68 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
    ],
    features: { zh: ['巨扭矩输出，直驱替代多级减速', '多排柱塞，动力输出平稳', '矿山级重型结构', '内置制动器可配', '比扭矩240/280可选'], en: ['Massive torque, direct drive', 'Multi-row pistons, smooth power', 'Mining-grade heavy structure', 'Built-in brake optional', 'Specific torque 240/280 available'] },
    featured: true,
  },
  {
    slug: 'cb-400-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/cb-280.png'],
    name: { zh: 'CB 400 系列径向柱塞液压马达', en: 'CB 400 Series Radial Piston Hydraulic Motor' },
    description: {
      zh: 'CB 400系列是应用最广泛的重型径向柱塞马达，比扭矩240–560 Nm/bar，最大扭矩130 kNm，最大功率970 kW。九种名义排量可选，覆盖15,100–35,200 cc/rev。适用于盾构机、大型破碎站、深海绞车、大型回转窑等极端重载场合。',
      en: 'CB 400 series is the most widely applied heavy-duty motor, specific torque 240–560 Nm/bar, max torque 130 kNm, max power 970 kW. Nine displacements covering 15,100–35,200 cc/rev. For TBMs, large crushing stations, deep-sea winches, large rotary kilns.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '15,100 – 35,200 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '240 – 560 Nm/bar' },
      { label: { zh: '最大扭矩', en: 'Max Torque' }, value: '130 kNm' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '53 – 125 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '最大功率', en: 'Max Power' }, value: '970 kW' },
    ],
    features: { zh: ['9种排量可选，业界最全', '最大功率970kW', '适用于最恶劣工况', '可配速度/位置传感器', '模块化设计，维护方便'], en: ['9 displacement options', 'Max power 970kW', 'For harshest conditions', 'Speed/position sensors available', 'Modular design, easy maintenance'] },
    featured: true,
  },
  {
    slug: 'cb-560-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/cb-280.png'],
    name: { zh: 'CB 560 系列径向柱塞液压马达', en: 'CB 560 Series Radial Piston Hydraulic Motor' },
    description: {
      zh: 'CB 560系列是CB家族中最大规格，比扭矩440–560 Nm/bar，最大扭矩180 kNm，最大功率970 kW。超大框体设计提供更高扭矩承载能力。用于超大型矿山设备、海洋工程平台、大型盾构机等极限应用。',
      en: 'CB 560 series is the largest CB model, specific torque 440–560 Nm/bar, max torque 180 kNm, max power 970 kW. Extra-large frame for higher torque capacity. For ultra-large mining equipment, offshore platforms, large TBMs.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '27,600 – 35,200 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '440 – 560 Nm/bar' },
      { label: { zh: '最大扭矩', en: 'Max Torque' }, value: '180 kNm' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '53 – 65 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '最大功率', en: 'Max Power' }, value: '970 kW' },
    ],
    features: { zh: ['最大规格量产马达', '180 kNm极限扭矩', '加强框体，超高扭矩密度', '海洋工程级防腐蚀', '全生命周期技术支持'], en: ['Largest production motor', '180 kNm extreme torque', 'Reinforced frame, ultra-high torque density', 'Offshore-grade corrosion protection', 'Full lifecycle technical support'] },
    featured: true,
  },

  // ==================== CBP SERIES (Compact High Power) ====================
  {
    slug: 'cbp-140-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/cbp.png'],
    name: { zh: 'CBP 140 系列高功率径向柱塞马达', en: 'CBP 140 Series High-Power Radial Piston Motor' },
    description: {
      zh: 'CBP 140系列是高功率密度径向柱塞马达，排量5,024–8,800 cc/rev，比扭矩80–140 Nm/bar，最高转速达400 rpm。在紧凑框体内实现更高转速和更大功率，适合移动式和空间受限的重型设备，如移动破碎站、林业机械、废钢处理设备等。',
      en: 'CBP 140 series high power density radial piston motor, displacement 5,024–8,800 cc/rev, specific torque 80–140 Nm/bar, max speed 400 rpm. Higher speed and power in a compact frame, ideal for mobile and space-constrained heavy equipment such as mobile crushers, forestry machinery, scrap handling.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '5,024 – 8,800 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '80 – 140 Nm/bar' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '275 – 400 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '空心轴/前端法兰 Hollow Shaft / Front Flange' },
    ],
    features: { zh: ['高功率密度，紧凑框体', '转速高达400rpm', '可自由轮运转', '多盘制动器可配', '适应移动设备空间限制'], en: ['High power density, compact frame', 'Speed up to 400 rpm', 'Freewheeling capability', 'Multi-disc brake optional', 'Fits mobile equipment space constraints'] },
    featured: true,
  },
  {
    slug: 'cbp-280-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/cbp.png'],
    name: { zh: 'CBP 280 系列高功率径向柱塞马达', en: 'CBP 280 Series High-Power Radial Piston Motor' },
    description: {
      zh: 'CBP 280系列在中等框体中平衡了扭矩与转速，排量10,100–17,600 cc/rev，比扭矩160–280 Nm/bar，最高转速170 rpm。适用于建筑机械、港口设备、矿山输送系统等需要兼顾扭矩和转速的应用。',
      en: 'CBP 280 series balances torque and speed in a mid-size frame, displacement 10,100–17,600 cc/rev, specific torque 160–280 Nm/bar, max speed 170 rpm. For construction machinery, port equipment, mining conveyors requiring both torque and speed.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '10,100 – 17,600 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '160 – 280 Nm/bar' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '150 – 170 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '空心轴/前端法兰 Hollow Shaft / Front Flange' },
    ],
    features: { zh: ['扭矩与转速最佳平衡', '自由轮运转', '串联安装可选', '低转动惯量', '多种排量(160/200/240/280)'], en: ['Optimal torque-speed balance', 'Freewheeling capability', 'Tandem mounting optional', 'Low moment of inertia', 'Multiple displacements (160/200/240/280)'] },
    featured: false,
  },
  {
    slug: 'cbp-400-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/cbp.png'],
    name: { zh: 'CBP 400 系列高功率径向柱塞马达', en: 'CBP 400 Series High-Power Radial Piston Motor' },
    description: {
      zh: 'CBP 400系列提供卓越的功率输出，排量15,100–25,100 cc/rev，比扭矩240–400 Nm/bar。在170 rpm下输出全长扭矩，适用于造纸机械、大型撕碎机、废钢剪切机等高功率需求场合。',
      en: 'CBP 400 series delivers exceptional power output, displacement 15,100–25,100 cc/rev, specific torque 240–400 Nm/bar. Full torque at 170 rpm for paper machinery, large shredders, scrap shears and other high-power applications.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '15,100 – 25,100 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '240 – 400 Nm/bar' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '170 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '前端法兰 Front Flange' },
    ],
    features: { zh: ['高功率持续输出', 'DNV规范设计', '串联/并联安装', '冲击载荷不敏感', '多种排量(240/280/320/360/400)'], en: ['High continuous power output', 'DNV rules design', 'Tandem/parallel mounting', 'Shock load insensitive', 'Multiple displacements (240/280/320/360/400)'] },
    featured: true,
  },
  {
    slug: 'cbp-560-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/cbp.png'],
    name: { zh: 'CBP 560 系列高功率径向柱塞马达', en: 'CBP 560 Series High-Power Radial Piston Motor' },
    description: {
      zh: 'CBP 560系列是大功率级别的核心型号，排量27,600–35,200 cc/rev，比扭矩440–560 Nm/bar。135 rpm持续输出满扭矩，适用于大型矿山半移动式破碎站、大型撕碎设备、重型物料处理等。',
      en: 'CBP 560 series is a core model in the high-power class, displacement 27,600–35,200 cc/rev, specific torque 440–560 Nm/bar. Full torque at 135 rpm continuously for large semi-mobile crushing stations, large shredding equipment, heavy material handling.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '27,600 – 35,200 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '440 – 560 Nm/bar' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '135 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '前端法兰 Front Flange' },
    ],
    features: { zh: ['大功率重型应用', '135rpm持续满扭矩', '紧凑的大扭矩方案', '制动器集成可选', '多种排量(440/480/520/560)'], en: ['High-power heavy-duty applications', '135rpm continuous full torque', 'Compact high-torque solution', 'Integrated brake optional', 'Multiple displacements (440/480/520/560)'] },
    featured: false,
  },
  {
    slug: 'cbp-840-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/cbp.png'],
    name: { zh: 'CBP 840 系列高功率径向柱塞马达', en: 'CBP 840 Series High-Power Radial Piston Motor' },
    description: {
      zh: 'CBP 840系列是CBP系列中最大规格，排量37,700–52,800 cc/rev，比扭矩600–840 Nm/bar，最大功率达3,166 kW。专为超大型工业驱动设计，七种排量可选，适用于大型矿山自磨机、超大型破碎站、大型船舶推进等。',
      en: 'CBP 840 series is the largest CBP model, displacement 37,700–52,800 cc/rev, specific torque 600–840 Nm/bar, max power 3,166 kW. Designed for ultra-large industrial drives with seven displacement options. For large mine SAG mills, mega crushing stations, large marine propulsion.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '37,700 – 52,800 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '600 – 840 Nm/bar' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '80 – 135 rpm' },
      { label: { zh: '最大功率', en: 'Max Power' }, value: '3,166 kW' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
    ],
    features: { zh: ['CBP最大规格，3,166kW', '7种排量可选(600–840)', '超大型矿山/船舶驱动', 'DNV规范设计', '全转速范围高效率'], en: ['Largest CBP, 3,166kW', '7 displacement options (600–840)', 'Ultra-large mining/marine drives', 'DNV rules design', 'High efficiency across full speed range'] },
    featured: true,
  },

  // ==================== CBM SERIES (Compact Magnum) ====================
  {
    slug: 'cbm-2000-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/cbm.png'],
    name: { zh: 'CBM 2000 系列超大型径向柱塞马达', en: 'CBM 2000 Series Ultra-Large Radial Piston Motor' },
    description: {
      zh: 'CBM（Compact Magnum）2000系列是超大型径向柱塞液压马达，比扭矩1,000 Nm/bar，最大扭矩330 kNm。采用Magnum技术平台，在相对紧凑的框体内实现巨扭矩输出。适用于大型矿山球磨机、自磨机、大型回转窑等超重型工业驱动。符合DNV海洋工程规范。',
      en: 'CBM (Compact Magnum) 2000 series ultra-large radial piston motor, specific torque 1,000 Nm/bar, max torque 330 kNm. Magnum technology platform delivers massive torque in a relatively compact frame. For large mine ball mills, SAG mills, large rotary kilns. DNV offshore compliant.',
    },
    specs: [
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '1,000 Nm/bar' },
      { label: { zh: '最大扭矩', en: 'Max Torque' }, value: '330 kNm' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '0 – 70 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
      { label: { zh: '认证', en: 'Certification' }, value: 'DNV 海洋工程规范' },
    ],
    features: { zh: ['Magnum技术平台', '巨扭矩紧凑设计', 'DNV海洋工程认证', '空心轴通孔270mm', '缩紧盘联接可选'], en: ['Magnum technology platform', 'Massive torque compact design', 'DNV offshore certified', '270mm through-hole', 'Shrink disc coupling optional'] },
    featured: true,
  },
  {
    slug: 'cbm-4000-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/cbm.png'],
    name: { zh: 'CBM 4000 系列超大型径向柱塞马达', en: 'CBM 4000 Series Ultra-Large Radial Piston Motor' },
    description: {
      zh: 'CBM 4000系列比扭矩达2,000 Nm/bar，最大扭矩660 kNm。将Magnum技术推向更高水平，为全球最大型工业设备提供驱动解决方案。适用于大型矿用自磨机、半移动式破碎站驱动、深海采矿设备、大型海上平台定位系统等。',
      en: 'CBM 4000 series with specific torque 2,000 Nm/bar, max torque 660 kNm. Takes Magnum technology to the next level, providing drive solutions for the world\'s largest industrial equipment. For large SAG mills, semi-mobile crushing stations, deep-sea mining, offshore platform positioning.',
    },
    specs: [
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '2,000 Nm/bar' },
      { label: { zh: '最大扭矩', en: 'Max Torque' }, value: '660 kNm' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '0 – 55 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
      { label: { zh: '认证', en: 'Certification' }, value: 'DNV 海洋工程规范' },
    ],
    features: { zh: ['第二代Magnum技术', '660 kNm超大扭矩', '深海/极地工况适应', '模块化设计，可维护性高', '全球最大规格之一'], en: ['2nd gen Magnum technology', '660 kNm mega torque', 'Deep-sea/polar environment ready', 'Modular design, high maintainability', 'Among world\'s largest'] },
    featured: false,
  },
  {
    slug: 'cbm-6000-radial-piston-motor',
    category: 'hydraulic-motor',
    images: ['/images/cbm.png'],
    name: { zh: 'CBM 6000 系列全球最大径向柱塞马达', en: 'CBM 6000 Series World\'s Largest Radial Piston Motor' },
    description: {
      zh: 'CBM 6000系列是目前全球最大规格的径向柱塞液压马达，比扭矩3,000 Nm/bar，最大扭矩990 kNm，最大功率2,393 kW。代表了液压马达技术的巅峰，为极端工况的超大型设备提供终极驱动方案。适用于世界级超大型矿山自磨机、巨型海上风电安装平台、超大型隧道掘进机等。',
      en: 'CBM 6000 series is the world\'s largest radial piston hydraulic motor, specific torque 3,000 Nm/bar, max torque 990 kNm, max power 2,393 kW. Represents the pinnacle of hydraulic motor technology, providing the ultimate drive solution for extreme-duty mega equipment. For world-class mega SAG mills, giant offshore wind installation platforms, super-large TBMs.',
    },
    specs: [
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '3,000 Nm/bar' },
      { label: { zh: '最大扭矩', en: 'Max Torque' }, value: '990 kNm' },
      { label: { zh: '最大功率', en: 'Max Power' }, value: '2,393 kW' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '0 – 45 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
    ],
    features: { zh: ['全球最大液压马达', '990 kNm终极扭矩', '2,393kW超大功率', '世界级矿山/海洋工程', '技术巅峰之作'], en: ['World\'s largest hydraulic motor', '990 kNm ultimate torque', '2,393kW mega power', 'World-class mining/offshore', 'Pinnacle of technology'] },
    featured: true,
  },

  // ==================== MB SERIES (Marathon) ====================
  {
    slug: 'mb-400-marathon-motor',
    category: 'hydraulic-motor',
    images: ['/images/mb.png'],
    name: { zh: 'MB 400 系列 Marathon 径向柱塞马达', en: 'MB 400 Series Marathon Radial Piston Motor' },
    description: {
      zh: 'MB 400系列属于Marathon经典重型马达系列，排量25,145 cc/rev，比扭矩400 Nm/bar，最大扭矩130 kNm。久经考验的Marathon技术，结构坚固可靠，数十年矿山、冶金、船舶等领域验证。适用于重型破碎机、绞车、回转窑等稳固驱动需求。',
      en: 'MB 400 series classic Marathon heavy-duty motor, displacement 25,145 cc/rev, specific torque 400 Nm/bar, max torque 130 kNm. Proven Marathon technology with decades of validation in mining, metallurgy, marine. For heavy crushers, winches, rotary kilns requiring rock-solid reliability.',
    },
    specs: [
      { label: { zh: '排量', en: 'Displacement' }, value: '25,145 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '400 Nm/bar' },
      { label: { zh: '最大扭矩', en: 'Max Torque' }, value: '130 kNm' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '35 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
    ],
    features: { zh: ['经典Marathon技术', '数十年全球验证', '结构坚固，寿命极长', '低速大扭矩直驱', '备件全球通用'], en: ['Classic Marathon technology', 'Decades of global validation', 'Robust structure, extremely long life', 'Low-speed high-torque direct drive', 'Globally available spare parts'] },
    featured: true,
  },
  {
    slug: 'mb-800-marathon-motor',
    category: 'hydraulic-motor',
    images: ['/images/mb.png'],
    name: { zh: 'MB 800 系列 Marathon 径向柱塞马达', en: 'MB 800 Series Marathon Radial Piston Motor' },
    description: {
      zh: 'MB 800系列是大框体Marathon马达，排量17,768–50,265 cc/rev，比扭矩283–800 Nm/bar。同框体多种旋转组可选，可在扭矩和转速间灵活权衡。低排量变体转速可达130 rpm，高排量变体扭矩达260 kNm。适用于矿山、冶金、大型物料处理等。',
      en: 'MB 800 series large-frame Marathon motor, displacement 17,768–50,265 cc/rev, specific torque 283–800 Nm/bar. Multiple rotary group options in same frame for flexible torque-speed trade-off. Low displacement variant reaches 130 rpm, high displacement variant delivers 260 kNm. For mining, metallurgy, large material handling.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '17,768 – 50,265 cc/rev' },
      { label: { zh: '比扭矩范围', en: 'Specific Torque Range' }, value: '283 – 800 Nm/bar' },
      { label: { zh: '最大扭矩', en: 'Max Torque' }, value: '260 kNm' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '25 – 130 rpm (根据排量)' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
    ],
    features: { zh: ['大框体灵活配置', '扭矩/转速可权衡', '800-283等多变体', '最大130rpm(低排量)', 'Marathon经典可靠性'], en: ['Large frame flexible configuration', 'Torque/speed trade-off', 'Multiple variants (800-283 etc.)', 'Up to 130rpm (low disp.)', 'Classic Marathon reliability'] },
    featured: false,
  },
  {
    slug: 'mb-1600-marathon-motor',
    category: 'hydraulic-motor',
    images: ['/images/mb.png'],
    name: { zh: 'MB 1600 系列 Marathon 径向柱塞马达', en: 'MB 1600 Series Marathon Radial Piston Motor' },
    description: {
      zh: 'MB 1600系列是Marathon系列中的巨扭矩型号，排量86,392–100,529 cc/rev，比扭矩1,375–1,600 Nm/bar，最大扭矩520 kNm。专为超大扭矩低速驱动设计，适用于超大型矿用磨机、巨型回转窑、大型海上绞车等世界级重型设备。',
      en: 'MB 1600 series mega-torque Marathon model, displacement 86,392–100,529 cc/rev, specific torque 1,375–1,600 Nm/bar, max torque 520 kNm. Designed for ultra-high torque low-speed drives. For mega mine grinding mills, giant rotary kilns, large offshore winches.',
    },
    specs: [
      { label: { zh: '排量范围', en: 'Displacement Range' }, value: '86,392 – 100,529 cc/rev' },
      { label: { zh: '比扭矩范围', en: 'Specific Torque Range' }, value: '1,375 – 1,600 Nm/bar' },
      { label: { zh: '最大扭矩', en: 'Max Torque' }, value: '520 kNm' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '28 – 43 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
    ],
    features: { zh: ['520 kNm巨扭矩', '超大型磨机驱动', 'Marathon成熟技术', '低转速高可靠性', '全球服务网络支持'], en: ['520 kNm mega torque', 'Mega mill drive', 'Proven Marathon technology', 'Low-speed high reliability', 'Global service network support'] },
    featured: true,
  },
  {
    slug: 'mb-3200-marathon-motor',
    category: 'hydraulic-motor',
    images: ['/images/mb.png'],
    name: { zh: 'MB 3200 系列 Marathon 超大型马达', en: 'MB 3200 Series Marathon Ultra-Large Motor' },
    description: {
      zh: 'MB 3200系列是Marathon系列中的超大型号，排量201,059 cc/rev，比扭矩3,200 Nm/bar，最大扭矩1,040 kNm。全球最大规格的Marathon马达，代表了几十年的技术积累。适用于世界最大型矿山设备、巨型海上平台、超大型工程机械等终极驱动需求。',
      en: 'MB 3200 series ultra-large Marathon model, displacement 201,059 cc/rev, specific torque 3,200 Nm/bar, max torque 1,040 kNm. The largest Marathon motor globally, representing decades of technological accumulation. For world\'s largest mining equipment, giant offshore platforms, ultra-large construction machinery.',
    },
    specs: [
      { label: { zh: '排量', en: 'Displacement' }, value: '201,059 cc/rev' },
      { label: { zh: '比扭矩', en: 'Specific Torque' }, value: '3,200 Nm/bar' },
      { label: { zh: '最大扭矩', en: 'Max Torque' }, value: '1,040 kNm' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '16 rpm' },
      { label: { zh: '最大工作压力', en: 'Max Operating Pressure' }, value: '350 bar' },
      { label: { zh: '峰值压力', en: 'Peak Pressure' }, value: '420 bar' },
    ],
    features: { zh: ['Marathon最大规格', '1,040 kNm极限扭矩', '世界顶级矿山设备驱动', '数十年技术积淀', '极端工况终极方案'], en: ['Largest Marathon model', '1,040 kNm extreme torque', 'World\'s top mining equipment drive', 'Decades of tech accumulation', 'Ultimate solution for extreme conditions'] },
    featured: false,
  },

  // ==================== OTHER PRODUCTS ====================
  {
    slug: 'cbp-32-gear-pump',
    category: 'hydraulic-pump',
    images: ['/images/pump.png'],
    name: { zh: 'CBP-32 齿轮液压泵', en: 'CBP-32 Gear Hydraulic Pump' },
    description: {
      zh: 'CBP-32系列外啮合齿轮泵，结构简单，可靠性高。广泛用于各种液压系统中提供稳定的流量输出。',
      en: 'CBP-32 series external gear pump with simple structure and high reliability. Widely used in various hydraulic systems to provide stable flow output.',
    },
    specs: [
      { label: { zh: '排量', en: 'Displacement' }, value: '32 cc/rev' },
      { label: { zh: '最大压力', en: 'Max Pressure' }, value: '25 MPa' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '3000 rpm' },
      { label: { zh: '旋向', en: 'Rotation' }, value: '顺时针/逆时针 CW/CCW' },
      { label: { zh: '重量', en: 'Weight' }, value: '3.2 kg' },
    ],
    features: { zh: ['结构紧凑', '高效率', '低噪音', '可靠性高', '维护简单'], en: ['Compact structure', 'High efficiency', 'Low noise', 'High reliability', 'Simple maintenance'] },
    featured: false,
  },
  {
    slug: 'cbp-63-gear-pump',
    category: 'hydraulic-pump',
    images: ['/images/pump.png'],
    name: { zh: 'CBP-63 齿轮液压泵', en: 'CBP-63 Gear Hydraulic Pump' },
    description: {
      zh: 'CBP-63系列齿轮泵，更大排量设计，适用于需要中高流量的液压系统。',
      en: 'CBP-63 series gear pump with larger displacement design, suitable for hydraulic systems requiring medium to high flow.',
    },
    specs: [
      { label: { zh: '排量', en: 'Displacement' }, value: '63 cc/rev' },
      { label: { zh: '最大压力', en: 'Max Pressure' }, value: '23 MPa' },
      { label: { zh: '最大转速', en: 'Max Speed' }, value: '2500 rpm' },
      { label: { zh: '旋向', en: 'Rotation' }, value: '顺时针/逆时针 CW/CCW' },
      { label: { zh: '重量', en: 'Weight' }, value: '5.5 kg' },
    ],
    features: { zh: ['大排量', '高效率', '耐磨性强', '长寿命', '性价比高'], en: ['Large displacement', 'High efficiency', 'Strong wear resistance', 'Long life', 'Cost-effective'] },
    featured: false,
  },
  {
    slug: 'industrial-hydraulic-valve',
    category: 'hydraulic-valve',
    images: ['/images/industrial-valve.png'],
    name: { zh: '工业液压阀', en: 'Industrial Hydraulic Valve' },
    description: {
      zh: '工业液压阀系列涵盖方向阀、压力阀、流量阀三大类，采用板式或叠加式安装，适用于各类工业液压系统。高性能电磁铁，响应快，可靠性高。广泛应用于注塑机、压铸机、冶金设备等工业场合。',
      en: 'Industrial hydraulic valve series covers directional valves, pressure valves and flow valves. Available in subplate or sandwich mounting, suitable for all types of industrial hydraulic systems. High-performance solenoids with fast response and high reliability. Widely used in injection molding machines, die casting machines, metallurgical equipment.',
    },
    specs: [
      { label: { zh: '最大流量', en: 'Max Flow' }, value: '最高 1,200 L/min' },
      { label: { zh: '最大压力', en: 'Max Pressure' }, value: '35 MPa' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '板式/叠加式 Subplate / Sandwich' },
      { label: { zh: '通径', en: 'Port Size' }, value: 'NG6 – NG32' },
      { label: { zh: '电压', en: 'Voltage' }, value: 'DC 24V / AC 220V' },
    ],
    features: { zh: ['全品类覆盖（方向/压力/流量）', '高性能电磁铁', '长寿命设计', '多种阀芯机能可选', '国际标准安装面'], en: ['Full range (directional/pressure/flow)', 'High-performance solenoids', 'Long-life design', 'Multiple spool functions', 'ISO standard mounting interface'] },
    featured: false,
  },
  {
    slug: 'mobile-hydraulic-valve',
    category: 'hydraulic-valve',
    images: ['/images/mobile-valve.png'],
    name: { zh: '行走机械液压阀', en: 'Mobile Hydraulic Valve' },
    description: {
      zh: '行走机械液压阀专为工程机械、农业机械、环卫车辆等移动设备设计。采用片式多路阀结构，可灵活组合1-12联。可选手动、液控、电液比例控制方式，满足不同操控需求。紧凑设计适应移动设备严苛空间要求。',
      en: 'Mobile hydraulic valve specially designed for construction machinery, agricultural machinery, sanitation vehicles and other mobile equipment. Sectional monoblock valve structure, flexible combination of 1-12 sections. Manual, hydraulic pilot or electro-hydraulic proportional control available.',
    },
    specs: [
      { label: { zh: '最大流量', en: 'Max Flow' }, value: '最高 400 L/min per section' },
      { label: { zh: '最大压力', en: 'Max Pressure' }, value: '35 MPa' },
      { label: { zh: '联数', en: 'Sections' }, value: '1 – 12 联' },
      { label: { zh: '控制方式', en: 'Control Type' }, value: '手动/液控/电液比例 Manual/Hydraulic/EH' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '片式组合 Sectional Assembly' },
    ],
    features: { zh: ['片式模块化设计', '灵活组合1-12联', '多种控制方式', '紧凑适应移动空间', '耐振动抗冲击'], en: ['Sectional modular design', 'Flexible 1-12 sections', 'Multiple control options', 'Compact for mobile space', 'Vibration & shock resistant'] },
    featured: true,
  },
  {
    slug: 'screw-in-cartridge-valve',
    category: 'hydraulic-valve',
    images: ['/images/cartridge-valve.png'],
    name: { zh: '螺纹插装阀', en: 'Screw-in Cartridge Valve' },
    description: {
      zh: '螺纹插装阀系列包括溢流阀、单向阀、流量控制阀、电磁换向阀等，采用标准螺纹插装孔安装。体积小、重量轻、泄漏少，适用于集成阀块设计。广泛应用于工业液压集成块及紧凑型液压系统。',
      en: 'Screw-in cartridge valve series includes relief valves, check valves, flow control valves, solenoid directional valves etc., with standard threaded cavity installation. Compact size, light weight, low leakage. Ideal for integrated manifold design. Widely used in industrial hydraulic integrated blocks and compact hydraulic systems.',
    },
    specs: [
      { label: { zh: '最大流量', en: 'Max Flow' }, value: '最高 200 L/min' },
      { label: { zh: '最大压力', en: 'Max Pressure' }, value: '42 MPa' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '螺纹插装 Threaded Cavity' },
      { label: { zh: '插装孔规格', en: 'Cavity Spec' }, value: 'ISO 7789 / SAE 标准' },
      { label: { zh: '阀类型', en: 'Valve Types' }, value: '溢流/单向/流量/电磁等' },
    ],
    features: { zh: ['紧凑插装设计', '体积小重量轻', '零外泄漏', '集成阀块友好', '互换性强'], en: ['Compact cartridge design', 'Small size, light weight', 'Zero external leakage', 'Manifold integration friendly', 'Strong interchangeability'] },
    featured: false,
  },
  {
    slug: 'hydraulic-winch',
    category: 'hydraulic-cylinder',
    images: ['/images/winch.png'],
    name: { zh: '液压绞车', en: 'Hydraulic Winch' },
    description: {
      zh: 'HW系列液压绞车专为重载牵引、提升和拖拽作业设计。采用径向柱塞马达直驱方案，无需减速箱，结构紧凑可靠。可配内置制动器、自由落钩、限位开关等功能。广泛应用于矿山、船舶、建筑、林业等领域。',
      en: 'HW series hydraulic winch designed for heavy-duty pulling, lifting and towing operations. Direct drive by radial piston motor eliminates gearbox, resulting in compact and reliable structure. Available with built-in brake, free fall, limit switch options. Widely used in mining, marine, construction and forestry.',
    },
    specs: [
      { label: { zh: '拉力范围', en: 'Pulling Force Range' }, value: '5,000 – 500,000 kg' },
      { label: { zh: '驱动方式', en: 'Drive Type' }, value: '径向柱塞马达直驱 Direct Drive' },
      { label: { zh: '制动器', en: 'Brake' }, value: '液压多盘制动器 Multi-disc' },
      { label: { zh: '工作压力', en: 'Operating Pressure' }, value: '最大 350 bar' },
      { label: { zh: '安装方式', en: 'Mounting' }, value: '底座/法兰 Pedestal / Flange' },
    ],
    features: { zh: ['马达直驱，无减速箱', '高拉力紧凑设计', '内置制动安全可靠', '自由落钩可选', '可定制拉力及绳速'], en: ['Direct motor drive, no gearbox', 'High pull compact design', 'Built-in brake for safety', 'Free fall optional', 'Customizable pull and line speed'] },
    featured: false,
  },
  {
    slug: 'seal-kit-ca-cb',
    category: 'parts',
    images: ['/images/seal-kit.png'],
    name: { zh: 'CA/CB/CBP/MB系列密封维修包', en: 'CA/CB/CBP/MB Series Seal Repair Kit' },
    description: {
      zh: '适用于CA 50–210、CB 280–560、CBP 140–840、MB 400–3200全系列径向柱塞液压马达的密封维修包。包含全套密封件和O型圈，优质氟橡胶/丁腈橡胶材料。',
      en: 'Seal repair kit for CA 50–210, CB 280–560, CBP 140–840, MB 400–3200 all series radial piston hydraulic motors. Complete seal set with Viton/NBR materials.',
    },
    specs: [
      { label: { zh: '适用系列', en: 'Compatible Series' }, value: 'CA / CB / CBP / MB 全系列' },
      { label: { zh: '材质', en: 'Material' }, value: '氟橡胶/丁腈橡胶 Viton/NBR' },
      { label: { zh: '包装', en: 'Packaging' }, value: '按型号定制 Custom per Model' },
    ],
    features: { zh: ['原厂品质', '全套密封件', '耐高压高温', '安装指导提供', '快速发货'], en: ['OEM quality', 'Complete seal set', 'High pressure & temp resistant', 'Installation guidance', 'Fast shipping'] },
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category?: string): Product[] {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
