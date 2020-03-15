<template>
  <div class="ParentA">{{ msg }}</div>
</template>

<script>
export default {
  name: "ParentB",
  data () {
    return {
      msg: 'ParentB'
    }
  }
}
</script>

<style scoped>
.ParentB {
  color: blue;
}
</style>