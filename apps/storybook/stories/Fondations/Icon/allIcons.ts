export const iconList: Record<string, string> = {};
export const flagList: Record<string, string> = {};
export const logoList: Record<string, string> = {};

type SvgContext = ((key: string) => string) & { keys(): string[] };

// require.context is a webpack/rspack API for dynamic module imports
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const req = require as any;

const icons: SvgContext = req.context('../../../../../packages/icon/icon/', false, /\.svg$/);
icons.keys().forEach((key: string) => {
  iconList[(key.split('/').pop() ?? '').replace('.svg', '')] = icons(key);
});

const flags: SvgContext = req.context('../../../../../packages/icon/flag/', false, /\.svg$/);
flags.keys().forEach((key: string) => {
  flagList[(key.split('/').pop() ?? '').replace('.svg', '')] = flags(key);
});

const logos: SvgContext = req.context('../../../../../packages/icon/logo/', false, /\.svg$/);
logos.keys().forEach((key: string) => {
  logoList[(key.split('/').pop() ?? '').replace('.svg', '')] = logos(key);
});
