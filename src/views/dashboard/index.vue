<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>

    <svg-icon icon-class="eye" />
    <svg-icon icon-class="eye-open" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['name'])
  }
  // created() {
  //   // 调用vuex中定义的获取用户信息方法
  //   this.$store.dispatch('user/getUserInfo')
  // }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
