<template>
  <Mouse :render="mousePosRender" />
</template>

<script>
import Mouse from './Mouse.js';
export default {
  name: 'app',
  components: {
    Mouse,
  },
  methods: {
    mousePosRender({ x, y }) {
      return (
        <div>
          The current mouse position is: ({x}, {y})
        </div>
      );
    },
  },
};
</script>
