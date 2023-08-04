<template>
	<section class="container">
		<div class="container-head">
			<h1>Новости</h1>
			<button-cmp 
				icon="add"
				border
				@event="handlerAddTask"
			></button-cmp>
		</div>
		<div 
			class="finance-cards cards" 
		>
			<finance-item 
				v-for="task in finance" 
				:key="task.id"
				:item="task"
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

</style>