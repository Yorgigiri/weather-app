<template>
  <div class="city-weather-list__row">
    <div class="city-weather-list__column">{{city.cityName}}, {{city.country}}</div>
    <div class="city-weather-list__column">{{city.temperature}} &deg;C</div>
    <div class="city-weather-list__column">{{city.pressure}} hPa</div>
    <div class="city-weather-list__column">
      <button class="weather__btn weather__btn_inverted" v-on:click="removeItem">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  },
  methods: {
    removeItem: function() {
      this.$emit('remove-element');
    }
  }
};
</script>