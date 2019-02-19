<template>
  <div class="container">
    <div class="container-title">なみきコイン ランキング</div>
    <co-ranking class="container-body"></co-ranking>
  </div>
</template>

<script>
// @ is an alias to /src
import Ranking from '@/components/Ranking.vue'

export default {
  components: {
    'co-ranking': Ranking
  }
}
</script>

<style lang="scss" src="../style/top/style.scss"></style>
