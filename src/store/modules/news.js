import { dateFormat } from "@/utils/dateFormat";

export default {
    namespaced: true,
    state: {
        news: [],
    },
    getters: {
        news(state) {
            return state.news;
        },
        getnewsByName: (state) => (payload) => {
            if(state.news) {
                return state.news.filter(x => x.name.includes(payload))
            } else {
                return null
            }
        },
    },
    mutations: {
        /* eslint no-param-reassign: 'off' */
        setnews(state, data) {
            state.news = data;
        },
        addFolder(state, data) {
            state.news.push({
                id: state.news.length + 1,
                name: data.name,
                color: data.color ? data.color : '#000000',
                date: dateFormat(),
                isDone: false
            })
        },
        setFolder(state, data) {
            const index = state.news.map(el => el.id).indexOf(data.id);
            if (index > -1) {
                !data.name ? state.news.splice(index, 1) : state.news.splice(index, 1, data)
            } 
        },
    },
};
