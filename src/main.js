import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import router from "./router";
import pages from "./pages";
import enemies from "./enemies";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

let data = {
	pageName: "races",
	enemyName: "",
	pages: pages,
	enemies: enemies,
	player: {
		Race: -1,
		RaceName: "N/A",
		Class: -1,
		ClassName: "N/A",
		Level: 1,
		Exp: 0,
		Attack: 1,
		Defense: 1,
		Health: 10,
		MaxHealth: 10,
		Gold: 100,
		WeaponName: "N/A",
		WeaponWorth: 0,
		ArmorName: "N/A",
		ArmorWorth: 0,
		QuestTarget: 0,
		QuestCount: 0,
		QuestEnemy: "N/A",
		QuestWorth: 0
	},
}

export default data

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
