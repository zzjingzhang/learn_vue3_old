
<script>
export default {
  render() {
    return (
      <div>
        <h2>
          <div>hello world</div>
        </h2>
        {this.$slots.default ? (
          this.$slots.default()
        ) : (
          <span>插槽默认内容</span>
        )}
      </div>
    )
  },
}
</script>

<style>
</style>