import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("toLowercase", function(value) {
  return value.toLowerCase();
});

Vue.filter("wordLength", function(value) {
  return value + " (" + value.length + ")";
});

Vue.mixin({
  created() {
    console.log("main.js created hook");
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
