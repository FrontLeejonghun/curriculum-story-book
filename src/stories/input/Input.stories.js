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
  template: '<common-input v-bind="$props" />',
});
export const 기본버튼 = Template.bind({});

