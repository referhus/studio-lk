import finance from './modules/finance';
import news from './modules/news';
import employees from './modules/employees';
import modal from './modules/modal';
import notification from './modules/notification';
// import createPersistedState from 'vuex-persistedstate';

import { createStore } from 'vuex'

export default createStore({
    // plugins: [
    //     createPersistedState({
    //         paths: ['finance', 'folders']
    //     })
    // ],
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        finance,
        news,
        employees,
        modal,
        notification
    },
})
