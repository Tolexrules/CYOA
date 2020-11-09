<template>
	<div class="adventure">
		<b-container>
			<b-row>
				<b-col>
					<b-container class="player_status">
						<b-row>
							<b-col>Level {{level}} {{race}} {{className}}</b-col>
							<b-col>EXP to Next Level: {{exp}}</b-col>
						</b-row>
						<b-row>
							<b-col>Health: {{health}} / {{maxHealth}}</b-col>
							<b-col>Attack: {{attack}} Defense: {{defense}}</b-col>
						</b-row>
						<b-row>
							<b-col>Gold: {{gold}}</b-col>
							<b-col>Quest Progress: {{count}} / {{target}} {{targetName}}</b-col>
						</b-row>
					</b-container>
					
					<p>{{page.text}}</p>
					<ol>
						<li v-for="option in page.options" :key="option.click">
							<a href="#" v-on:click="handleClick(option.click)">{{option.text}}</a>
						</li>
					</ol>
				</b-col>
				<b-col>
					<img class="adventure_picture" :src="'/images/'+page.image"/>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
  name: 'AdventurePage',
  props: {
	pageName: String
  },
  computed: {
	page() {
		return this.$root.$data.pages[this.pageName];
	},
	
	//Player Stats	
	level() {
		return this.$root.$data.player["Level"];
	},
	race() {
		return this.$root.$data.player["RaceName"];
	},
	className() {
		return this.$root.$data.player["ClassName"];
	},
	exp() {
		let amount = 100 * this.$root.$data.player["Level"];
		let dif = amount - this.$root.$data.player["Exp"];
		
		if (dif < 0) {
			return "Ready to Level!";
		}
		else {
			return dif;
		}
	},
	health() {
		return this.$root.$data.player["Health"];
	},
	maxHealth() {
		return this.$root.$data.player["MaxHealth"];
	},
	attack() {
		return this.$root.$data.player["Attack"];
	},
	defense() {
		return this.$root.$data.player["Defense"];
	},
	gold() {
		return this.$root.$data.player["Gold"];
	},
	count() {
		return this.$root.$data.player["QuestCount"];
	},
	target() {
		return this.$root.$data.player["QuestTarget"];
	},
	targetName() {
		return this.$root.$data.player["QuestEnemy"];
	},
  },
  methods: {
	handleClick(option) {
		this.$parent.handleClick(option);
	},
  },
};
</script>

<style>
p {
	font-family: 'Lucida Console';
	padding-top: 15px;
	font-size: 15px;
	text-align: left;
}

li {
    font-family: 'Lucida Console';
	font-size: 15px;
	text-align: left;
}

div.player_status {
	border: solid;
	margin-top: 15px;
}

img.adventure_picture {
	width: 500px;
	max-height: 700px;
	padding-top: 15px;
	text-align: center;
}


</style>