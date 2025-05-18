export const iconList: Record<string, string> = {};
export const flagList: Record<string, string> = {};
export const logoList: Record<string, string> = {};

const icons = import.meta.glob('../../../../../packages/icon/icon/*.svg', {
  import: 'default',
  eager: true,
});

Object.keys(icons).forEach((key: string) => {
  iconList[(key.split('/').pop() ?? '').replace('.svg', '')] = icons[key] as string;
});

const flags = import.meta.glob('../../../../../packages/icon/flag/*.svg', {
  import: 'default',
  eager: true,
});

Object.keys(flags).forEach((key: string) => {
  flagList[(key.split('/').pop() ?? '').replace('.svg', '')] = flags[key] as string;
});

const logos = import.meta.glob('../../../../../packages/icon/logo/*.svg', {
  import: 'default',
  eager: true,
});

Object.keys(logos).forEach((key: string) => {
  logoList[(key.split('/').pop() ?? '').replace('.svg', '')] = logos[key] as string;
});
