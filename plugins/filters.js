import dayjs from 'dayjs'
import Vue from 'vue'

Vue.filter('date', (val, format = 'DD.MM.YYYY HH:mm') =>
  dayjs(val).format(format)
)

Vue.filter('round', (value, decimals) => {
  if (!value) {
    value = 0
  }

  if (!decimals) {
    decimals = 0
  }

  value = Math.round(value * 10 ** decimals) / 10 ** decimals

  return value
})

Vue.filter('truncate', (value, count = 200) => {
  if (!value) {
    return ''
  }

  if (value.length < count) {
    return value
  }

  return `${value.substr(0, count)}...`
})