<template>
  <div class="city-weather-list">
    <div class="city-weather-list__inner">
      <div class="city-weather-list__row city-weather-list__row_with-sorting">
        <div class="city-weather-list__column">
          <span class="city-weather-list__label_city">
            Город
            <span class="city-weather-list__sort"></span>
          </span>
        </div>
        <div class="city-weather-list__column">Температура</div>
        <div class="city-weather-list__column">Атмосферное давление</div>
        <div class="city-weather-list__column"></div>
      </div>

      <CityWeatherListElement
        v-for="(city, index) of citiesArray"
        :key="city.id"
        :city="city"
        @remove-element="removeElement(index)"
      />

    </div>
  </div>
</template>

<script>
import CityWeatherListElement from "./CityWeatherListElement.vue";

export default {
  data() {
    return {
      city: null,
      citiesArray: []
    };
  },
  components: {
    CityWeatherListElement
  },
  mounted() {
    this.showList();
  },
  methods: {
    removeElement(element) {
      // array.$remove(element);
      console.log(element);
      this.$delete(this.citiesArray, element);
    },
    showList() {
      const PATTERN = /city:/;
      let array = []; // массив для всех ключей localStorage
      let array2 = []; // массив только для ключей городов
      let array3 = []; // массив для объектов с данными по городам

      for (let i = 0; i < localStorage.length; i++) {
        array.push(localStorage.key(i));
      }

      array.filter(function(str) {
        if (PATTERN.test(str)) {
          array2.push(str);
        }
      });

      for (let i = 0; i < localStorage.length; i++) {
        if (array2[i]) {
          let obj = JSON.parse(localStorage.getItem(array2[i]));
          array3.push(obj);
        }
      }

      this.citiesArray = array3;
    }
  }
};
</script>

<style lang="scss">
.city-weather-list {
  margin: 0 auto;
  max-width: 1024px;
  overflow: auto;
  padding-bottom: 20px;
  &__label {
    &_city {
      float: left;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  &__sort {
    margin-left: 7px;
    display: inline-block;
    width: 7px;
    height: 12px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 3.5px 4px 3.5px;
      border-color: transparent transparent #bdbdbd transparent;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 4px 3.5px 0 3.5px;
      border-color: #bdbdbd transparent transparent transparent;
    }
  }
  &__inner {
    min-width: 768px;
  }
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;
    border-bottom: 1px solid $color_gray3;
    &_with-sorting {
      background: $color_gray3;
      color: $color_gray4;
      padding: 10px 0;
      font-size: 14px;
      border-bottom: none;
    }
  }
  &__column {
    padding: 0 15px;
    text-align: left;
    &:nth-child(1) {
      flex: 0 0 40%;
      max-width: 40%;
    }
    &:nth-child(2) {
      flex: 0 0 10%;
      max-width: 10%;
    }
    &:nth-child(3) {
      flex: 0 0 17%;
      max-width: 17%;
    }
    &:nth-child(4) {
      flex: 0 0 13%;
      max-width: 13%;
    }
    & .weather {
      &__btn {
        max-width: 144px;
        width: 100%;
        padding: 10px 10px;
      }
    }
  }
}
</style>


