<template>
  <div>
    <slot :x="x" :y="y"></slot>
  </div>
</template>

<script>
export default {
  mounted() {
      window.addEventListener('mousemove', this.update)
  },
  destroyed() {
      window.removeEventListener('mousemove', this.update)
  },
  data() {
    return { x: 0, y: 0 };
  },
  methods: {
    update(e) {
      this.x = e.pageX;
      this.y = e.pageY;
    }
  }
};
</script>