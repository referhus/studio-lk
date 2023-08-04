import { dateFormat } from "@/utils/dateFormat";

export default {
    namespaced: true,
    state: () => ({
        finance: [],
    }),
    getters: {
        finance(state) {
            return state.finance;
        },
    },
    mutations: {
        /* eslint no-param-reassign: 'off' */
        setfinance(state, data) {
            state.finance = data;
        },
        addTask(state, data) {
            state.finance.push({
                id: state.finance.length + 1,
                name: data.name,
                desc: data.desc ? data.desc : '',
                folders: data.folders ? data.folders : [],
                isDone: false,
                date: dateFormat()
            })
        },
        setTask(state, data) {
            const index = state.finance.map(el => el.id).indexOf(data.id);
            if (index > -1) {
                !data.name ? state.finance.splice(index, 1) : state.finance.splice(index, 1, data)
            } 
        },
        setFoldersInTask(state, data) {
            state.finance.map((el => {
                const index = el.folders.map(folder => folder.id).indexOf(data)
                if (index > -1) {
                    el.folders.splice(index, 1)
                }
            }))
        },
        setDoneTask(state, id) {
            state.finance.find(el => el.id == id).isDone = !state.finance.find(el => el.id == id).isDone
        }
    },
};
