<template>
	<section class="container">
		<v-card>
			<div class="list">
				<div class="list-text">
				<div class="list-month">
					Месяц
				</div>
				<span class="list-number">Расчетный лист №245</span>
			</div>
			<div class="list-buttons">
				<button-cmp 
					border
					@event="handlerAddTask"
					text="Подтвердить"
				></button-cmp>
				<button-cmp 
					border
					@event="handlerAddTask"
					text="Задать вопрос"
				></button-cmp>
			</div>
			</div>
		</v-card>
		<div 
			class="finance-cards cards" 
		>
			<finance-item 
			></finance-item>
		</div>
	</section>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import FinanceItem from '@/components/FinanceItem';
import ButtonCmp from '@/components/ButtonCmp';

export default {
	name: 'financeView',
	data() {
		return {
		}
	},
	components: {
		FinanceItem,
		ButtonCmp
	},
	computed: {
		...mapState('finance', ['finance'])
	},
	methods: {
		...mapActions('finance', ['getfinance']),
		...mapMutations('finance', ['addTask']),
		...mapMutations('modal', ['openModal']),

		handlerAddTask() {
			this.openModal({
				newState: 'ModalTask',
				props: {
					title: 'создать',
					type: 'add',
				},
			})
		}
	},
}
</script>


<style lang="sass">
.list 
	padding: 5px
	display: flex
	justify-content: space-between

	&-buttons 
		display: flex
		gap: 10px
</style>