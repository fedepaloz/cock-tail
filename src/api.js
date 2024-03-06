// api.js

import axios from 'axios'

const baseURL = 'https://restcountries.com/v3.1'

const instance = axios.create({
  baseURL
})

export const fetchCountries = async () => {
  try {
    const response = await instance.get('/all')
    return response.data
  } catch (error) {
    console.error('Error fetching countries:', error)
    throw error
  }
}
