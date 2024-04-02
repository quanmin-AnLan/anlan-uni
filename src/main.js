import { createSSRApp } from "vue";
import App from "./App.vue";
import store from './store'
import Vuex from "vuex";
import router from '@/router'
export function createApp() {
	const app = createSSRApp(App);
	app.use(store)
	app.use(router)
	return {
		app,
		Vuex
	};
}
