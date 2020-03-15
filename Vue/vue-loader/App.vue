<template>
  <div class="App">
    {{ msg }}
    <ParentA></ParentA>
    <ParentB></ParentB>
  </div>
</template>

<script>
import ParentA from "./ParentA.vue";
import ParentB from "./ParentB.vue"
export default {
  name: "App",
  components: {
    ParentA,
    ParentB
  },
  data() {
    return {
      msg: "App"
    }
  }
}
</script>

<style>
.App {
  color: #000;
}
</style>
