<template>
  <button :class="[active ? 'on' : '']" :style="{ width:width,borderRadius:borderRadius,height:height}">{{ btnTitle }}</button>
</template>

<script>
export default {
  name: 'common-button-not-radius',
  props: {
    btnTitle: {
      type:String,
      default: '버튼입니다.',
    },
    active: Boolean,
      borderRadius: {
        default: '5px',
        type: String,
      },
      width: {
        default: '114px',
        type: String,
      },
      height: { default: '50px', type: String },
  }, 
  setup() {
    const btnEvent = () => {};
    return { btnEvent };
  },
};
</script>

<style scoped lang="scss">
button {
  background: #fff;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  border: 2px solid #f64e5b;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #f64e5b;
  opacity: 1;
  &.on {
    color: #fff;
    background: #f64e5b 0 0 no-repeat padding-box;
  }
}
</style>
