export const clsx = (...classNames: Array<string | boolean | undefined>) => {
  return classNames.filter(Boolean).join(' ');
};
