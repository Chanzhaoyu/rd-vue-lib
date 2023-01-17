<template>
  <button class="rd-button" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',

  props: {
    disabled: {
      type: Boolean,
    },
  },

  emits: {
    click: (ev: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const handleClick = (ev: MouseEvent) => {
      if (props.disabled) {
        ev.preventDefault();
        return;
      }
      emit('click', ev);
    };

    return {
      handleClick,
    };
  },
});
</script>
