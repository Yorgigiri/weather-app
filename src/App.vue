<template>
  <div id="app" class="weather">
    <h1>WeatherMap</h1>
    <CityForm/>
    <CityWeatherList/>
  </div>
</template>

<script>
import CityForm from "./components/CityForm.vue";
import CityWeatherList from "./components/CityWeatherList.vue";

export default {
  name: "app",
  components: {
    CityForm,
    CityWeatherList
  }
};
</script>

<style lang="scss">
@import "normalize-scss";
@include normalize();
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

h1 {
  color: $color_orange4;
  margin: 20px 0;
}

.weather {
  &__btn {
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color_white;
    background: $color_orange;
    border-radius: 50px;
    padding: 20px 15px;
    border: 1px solid $color_orange2;
    transition: 0.2s background-color linear, 0.2s border-color linear, .2s box-shadow linear;

    &:hover {
      background: $color_orange2;
      border: 1px solid $color_orange3;
    }

    &:focus {
      box-shadow: inset 0px 3px 3px rgba($color_black, 0.2);
    }

    &_inverted {
      background: $color_white;
      color: $color_orange;
      &:hover {
        background: $color_orange5;
        color: $color_orange;
      }
    }
  }
  &__input {
    outline: none;
    padding: 20px 25px;
    border-radius: 50px;
    color: $color_gray2;
    background: $color_white;
    border: 1px solid $color_gray;
    transition: 0.2s background-color linear, 0.2s border-color linear;
    &:focus,
    &:hover {
      border-color: $color_orange;
    }
    @include placeholder {
      color: $color_gray2;
    }
  }
}
</style>




