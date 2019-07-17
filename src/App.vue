<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h1>Filters and Mixins</h1>
        <p>{{ text }}</p>
        <p>{{ text | toUppercase }}</p>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <hr />
        <input v-model="filterText" type="text" />
        <ul class="list-unstyled">
          <li
            class="my-2"
            v-for="(fruit, index) in filteredFruits"
            :key="index"
          >
            {{ fruit }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",

  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },

  data() {
    return {
      text: "Regular Text",
      fruits: ["Banana", "Apple", "Mango", "Melon"],
      filterText: ""
    };
  },

  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
