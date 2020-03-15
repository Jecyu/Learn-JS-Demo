<template>
  <div class="ParentA">
    {{ msg }}
    <Child></Child>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "ParentA",
  components: {
    Child
  },
  data() {
    return {
      msg: "ParentA"
    };
  }
};
</script>

<style lang="scss" scoped>
.ParentA {
  color: red;
  /deep/ .Child {
    color: pink;
    &-content {
      background: green;
    }
  }
}
</style>
