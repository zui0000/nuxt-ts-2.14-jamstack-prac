<template>
  <div>
    <layout-wrapper>
      <layout-visual
        :title="'NUXT SMAPLE SITE DEMO'"
        :message="'お知らせやメニューをmicroCMSを導入したDEMOサイトになります'"
      />
      <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
        <base-heading> MdN Cafeのおすすめメニュー </base-heading>
        <div class="flex md:flex-wrap justify-between mb-20 md:mb-0">
          <layout-menu-list
            v-for="(item, index) in menuItems"
            :key="index"
            :image="item.image"
            :image-url="item.image.url"
            :name="item.name"
            :body="item.body"
            :price="item.price"
            item-class="md:w-56 mb-20 shadow-lg bg-gray-200"
            block-class="max-w"
            image-class="w-full"
            data-class="px-6 py-4"
            :flag-body="false"
          />
        </div>
        <base-button :name="'メニューの一覧'" :link="'/menu'" />
        <h2 class="font-sans text-lg text-gray-800 text-center text-3xl mb-10">
          MdN Cafeのお知らせ
        </h2>
        <div class="mb-20">
          <div
            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5"
          >
            <a href="/information/detail" class="block px-4 py-3">
              <time class="text-gray-700 text-base mb-1 block md:w-1/6">
                2020.08.15
              </time>
              <div class="md:w-10/12">お知らせタイトル</div>
            </a>
          </div>
          <div
            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5"
          >
            <a href="/information/detail" class="block px-4 py-3">
              <time class="text-gray-700 text-base mb-1 block md:w-1/6">
                2020.08.15
              </time>
              <div class="md:w-10/12">お知らせタイトル</div>
            </a>
          </div>
          <div
            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5"
          >
            <a href="/information/detail" class="block px-4 py-3">
              <time class="text-gray-700 text-base mb-1 block md:w-1/6">
                2020.08.15
              </time>
              <div class="md:w-10/12">お知らせタイトル</div>
            </a>
          </div>
        </div>
        <base-button :name="'お知らせの一覧'" :link="'/information'" />
      </div>
    </layout-wrapper>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import { Context } from '@nuxt/types'
import BaseButton from '../components/BaseButton.vue'
import BaseHeading from '../components/BaseHeading.vue'
import LayoutVisual from '../components/LayoutVisual.vue'

@Component({
  components: { LayoutVisual, BaseHeading, BaseButton },
})
export default class extends Vue {
  async asyncData(context: Context) {
    const { $config } = context
    const menu = await axios.get(
      `${$config.apiUrl}/menu?limit=3&filters=flag[equals]true`,
      {
        headers: { 'X-API-KEY': $config.apiKey },
      }
    )
    return {
      menuItems: menu.data.contents,
    }
  }
}
</script>

<style scoped>
.visual-home {
  background-image: url('~@/assets/img/visual-home.jpg');
}
</style>
