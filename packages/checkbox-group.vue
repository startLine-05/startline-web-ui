<template>
  <div class="one-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'stCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
