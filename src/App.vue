<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { nasaAPI } from '@/api/nasa-api'
import PageHeader from './components/PageHeader.vue'
const fetchedData = ref<NasaItem[]>([])
const inputValue = ref<string>('')

interface NasaDataItem {
  title: string
  description: string
}

interface NasaLink {
  href: string
}

interface NasaItem {
  data: NasaDataItem[]
  links: NasaLink[]
}

async function fetchData() {
  try {
    const { data } = await nasaAPI.get(`/search?q=${inputValue.value}`)
    fetchedData.value = data.collection.items
    console.log("🚀 ~ fetchData ~ data.collection.items:", data.collection.items)
  } catch (error) {
    throw error
  }
}

function handleSearch(e: string) {
  inputValue.value = (e) as string
  fetchData()
}




</script>

<template>
  <PageHeader @handleSearch="handleSearch" />
  <ul>
     <li v-for="(item, index) in fetchedData" :key="index">
      <img
        v-if="item.links?.[0]?.href"
        :src="item.links[0].href"
        :alt="item.data?.[0]?.title || 'No title'"
      />
      <p>{{ item.data?.[0]?.description || 'No description' }}</p>
    </li>
  </ul>
</template>

<style scoped></style>
