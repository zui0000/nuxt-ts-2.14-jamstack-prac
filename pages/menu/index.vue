<template>
  <layout-wrapper>
    <layout-visual title="Menu" :height="40" visual="visual-menu" />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <div class="mb-20">
        <layout-menu-list
          v-for="(item, index) in items"
          :key="index"
          :image="item.image"
          :image-url="item.image.url"
          :name="item.name"
          :body="item.body"
          :price="item.price"
        />
      </div>
      <base-button name="トップへ戻る" link="/" />
    </div>
  </layout-wrapper>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import { Context } from '@nuxt/types'

@Component({})
export default class extends Vue {
  head() {
    return {
      title: 'メニュー',
    }
  }

  async asyncData(context: Context) {
    const { $config } = context
    const menu = await axios.get(`${$config.apiUrl}/menu`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })

    return {
      items: menu.data.contents,
    }
  }
}
</script>
