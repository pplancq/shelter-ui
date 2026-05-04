type SvgContext = ((key: string) => string) & { keys(): string[] };

function createIconList(context: SvgContext): Record<string, string> {
  const iconList: Record<string, string> = {};

  context.keys().forEach(key => {
    iconList[(key.split('/').pop() ?? '').replace('.svg', '')] = context(key);
  });

  return iconList;
}

export const iconList = createIconList(
  import.meta.webpackContext('../../../../../packages/icon/icon/', {
    recursive: false,
    regExp: /\.svg$/,
    mode: 'sync',
  }) as SvgContext,
);

export const flagList = createIconList(
  import.meta.webpackContext('../../../../../packages/icon/flag/', {
    recursive: false,
    regExp: /\.svg$/,
    mode: 'sync',
  }) as SvgContext,
);

export const logoList = createIconList(
  import.meta.webpackContext('../../../../../packages/icon/logo/', {
    recursive: false,
    regExp: /\.svg$/,
    mode: 'sync',
  }) as SvgContext,
);
