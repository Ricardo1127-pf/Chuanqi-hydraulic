export interface ProductSpec {
  label: { zh: string; en: string };
  value: string;
}

export interface Product {
  slug: string;
  category: 'hydraulic-motor' | 'hydraulic-pump' | 'hydraulic-valve' | 'hydraulic-cylinder' | 'parts';
  images: string[];
  name: { zh: string; en: string };
  description: { zh: string; en: string };
  specs: ProductSpec[];
  features: { zh: string[]; en: string[] };
  featured: boolean;
}

export type Category = Product['category'];

export const CATEGORIES: { key: Category; name: { zh: string; en: string }; icon: string }[] = [
  { key: 'hydraulic-motor', name: { zh: '液压马达', en: 'Hydraulic Motors' }, icon: '⚙️' },
  { key: 'hydraulic-pump', name: { zh: '液压泵', en: 'Hydraulic Pumps' }, icon: '🔧' },
  { key: 'hydraulic-valve', name: { zh: '液压阀', en: 'Hydraulic Valves' }, icon: '🔩' },
  { key: 'hydraulic-cylinder', name: { zh: '液压绞车', en: 'Hydraulic Winches' }, icon: '🌀' },
  { key: 'parts', name: { zh: '配件/维修件', en: 'Parts & Repair Kits' }, icon: '📦' },
];
