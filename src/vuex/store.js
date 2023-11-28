import { createStore } from 'vuex';

const store = new createStore({
	state() {
		return {
			count: 0,
		};
	},
});

export default store;