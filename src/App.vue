<template>
  <div>
    <h1>Countries</h1>
    <button @click="showCountries">show countries</button>
    <ul>
      <li v-for="country in countries" :key="country.name.common">
        {{ country.name.common }}
        <img class="img" :src="country.coatOfArms.png" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { fetchCountries } from './api'
const countries = ref([])

const showCountries = async () => {
  try {
    countries.value = await fetchCountries()
  } catch (error) {
    console.error('Error loading countries:', error)
  }
}
</script>

<style>
.img {
  width: 50px;
}
</style>
