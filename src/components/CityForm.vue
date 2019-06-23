<template>
  <div class="city-form">
    <form v-on:submit.prevent="getData(cityName)">
      <div class="city-form__inner">
        <input
          v-model="cityName"
          type="text"
          class="weather__input"
          placeholder="Введите название города"
        >
        <input type="submit" value="Добавить" class="weather__btn">
      </div>
    </form>
  </div>
</template>

<script>
import { eventEmitter } from "./../main";
const axios = require("axios");

export default {
  data() {
    return {
      cityName: null
    };
  },
  methods: {
    updateList: function() {
      eventEmitter.$emit('listUpdated');
    },
    addCity: function(cityName, storageData) {
      const localValue = localStorage.getItem("city: " + cityName);

      if (!localValue) {
        localStorage.setItem("city: " + cityName, storageData);
        this.updateList(); // Обновляем список
      } else {
        alert("Такой город уже добавлен!");
      }
    },
    getData: function(city) {
      let url =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&APPID=2b831d27826b5e817af6ac8bfaa0ab61";
      axios
        .get(url)
        .then(response => {
          let storageData;

          storageData = JSON.stringify({
            cityName: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            pressure: response.data.main.pressure
          });

          this.addCity(response.data.name, storageData);
        })
        .catch(() => {
          alert("Такого города не существует!");
        });
    }
  }
};
</script>

<style scoped lang="scss">
.city-form {
  padding: 30px 15px;
  background: #d57e31;
  margin-bottom: 24px;
  &__inner {
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .weather {
    &__input {
      width: 100%;
    }
    &__btn {
      min-width: 162px;
      margin-left: 16px;
    }
  }
}
</style>
