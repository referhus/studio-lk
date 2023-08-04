
export default {
    namespaced: true,
    state: () => ({
        employees: [
            {
                id: 1,
                name: 'Бовгира Валерий',
                status: ['отпуск'],
                vacation: '22.04.2023'
            },            
            {
                id: 2,
                name: 'Полховская Анна',
                status: ['отпуск'],
                vacation: '22.04.2023'
            },
            {
                id: 3,
                name: 'Захарова Ольга',
                status: ['удаленка', 'перерыв'],
                vacation: '22.04.2023'
            },
            {
                id: 4,
                name: 'Сотрудник',
                status: ['больничный'],
                vacation: '22.04.2023'
            },
        ],
    }),
    getters: {
        employees(state) {
            return state.employees;
        },
        getEmployeesByName: (state) => (payload) => {
            if(state.employees) {
                return state.employees.filter(x => x.name.toLowerCase().includes(payload.toLowerCase()))
            } else {
                return null
            }
        },
    },
    mutations: {
        /* eslint no-param-reassign: 'off' */
    },
};
