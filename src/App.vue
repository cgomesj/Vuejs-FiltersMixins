<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h1>Filters and Mixins</h1>

        <p>{{ text }}</p>
        <h3>Filtered</h3>
        <p>{{ text | wordLength }}</p>
        <p>{{ text | reverseText }}</p>
        <p>{{ text | toUppercase }}</p>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <h3>Computed</h3>
        <p>{{ wordLengthComputed }}</p>
        <p>{{ reverseTextComputed }}</p>

        <hr />

        <div class="card">
          <div class="card-header">
            <h2>List Component</h2>
          </div>
          <div class="card-body">
            <component :is="'app-list'"></component>
          </div>
        </div>

        <hr />

        <h2>App Inside Content</h2>

        <button class="btn btn-success mx-3" @click="fruits.push('Lemon')">
          Add Lemon
        </button>

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
import List from "./components/List.vue";
import { fruitMixin } from "./fruitMixin.js";
import { textVariationsMixin } from "./textVariationsMixin.js";

export default {
  name: "app",

  components: {
    "app-list": List
  },

  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },

    reverseText(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },

  mixins: [fruitMixin, textVariationsMixin],

  data() {
    return {
      text: "Regular Text"
    };
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

p {
  color: gray;
}
</style>
