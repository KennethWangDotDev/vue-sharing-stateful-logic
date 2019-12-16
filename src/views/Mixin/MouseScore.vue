<template>
  <div>
      Your mouse score is: {{x * y}}
  </div>
</template>

<script>
import mouseMixin from './mouse.mixin';

export default {
  mixins: [mouseMixin]
};
</script>
