<template>
  <div :class="`mb-10 mx-auto ${classPosition}`">
    <a
      :href="link"
      :class="`font-semibold md:text-lg xl:text-base px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 leading-tight shadow-md ${classShape} ${classBackGroundColor} ${classBackGroundHoverColor} ${classTextColor}`"
    >
      {{ name }}
    </a>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component({
  name: 'BaseButton',
})
export default class extends Vue {
  @Prop({ required: true })
  name!: string

  @Prop({ required: true })
  link!: string

  @Prop({ required: false, default: 'text-center' })
  classPosition!: string

  @Prop({ required: false, default: 'rounded-lg' })
  classShape!: string

  @Prop({ required: false, default: 'bg-white' })
  classBackGroundColor!: string

  @Prop({ required: false, default: 'hover:bg-gray-200' })
  classBackGroundHoverColor!: string

  @Prop({ required: false, default: 'text-gray-800' })
  classTextColor!: string
}
</script>
<style scoped></style>
