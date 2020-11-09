let pages = {
	"races": {
		text: "Time to start a new adventure! To begin with, what race are you from?",
		image: "races.jpg",
		options: [
			{
				text: "Human! We're the most populous race on the face of creation and proud of it! (Start with extra Attack)",
				click: "human",
			},
			{
				text: "Elf! We have triple of the lifespan of the other two races! (Start with extra Health)",
				click: "elf",
			},
			{
				text: "Dwarf! We are the most technologically advanced race of them all! (Start with extra Defense)",
				click: "dwarf",
			}
		]
	},
	"classes": {
		text: "Great choice! Next, what class are you?",
		image: "classes.png",
		options: [
			{
				text: "Rogue! Why go straight through obstacles when you can instead sneak around them?",
				click: "rogue",
			},
			{
				text: "Mage! Harnessing the cosmic powers of the universe is the only true path!",
				click: "mage",
			},
			{
				text: "Warrior! Sneaking around or using magic is for cowards!",
				click: "warrior",
			},
			{
				text: "Go back and pick a different race.",
				click: "backRace",
			},
		]
	},
	"rogue": {
		text: "You are a rogue, someone who prefers to stick to the shadows and use knives or ranged weapons to pick off unuspecting enemies. Having grown up an orphan in the slums of Valentia, you had to turn to pickpocketing at a young age in order to survive. However, the very first target you tried to pickpocket was Cassandra, a very capable thief. She easily foiled your attempt and nabbed your copper necklace, the only thing you have from your parents, without you being any the wiser. She later approached you that night to return it and teach you how to be a proper rogue in exchange for a 'fair' portion of your earnings. However, now that you've come of age, your partnership with her has dissolved so you decided to seek out wealth and a place to belong. Where do you begin?",
		image: "rogue.jpg",
		options: [
			{
				text: "Valentia, city by the sea. It is the biggest port in the country of Megala, trading millions of gold every day in myriad different commodities. (ONLY CITY CURRENTLY IMPLEMENTED!)",
				click: "valentia",
			},
			{
				text: "Avegemon, royal capital. Ruled by the royal family, it is the political seat of power in the country of Megala, whith nearly all executive decisions being made here.",
				click: "avegemon",
			},
			{
				text: "Xenos, city of magic. Located at the foot of Mt. Thrusy where multiple magical leylines converge, it is a secluded place where mages have gathered to advance their craft.",
				click: "xenos",
			},
			{
				text: "Go back and pick a different class.",
				click: "backClass",
			},
		]
	},
	"mage": {
		text: "You are a mighty mage capable of wielding phenomenal power...in training. As of yesterday, you've just finished your basic magic lessons under your eccentric teacher Andros in Xenos, who you swear taught you not because of your talent but rather because he needed a caretaker and gopher to handle all of their daily needs. Regardless, now that your basic lessons are complete, you've decided to go out adventuring in the world seeking new knowledge and experience. Where do you begin?",
		image: "mage.jpg",
		options: [
			{
				text: "Valentia, city by the sea. It is the biggest port in the country of Megala, trading millions of gold every day in myriad different commodities. (ONLY CITY CURRENTLY IMPLEMENTED!)",
				click: "valentia",
			},
			{
				text: "Avegemon, royal capital. Ruled by the royal family, it is the political seat of power in the country of Megala, whith nearly all executive decisions being made here.",
				click: "avegemon",
			},
			{
				text: "Xenos, city of magic. Located at the foot of Mt. Thrusy where multiple magical leylines converge, it is a secluded place where mages have gathered to advance their craft.",
				click: "xenos",
			},
			{
				text: "Go back and pick a different class.",
				click: "backClass",
			},
		]
	},
	"warrior": {
		text: "You are a warrior, someone who wears heavy armor and gets up close and personal with their foes. You grew up in Avegemon under the care of your uncle Ivah, who is a low ranking captain in the Magalan army. He made certain you grew up to become a capable warrior, training your body to be capable of difficult physical feats as well as to be passable with many different weapons. However, now that you've come of age, he's kicked you out to go build your renown as a warrior either as an adventurer or in the army. Where do you begin?",
		image: "warrior.jpg",
		options: [
			{
				text: "Valentia, city by the sea. It is the biggest port in the country of Megala, trading millions of gold every day in myriad different commodities. (ONLY CITY CURRENTLY IMPLEMENTED!)",
				click: "valentia",
			},
			{
				text: "Avegemon, royal capital. Ruled by the royal family, it is the political seat of power in the country of Megala, whith nearly all executive decisions being made here.",
				click: "avegemon",
			},
			{
				text: "Xenos, city of magic. Located at the foot of Mt. Thrusy where multiple magical leylines converge, it is a secluded place where mages have gathered to advance their craft.",
				click: "xenos",
			},
			{
				text: "Go back and pick a different class.",
				click: "backClass",
			},
		]
	},
	"valentia": {
		text: "You are currently in the markets of Valentia, which are both extremely crowded and noisy as shoppers and merchants haggle for goods. In some side alleys you can see a few scoundrels and thieves lurking about, eyeing the people in the market trying to pick out easy targets. One particular stall catches your interest run by an old grizzled dwarf selling all sorts of weaponry, magical and nonmagical alike. You can also spy the adventurer's guild just up ahead right outside of the market, which is a good place to find work to make a few gold coins. Where do you go?",
		image: "valentia.jpg",
		options: [
			{
				text: "Adventurer's Guild",
				click: "valentia_guild",
			},
			{
				text: "Weapon stall",
				click: "valentia_store",
			},
			{
				text: "Find an inn to rest for the night",
				click: "valentia_inn",
			},
			{
				text: "Explore the side alleys",
				click: "alleys",
			},
			{
				text: "Leave the City",
				click: "travel",
			},
		]
	},
	"progress": {
		text: "This is the current end of the adventure, as it is still a work in progress. Thanks for playing!",
		image: "thanks.jfif",
		options: []
	},
}

export default pages;