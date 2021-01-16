<template>
  <div :class="itemClass">
    <div :class="blockClass">
      <img v-if="image" :src="imageUrl" :alt="name" :class="imageClass" />
      <img
        v-else
        src="~/assets/img/dummy.jpg"
        :alt="name"
        :class="imageClass"
      />
      <div :class="dataClass">
        <div class="font-bold text-xl mb-2">{{ name }}</div>
        <p v-if="flagBody" class="text-base mb-2">{{ body }}</p>
        <p class="text-gray-700 text-base mb-4">{{ price }}円（税込）</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'LayoutMenuList',
})
export default class extends Vue {
  @Prop({ required: false, default: 'w-full mb-10 shadow-lg' })
  itemClass!: string

  @Prop({
    required: false,
    default:
      'md:w-full bg-gray-200 flex flex-wrap justify-between md:px-4 md:py-4',
  })
  blockClass!: string

  @Prop({ required: false, default: 'md:w-2/5' })
  imageClass!: string

  @Prop({ required: false, default: 'w-7/12 px-6 py-4 mb:px-0 mb:px-0' })
  dataClass!: string

  @Prop({ required: false, default: true })
  flagBody!: boolean

  @Prop({ required: true })
  image!: any

  @Prop({ required: true })
  imageUrl!: string

  @Prop({ required: true })
  name!: string

  @Prop({ required: true })
  body!: string

  @Prop({ required: true })
  price!: number
}
</script>
