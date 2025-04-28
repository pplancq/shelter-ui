export const iconList: Record<string, string> = {};
export const flagList: Record<string, string> = {};
export const logoList: Record<string, string> = {};

require
  .context(`@pplancq/shelter-ui-icon/icon`, false, /\.svg$/)
  .keys()
  .forEach((key: string) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports,global-require,import/no-dynamic-require
    iconList[(key.split('/').pop() as string).replace('.svg', '')] = require(
      `@pplancq/shelter-ui-icon/icon${key.replace('./', '/')}`,
    );
  });
require
  .context(`@pplancq/shelter-ui-icon/flag`, false, /\.svg$/)
  .keys()
  .forEach((key: string) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports,global-require,import/no-dynamic-require
    flagList[(key.split('/').pop() as string).replace('.svg', '')] = require(
      `@pplancq/shelter-ui-icon/flag${key.replace('./', '/')}`,
    );
  });
require
  .context(`@pplancq/shelter-ui-icon/logo`, false, /\.svg$/)
  .keys()
  .forEach((key: string) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports,global-require,import/no-dynamic-require
    logoList[(key.split('/').pop() as string).replace('.svg', '')] = require(
      `@pplancq/shelter-ui-icon/logo${key.replace('./', '/')}`,
    );
  });
