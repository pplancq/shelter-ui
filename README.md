# @pplancq/shelter-ui

**In a world of chaos, a well-designed shelter is our refuge.**

**Welcome to ShelterUI, where everything is well stashed away.**

## Build Status

[![Build](https://github.com/pplancq/shelter-ui/actions/workflows/build.yaml/badge.svg)](https://github.com/pplancq/shelter-ui/actions/workflows/build.yaml)
[![GitHub License](https://img.shields.io/github/license/pplancq/shelter-ui)](https://github.com/pplancq/shelter-ui?tab=MIT-1-ov-file#readme)

## Sonarcloud Quality Metrics

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=pplancq_shelter-ui&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=pplancq_shelter-ui)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=pplancq_shelter-ui&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=pplancq_shelter-ui)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=pplancq_shelter-ui&metric=bugs)](https://sonarcloud.io/summary/new_code?id=pplancq_shelter-ui)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=pplancq_shelter-ui&metric=coverage)](https://sonarcloud.io/summary/new_code?id=pplancq_shelter-ui)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=pplancq_shelter-ui&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=pplancq_shelter-ui)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=pplancq_shelter-ui&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=pplancq_shelter-ui)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=pplancq_shelter-ui&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=pplancq_shelter-ui)

---

## Overview

ShelterUI is a modular and scalable design system built to streamline UI development and ensure consistency across projects.  
Designed with modern front-end practices in mind, it provides reusable components, well-structured styles, and flexible theming options.

This repository serves as both a **sandbox for UX/UI experimentation** and a **practical foundation for my future projects**.

## Motivation

The primary goal behind ShelterUI is to **explore, refine, and document UX/UI practices** while overcoming common design system challenges.

As a front-end developer specializing in React, I wanted a structured and maintainable tool that aligns with modern development workflows.  
This project is not only an exercise in technical proficiency but also a learning hub for accessibility, scalability, and component-driven architecture.

Whether applied to real-world projects or simply used as an evolving reference, ShelterUI allows **rapid prototyping** without sacrificing quality.

---

## **Package Details**

ShelterUI is divided into multiple packages to provide modularity and flexibility in UI development.

| Package Name                                                                           | Version                                                                                                                    | Documentation                        | Description                                                   |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------- |
| [`@pplancq/shelter-ui-react`](https://www.npmjs.com/package/@pplancq/shelter-ui-react) | [![](https://img.shields.io/npm/v/%40pplancq%2Fshelter-ui-react)](https://www.npmjs.com/package/@pplancq/shelter-ui-react) | [README](./packages/react/README.md) | A React component library for UI development.                 |
| [`@pplancq/shelter-ui-css`](https://www.npmjs.com/package/@pplancq/shelter-ui-css)     | [![](https://img.shields.io/npm/v/%40pplancq%2Fshelter-ui-css)](https://www.npmjs.com/package/@pplancq/shelter-ui-css)     | [README](./packages/css/README.md)   | Provides predefined styles and theme variables for ShelterUI. |
| [`@pplancq/shelter-ui-icon`](https://www.npmjs.com/package/@pplancq/shelter-ui-icon)   | [![](https://img.shields.io/npm/v/%40pplancq%2Fshelter-ui-icon)](https://www.npmjs.com/package/@pplancq/shelter-ui-icon)   | [README](./packages/icon/README.md)  | Contains scalable SVG assets for UI icons.                    |

### **Changelog**

For version updates and detailed changes, see the **[CHANGELOG.md](./CHANGELOG.md)**.

## **Storybook Documentation**

ShelterUI features **interactive documentation** powered by Storybook, allowing developers to explore and test components in isolation.

[![Storybook](https://img.shields.io/badge/Storybook-docs-FF4785?logo=storybook&logoColor=white)](https://pplancq.github.io/shelter-ui/)

---

## **Installation & Usage**

ShelterUI is structured as multiple packages, allowing flexible integration based on your needs.

### **Installation**

```bash
npm install @pplancq/shelter-ui-react @pplancq/shelter-ui-icon @pplancq/shelter-ui-css
```

### **Using ShelterUI React**

The **React package (`@pplancq/shelter-ui-react`)** is designed to work independently, which means it **does not include default styles**.
If you choose to use it without the `@pplancq/shelter-ui-css` package, you'll need to implement the styling manually.

For a smoother experience with ready-to-use, predefined styles and theme tokens, it is **recommended** to install `@pplancq/shelter-ui-css`.
For details on how the default styles are applied in practice, please refer to our Storybook documentation.

### **Example Usage**

```tsx
import '@pplancq/shelter-ui-css/css/shelter-ui.css';
import { Button } from '@pplancq/shelter-ui-react';

export default function App() {
  return <Button>Click Me</Button>;
}
```

## Development & Future Plans

ShelterUI is actively evolving, with planned improvements including:

- Expanded component library with additional reusable UI elements.
- Enhanced theme customization and accessibility considerations.
- Storybook refinements for better interactivity and documentation.
- Performance optimizations for styling and asset handling.

## Contributions & Feedback

While this project is primarily for **personal exploration and learning**, constructive feedback and ideas are always welcome.  
Feel free to explore, experiment, and suggest improvements that could enhance the **efficiency, usability, and adaptability** of the system.

For guidelines on contributing, check out the [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

This project is open-source under the [MIT LICENSE](./LICENSE), allowing flexibility for adaptation and expansion.
