<template>
  <div class="custom_input">
    <label :for="inputLabelID">
      {{ inputLabelID }}
      <input
        :style="{ width: inputWidth, borderRadius: inputBorderRadius }"
        :type="inputType"
        :id="inputLabelID"
        :placeholder="placeholder"
      />
    </label>
    <span class="validation" >
      <span v-show="validation">
        {{ validationContent }}
      </span>
    </span>
  </div>
</template>

<script>
import {  } from '@vue/composition-api'

export default {
  name: 'common-select',
  props: {
    inputLabelID: {
      type: String,
      default: '라벨입니다.',
    },
    inputType: {
      type: String,
      default: 'text',
    },
    validation: {
      default: true,
    },
    validationContent: {
      type: String,
      default: '벨리데이션 문구입니다.',
    },
    placeholder: {
      type: String,
      default: '플레이스 홀더입니다.',
    },
    inputWidth: {
      type: String,
      default: '100px',

    },
    inputBorderRadius: {
      type: String,
      default: '15px',
    },
  },
};
</script>

<style lang="scss" scoped>
.custom_input {
  label {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
    font: normal normal normal 18px/24px NanumSquareRound;
    letter-spacing: -0.9px;
    color: #0d0d0d;

    input {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      border: 1px solid #b3b3b3;
      height: 40px;
      border-radius: 5px;
      outline: none;
      padding: 0 24px;
      &::placeholder {
        color: #b3b3b3;
        font-size: 14px;
      }
    }
  }

  .validation {
    padding-bottom: 25px;
    display: block;
    span {
      margin-left: 5px;
      text-align: left;
      font: normal normal normal 14px/19px NanumSquareRound;
      letter-spacing: -0.7px;
      color: #f64e5b;
      opacity: 1;
    }
  }
}
</style>
