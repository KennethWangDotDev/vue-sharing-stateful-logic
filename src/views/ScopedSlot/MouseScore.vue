<template>
  <MouseSlot v-slot="{x, y}">
    Your mouse score is: {{x * y}}
  </MouseSlot>
</template>

<script>
import MouseSlot from './MouseSlot.vue'

export default {
  components: {
    MouseSlot,
  }
}
</script>
