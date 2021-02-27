import commoninput from './common-input.vue';

export default {
  title: 'Example/input',
  component: commoninput,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { commoninput },
  template: '<commoninput v-bind="$props" />',
});
export const 기본인풋 = Template.bind({});

