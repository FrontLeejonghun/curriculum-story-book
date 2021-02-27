import commonButton from './common-button.vue';

export default {
  title: 'Example/Button',
  component: commonButton,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { commonButton },
  template: '<common-button v-bind="$props" />',
});
export const 기본버튼 = Template.bind({});

