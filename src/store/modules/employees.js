
export default {
    namespaced: true,
    state: () => ({
        employees: [
            {
                id: 1,
                name: 'Бовгира Валерий',
                status: ['отпуск'],
                vacation: '25.09.2023 - 28.09.2023'
            },            
            {
                id: 2,
                name: 'Полховская Анна',
                status: ['отпуск'],
                vacation: '25.09.2023 - 28.09.2023'
            },
            {
                id: 3,
                name: 'Захарова Ольга',
                status: ['удаленка', 'перерыв'],
                vacation: '25.09.2023 - 28.09.2023'
            },
            {
                id: 4,
                name: 'Сотрудникович Сотрудник',
                status: ['больничный'],
                vacation: '25.09.2023 - 28.09.2023'
            },
            {
                id: 5,
                name: 'Фронтендович Фронтендер',
                status: ['больничный'],
                vacation: '25.09.2023 - 28.09.2023'
            },
            {
                id: 44,
                name: 'Бекендович Бекендер',
                status: ['больничный'],
                vacation: '25.09.2023 - 28.09.2023'
            },
            {
                id: 55,
                name: 'Тестовый Тестер',
                status: ['перерыв'],
                vacation: '25.09.2023 - 28.09.2023'
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
