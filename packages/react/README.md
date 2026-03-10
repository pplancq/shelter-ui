# @pplancq/shelter-ui-react

This package provides React components for the Shelter UI design system.

## Installation

Use npm to install the package:

```bash
npm install @pplancq/shelter-ui-react
```

## Example of usage in a React project

```javascript
import { Button } from '@pplancq/shelter-ui-react';

export const App = () => {
  return (
    <div>
      <Button label="Click me" onClick={() => alert('Button clicked!')} />
    </div>
  );
};
```

## Usage with Vite or Vitest

This package is published as **ESM-only** and its built output contains `.svg` imports (from `@pplancq/shelter-ui-icon`).
Because Vite's dependency pre-bundler (esbuild) does not handle `.svg` imports natively, you need to add the following to your Vite or Vitest configuration:

```ts
// vite.config.ts
export default defineConfig({
  server: {
    deps: {
      inline: ['@pplancq/shelter-ui-react'],
    },
  },
});
```

```ts
// vitest.config.ts
export default defineConfig({
  test: {
    server: {
      deps: {
        inline: ['@pplancq/shelter-ui-react'],
      },
    },
  },
});
```

> This forces Vite to process the package through its full transform pipeline instead of pre-bundling it with esbuild.

## Credits

This package is part of the Shelter UI design system, built to provide a cohesive and accessible user interface.  
For more information, visit the [Shelter UI GitHub repository](https://github.com/pplancq/shelter-ui).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
