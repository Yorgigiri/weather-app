<template>
  <div class="city-weather-list">
    <div class="city-weather-list__inner">
      <div class="city-weather-list__row city-weather-list__row_with-sorting">
        <div class="city-weather-list__column">Город</div>
        <div class="city-weather-list__column">Температура</div>
        <div class="city-weather-list__column">Атмосферное давление</div>
        <div class="city-weather-list__column"></div>
      </div>
      <div class="city-weather-list__row">
        <div class="city-weather-list__column">Boston, US</div>
        <div class="city-weather-list__column">13.8 &deg;C</div>
        <div class="city-weather-list__column">743.5 hPa</div>
        <div class="city-weather-list__column">
          <button class="weather__btn weather__btn_inverted">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: null
    };
  },
  components: {},
  getCities: function() {}
};
</script>

<style scoped lang="scss">
.city-weather-list {
  margin: 0 auto;
  max-width: 1024px;
  overflow: auto;
  &__inner {
    min-width: 768px;
  }
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;
    &_with-sorting {
      background: $color_gray3;
      color: $color_gray4;
      padding: 10px 0;
      font-size: 14px;
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


