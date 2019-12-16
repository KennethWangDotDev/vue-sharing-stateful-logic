<template>
  <Mouse :render="mouseScoreRender" />
</template>

<script>
import Mouse from './Mouse.js';
export default {
  name: 'app',
  components: {
    Mouse,
  },
  methods: {
    mouseScoreRender({ x, y }) {
      return (
        <div>
          Your mouse score is: ({x * y})
        </div>
      );
    },
  },
};
</script>
