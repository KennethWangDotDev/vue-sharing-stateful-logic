<template>
  <div>
    The current mouse position is: {{x}}, {{y}}
  </div>
</template>

<script>
import { useMousePosition } from './useMousePosition'

export default {
  setup() {
    const { x, y } = useMousePosition();
    // other logic...
    return { x, y }
  }
}
</script>
