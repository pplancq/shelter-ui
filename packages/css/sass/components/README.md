# Components

This folder contains styles specific to individual components used in the project, such as buttons or cards.
Each component has its own dedicated file.

## Files

- **buttons.scss**: Styles for buttons.
- **cards.scss**: Styles for cards.

## Example

```scss
/* buttons.scss */
.button {
  background-color: $primary-color;
  padding: $spacing-small $spacing-medium;
  border: none;
  border-radius: $spacing-small;
  color: $neutral-color;
}

/* cards.scss */
.card {
  background-color: $neutral-color;
  padding: $spacing-medium;
  border-radius: $spacing-small;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```
