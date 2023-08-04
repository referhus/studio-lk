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
				<!-- кнопки -->
			</div>
			</div>
		</v-card>
		<div class="list-month">
			АРХИВ
		</div>
		<v-card width="100%">
			<v-list>
				<template 
					v-for="(item, index) in items"
				>
					<v-subheader
						v-if="item.header"
						:key="item.header"
					>{{ item.header }}</v-subheader>

					<v-divider
						v-else-if="item.divider"
						:key="index"
						:inset="item.inset"
					></v-divider>

					<v-list-item v-else :key="item.title">
						<v-list-item-content>
						<v-list-item-title> {{ item.title }}</v-list-item-title>
						<v-list-item-subtitle> {{ item.subtitle }}</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</template>
			</v-list>
		</v-card>
	</section>
</template>

<script>

export default {
	name: 'financeView',
	data() {
		return {
			items: [
				{
					title: 'Июль',
					subtitle: `Расчетный лист №244`,
				},
				{ divider: true, inset: true },
				{
					title: 'Июнь',
					subtitle: `Расчетный лист №243`,
				},
				{ divider: true, inset: true },
				{
					title: 'Май',
					subtitle: `Расчетный лист №242`,
				},
				{ divider: true, inset: true },
				{
					title: 'Апрель',
					subtitle: `Расчетный лист №241`,
				},
				{ divider: true, inset: true },
				{
					title: 'Март',
					subtitle: `Расчетный лист №240`,
				},
			]
		}
	},
	components: {
	},
	computed: {
	},
	methods: {
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