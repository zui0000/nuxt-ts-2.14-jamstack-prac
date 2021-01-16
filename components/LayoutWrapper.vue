<template>
  <div class="wrapper">
    <slot />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  name: 'LayoutWrapper',
})
export default class extends Vue {}
</script>
<style scoped>
.wrapper {
  padding-top: 80px;
  @media (min-width: 768px;) {
    padding-top: 0px;
  }
}
</style>
