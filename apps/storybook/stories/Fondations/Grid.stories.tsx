import { Grid } from '@pplancq/shelter-ui-react';
import type { Meta, StoryObj } from '@storybook/react';

import '@pplancq/shelter-ui-css/sass/variables/_tokens.scss';
import '@pplancq/shelter-ui-css/sass/layout/_grid.scss';
import './Grid.scss';

const meta = {
  title: 'Fondations/Grid',
  component: Grid,
  subcomponents: { Grid },
  parameters: {
    layout: 'padded',
  },
  tags: ['!autodocs', '!dev'],
  args: {},
} satisfies Meta<typeof Grid<'div'>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleLayout: Story = {
  tags: ['dev'],
  // eslint-disable-next-line no-empty-pattern
  render: ({}) => (
    <Grid container>
      <Grid colSpan={{ mobile: 4, tablet: 8, 'desktop-small': 12 }} component="header">
        Header
      </Grid>
      <Grid container colSpan={{ mobile: 4, tablet: 8, 'desktop-small': 9 }} component="main">
        <Grid colSpan={{ mobile: 4, tablet: 4, 'desktop-small': 3 }} component="article">
          <h2>Article 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique felis et neque volutpat, eu posuere
            quam vulputate. Donec a dolor ornare, euismod elit id, lacinia nibh. Suspendisse volutpat eleifend
            convallis.
          </p>
        </Grid>
        <Grid colSpan={{ mobile: 4, tablet: 4, 'desktop-small': 3 }} component="article">
          <h2>Article 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique felis et neque volutpat, eu posuere
            quam vulputate. Donec a dolor ornare, euismod elit id, lacinia nibh. Suspendisse volutpat eleifend
            convallis.
          </p>
        </Grid>
        <Grid colSpan={{ mobile: 4, tablet: 4, 'desktop-small': 3 }} component="article">
          <h2>Article 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique felis et neque volutpat, eu posuere
            quam vulputate. Donec a dolor ornare, euismod elit id, lacinia nibh. Suspendisse volutpat eleifend
            convallis.
          </p>
        </Grid>
        <Grid colSpan={{ mobile: 4, tablet: 4, 'desktop-small': 3 }} component="article">
          <h2>Article 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique felis et neque volutpat, eu posuere
            quam vulputate. Donec a dolor ornare, euismod elit id, lacinia nibh. Suspendisse volutpat eleifend
            convallis.
          </p>
        </Grid>
      </Grid>
      <Grid colSpan={{ mobile: 4, tablet: 8, 'desktop-small': 3 }} component="section">
        Side Panel
      </Grid>
      <Grid colSpan={{ mobile: 4, tablet: 8, 'desktop-small': 12 }} component="footer">
        Footer
      </Grid>
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  // eslint-disable-next-line no-empty-pattern
  render: ({}) => (
    <Grid container>
      <Grid colSpan={4}>{`colSpan={4}`}</Grid>
      <Grid colSpan={4}>{`colSpan={4}`}</Grid>
      <Grid colSpan={4}>{`colSpan={4}`}</Grid>
    </Grid>
  ),
};

export const Responsive: Story = {
  // eslint-disable-next-line no-empty-pattern
  render: ({}) => (
    <Grid container>
      <Grid colSpan={{ mobile: 4, tablet: 4 }}>{`colSpan={{ mobile: 4, tablet: 4 }}`}</Grid>
      <Grid colSpan={{ mobile: 4, tablet: 4 }}>{`colSpan={{ mobile: 4, tablet: 4 }}`}</Grid>
      <Grid colSpan={{ mobile: 4, tablet: 4 }}>{`colSpan={{ mobile: 4, tablet: 4 }}`}</Grid>
    </Grid>
  ),
};

export const Wrapping: Story = {
  // eslint-disable-next-line no-empty-pattern
  render: ({}) => (
    <Grid container>
      <Grid colSpan={6}>{`colSpan={6}`}</Grid>
      <Grid colSpan={6}>{`colSpan={6}`}</Grid>
      <Grid colSpan={6}>{`colSpan={6}`}</Grid>
      <Grid colSpan={6}>{`colSpan={6}`}</Grid>
    </Grid>
  ),
};

export const Starts: Story = {
  // eslint-disable-next-line no-empty-pattern
  render: ({}) => (
    <Grid container>
      <Grid colSpan={3} colStart={2}>
        {`colSpan={3} colStart={2}`}
      </Grid>
      <Grid colSpan={3} colStart={6}>
        {`colSpan={3} colStart={6}`}
      </Grid>
    </Grid>
  ),
};

export const AutoColumns: Story = {
  // eslint-disable-next-line no-empty-pattern
  render: ({}) => (
    <Grid container>
      {Array.from({ length: 12 }, (_, index) => (
        <Grid key={index}>1</Grid>
      ))}
    </Grid>
  ),
};

export const Nesting: Story = {
  // eslint-disable-next-line no-empty-pattern
  render: ({}) => (
    <Grid container>
      <Grid container colSpan={6}>
        <Grid colSpan={3}>{`colSpan={3}`}</Grid>
        <Grid colSpan={3}>{`colSpan={3}`}</Grid>
      </Grid>
      <Grid container colSpan={6}>
        <Grid colSpan={2}>{`colSpan={2}`}</Grid>
        <Grid colSpan={3} colStart={4}>
          {`colSpan={3} colStart={4}`}
        </Grid>
      </Grid>
    </Grid>
  ),
};
