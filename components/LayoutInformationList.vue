<template>
  <div
    class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5"
  >
    <a :href="'/information/' + id + '/'" class="block px-4 py-3">
      <time class="text-gray-700 text-base mb-1 block md:w-1/6">
        {{ date | formatDate }}
      </time>
      <div class="md:w-10/12">
        {{ title }}
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component({
  name: 'LayoutInformationList',
})
export default class extends Vue {
  @Prop({ required: true })
  title!: string

  @Prop({ required: true })
  date!: string

  @Prop({ required: true })
  id!: string
}
</script>

<style scoped></style>
