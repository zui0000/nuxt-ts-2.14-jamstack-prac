<template>
  <layout-wrapper>
    <layout-visual
      title="Information"
      :height="40"
      visual="visual-information"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <layout-information-list
        v-for="(item, index) in items"
        :id="item.id"
        :key="index"
        :date="item.date"
        :title="item.title"
      />
      <base-button name="トップへ戻る" link="/" />
    </div>
  </layout-wrapper>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import { Context } from '@nuxt/types'
import LayoutInformationList from '../../components/LayoutInformationList.vue'

@Component({
  components: { LayoutInformationList },
})
export default class extends Vue {
  head() {
    return {
      title: 'お知らせ',
    }
  }

  async asyncData(context: Context) {
    const { $config } = context
    const { data } = await axios.get(`${$config.apiUrl}/information`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return {
      items: data.contents,
    }
  }
}
</script>
