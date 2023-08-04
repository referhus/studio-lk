
export default {
    namespaced: true,
    state: {
        news: [
            {
                id: 1,
                name: 'Новость 1',
                date: '01.06.2023'
            },            
            {
                id: 2,
                name: 'Новость 2',
                date: '06.06.2023'
            },            
            {
                id: 1,
                name: 'Новость 3',
                date: '10.06.2023'
            },
        ],
    },
    getters: {
        news(state) {
            return state.news;
        },
    },
    mutations: {
        /* eslint no-param-reassign: 'off' */
    },
};
