<script>
export default {
  props: {
    isPopped: {
      type: Boolean,
      required: true,
    },
    isLastChild: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    classObject: function () {
      const defaultClass = "border-2 border-dashed text-center py-2";
      if (!this.isLastChild) return defaultClass;

      return `${defaultClass} ${
        this.isPopped && this.isLastChild
          ? "border-rose-400"
          : "border-emerald-400"
      }`;
    },
  },
};
</script>
<template>
  <div v-bind:class="classObject">
    <slot></slot>
  </div>
</template>
