<template>
  <div class="city-form">
    <div class="city-form__inner">
      <input
        v-model="cityName"
        type="text"
        class="weather__input"
        placeholder="Введите название города"
      >
      <input
        v-on:click.prevent="getData(cityName)"
        type="submit"
        value="Добавить"
        class="weather__btn"
      >
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      cityName: null
    };
  },
  methods: {
    makeSomething: function() {
        console.log('test');
    },
    getData: function(city) {
      let url =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&APPID=2b831d27826b5e817af6ac8bfaa0ab61";
      axios
        .get(url)
        .then(response => {
          // this.city = response.data.name;
          console.log(response.data);
          console.log(`
            Город: ${response.data.name} 
            Страна: ${response.data.sys.country} 
            Температура: ${response.data.main.temp}
            Давление: ${response.data.main.pressure}
          `);
          this.makeSomething();
        })
        .catch(() => {
          //   console.log(error);
          alert("Такого города не существует");
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
