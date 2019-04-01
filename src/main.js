import Vue from "vue";
import App from "./App.vue";

import "vue-easytable/libs/themes-base/index.css";
// 导入 table 和 分页组件
import { VTable, VPagination } from "vue-easytable";

Vue.config.productionTip = false;

Vue.use(VTable);
Vue.use(VPagination);

new Vue({
  render: h => h(App)
}).$mount("#app");
