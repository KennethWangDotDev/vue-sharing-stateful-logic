<template>
  <MouseSlot v-slot="{x, y}">
    The current mouse position is: {{x}}, {{y}}
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
