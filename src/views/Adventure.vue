<template>
	<CombatPage v-if="isCombat"/>
	<AdventurePage v-else :pageName="pageName"/>
</template>

<script>
import CombatPage from "../components/CombatPage.vue"
import AdventurePage from "../components/AdventurePage.vue"

export default {
  name: 'Adventure',
  components: {
    CombatPage,
	AdventurePage,
  },
  computed: {
	isCombat() {
		if (this.$root.$data.enemyName != "") {
			return true;
		}
		else {
			return false;
		}
	},
	
	pageName() {
		return this.$root.$data.pageName;
	}
  },
  methods: {
	changePage(page) {
		console.log(page);
		this.$root.$data.pageName = page;
	},
	addEnemy(enemy) {
		this.$root.$data.enemyName = enemy;
	},
	removeEnemy() {
		this.$root.$data.enemyName = "";
	},
	// I really dislike doing it like this, as this function is poorly decomposed, but I was having lots of bugs trying to put it in other files :/
	handleClick(option) {
	
		//Races page
		if (option == "human") {
			this.$root.$data.player.Race = 0;
			this.$root.$data.player.RaceName = "Human";
			this.$root.$data.player.Attack += 1;
			this.changePage("classes");
		}
		else if (option == "elf") {
			this.$root.$data.player.Race = 1;
			this.$root.$data.player.RaceName = "Elf";
			this.$root.$data.player.Health += 10;
			this.$root.$data.player.MaxHealth += 10;
			this.changePage("classes");
		}
		else if (option == "dwarf") {
			this.$root.$data.player.Race = 1;
			this.$root.$data.player.RaceName = "Dwarf";
			this.$root.$data.player.Defense += 1;
			this.changePage("classes");
		}
		
		// Classes Page
		else if (option == "rogue") {
			this.$root.$data.player.Class = 0;
			this.$root.$data.player.ClassName = "Rogue";
			this.$root.$data.player.Attack += 2;
			this.changePage(option);
		}
		else if (option == "mage") {
			this.$root.$data.player.Class = 1;
			this.$root.$data.player.ClassName = "Mage";
			this.$root.$data.player.Attack += 1;
			this.$root.$data.player.Defense += 1;
			this.changePage(option);
		}
		else if (option == "warrior") {
			this.$root.$data.player.Class = 2;
			this.$root.$data.player.ClassName = "Warrior";
			this.$root.$data.player.Defense += 2;
			this.changePage(option);
		}
		else if (option == "backRace") {
			//Resetting race defaults
			this.$root.$data.player.Race = -1;
			this.$root.$data.player.RaceName = "N/A";
			this.$root.$data.player.Health = 10;
			this.$root.$data.player.MaxHealth = 10;
			this.$root.$data.player.Attack = 1;
			this.$root.$data.player.Defense = 1;
			this.changePage("races");
		}
		
		//Starting city selection
		// Classes Page
		else if (option == "valentia") {
			this.changePage(option);
		}
		else if (option == "avegemon") {
			this.changePage("progress");
		}
		else if (option == "xenos") {
			this.changePage("progress");
		}
		else if (option == "backClass") {
			//Resetting before class
			this.$root.$data.player.Class = -1;
			this.$root.$data.player.ClassName = "N/A";
			
			this.$root.$data.player.Health = 10;
			this.$root.$data.player.MaxHealth = 10;
			this.$root.$data.player.Attack = 1;
			this.$root.$data.player.Defense = 1;
			
			if (this.$root.$data.player.Race == 0) {
				this.$root.$data.player.Attack += 1;
			}
			else if (this.$root.$data.player.Race == 1) {
				this.$root.$data.player.Health += 10;
				this.$root.$data.player.MaxHealth += 10;
			}
			else {
				this.$root.$data.player.Defense += 1;
			}
			
			this.changePage("classes");
		}
		
		// Valentia page
		else if (option == "valentia_guild") {
			this.changePage("progress");
		}
		else if (option == "valentia_store") {
			this.changePage("progress");
		}
		else if (option == "valentia_inn") {
			this.changePage("progress");
		}
		else if (option == "alleys") {
			this.changePage("progress");
		}
		else if (option == "travel") {
			this.changePage("progress");
		}
		
		// Progress Page
		else {
			this.changePage("progress");
		}
	}
  },
};
</script>