# @pplancq/shelter-ui-icon

This package contains a collection of ready-to-use SVG icons.

## Installation

Use npm to install the package:

```bash
npm install @pplancq/shelter-ui-icon
```

## Example of usage in a React project

```javascript
import homeIcon from '@pplancq/shelter-ui-icon/icon/home.svg';

export const App = () => {
  return (
    <div>
      <img src={homeIcon} alt="Home" />
    </div>
  );
};
```

## Package Structure

- `icon/`: Contains the SVG icons.
- `flag/`: Contains the SVG flags.
- `logo/`: Contains the SVG logos.

## Credits

This package is part of the Shelter UI design system, built to provide a cohesive and accessible user interface.  
For more information, visit the [Shelter UI GitHub repository](https://github.com/pplancq/shelter-ui).

The SVGs used in this package come from the following sources:

- **Icons**: [Unicons 4.2.0 Line](https://github.com/iconscout/unicons)
- **Flags**: [Flag Icons 7.3.2 1x1](https://github.com/lipis/flag-icons)
- **Logos**: [Devicon 2.16.0 Original](https://github.com/devicons/devicon)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
