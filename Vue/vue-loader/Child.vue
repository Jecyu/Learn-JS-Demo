<template>
  <div class="Child">
    {{ msg }}
    <div class="Child-content">Child 内容</div>
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
      msg: "Child"
    };
  }
};
</script>

<style lang="scss" scoped>
.Child {
  color: green;
  &-content {
    background: yellow;
  }
}
</style>
