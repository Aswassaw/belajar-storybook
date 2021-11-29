// import Center from "../components/stories/utilities/Center/Center";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// addDecorator((story) => <Center>{story()}</Center>);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
