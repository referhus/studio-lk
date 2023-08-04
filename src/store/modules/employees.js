
export default {
    namespaced: true,
    state: () => ({
        employees: [
            {
                id: 1,
                name: 'Бовгира Валерий',
                status: ['отпуск']
            },            
            {
                id: 2,
                name: 'Полховская Анна',
                status: ['отпуск']
            },
            {
                id: 3,
                name: 'Захарова Ольга',
                status: ['удаленка']
            },
            {
                id: 4,
                name: 'Сотрудник',
                status: ['больничный']
            },
        ],
    }),
    getters: {
        employees(state) {
            return state.employees;
        },
    },
    mutations: {
        /* eslint no-param-reassign: 'off' */
    },
};
