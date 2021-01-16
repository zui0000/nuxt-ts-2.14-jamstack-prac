<template>
  <h2 class="font-sans text-lg text-gray-800 text-center text-3xl mb-10">
    <slot />
  </h2>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  name: 'BaseHeading',
})
export default class extends Vue {}
</script>
<style scoped></style>
