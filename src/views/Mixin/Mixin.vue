<template>
  <div>
      <MousePosition />
      <MouseScore />
  </div>
</template>

<script>
import MousePosition from './MousePosition.vue'
import MouseScore from './MouseScore.vue'

export default {
  components: {
      MousePosition,
      MouseScore,
  }
}
</script>
