<template>
  <layout-wrapper>
    <layout-visual
      title="Information"
      :height="40"
      visual="visual-information"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <h2 class="text-xl pb-5 border-b border-gray-500 border-solid font-bold">
        {{ item.title }}
      </h2>
      <div class="pt-4 mb-4">
        <time class="text-gray-700 text-base">
          {{ item.date | formatDate }}
        </time>
      </div>
      <div class="mb-20" v-html="$sanitize(item.body)"></div>
      <base-button name="お知らせへ戻る" link="/information/" />
    </div>
  </layout-wrapper>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import { Context } from '@nuxt/types'
@Component({})
export default class extends Vue {
  async asyncData(context: Context) {
    const { $config, params, error } = context
    try {
      const { data } = await axios.get(
        `${$config.apiUrl}/information/${params.id}`,
        {
          headers: { 'X-API-KEY': $config.apiKey },
        }
      )
      return {
        item: data,
      }
    } catch (err) {
      error({
        errorCode: 404,
      })
    }
  }

  head() {
    return {
      title: this.item.title,
    }
  }

  private item!: any
}
</script>

<style scoped></style>
