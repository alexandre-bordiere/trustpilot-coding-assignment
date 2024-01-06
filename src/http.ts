import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://ponychallenge.trustpilot.com/pony-challenge',
})
