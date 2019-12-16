const Mouse = {
  props: {
    render: {
      type: Function,
      required: true,
    },
  },
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
  },
  render(h) {
    return (
      <div>
        {this.$props.render(this)}
      </div>
    );
  },
};
  
export default Mouse;
