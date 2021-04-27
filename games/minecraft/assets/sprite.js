function generateSprites() {
	
	Sprites = {
		//Line 1
		brick: [0, 0],
		coal: [1, 0],
		coal_b: [2, 0],
		rock: [3, 0],
		diamond: [4, 0],
		diamond_b: [5, 0],
		flower: [6, 0],
		stove: [7, 0],
		glass: [8,0],
		gold: [9, 0],
		gold_b: [10, 0],
		top_soil: [11, 0],
		gravel: [12, 0],
		gunpowder: [13, 0],
		iron: [14, 0],
		iron_b: [15, 0],
		lava: [16, 0],
		leaves: [17,0],
		bark: [18, 0],
		pork: [19, 0],
		meat: [20, 0],
		creeper: [21, 0],
		skeleton: [22, 0],
		spider: [23, 0],
		zombie: [24, 0],
		moss_b: [25, 0],
		obsidian: [26, 0],
		sand: [27, 0],
		dirt: [28, 0],
		stick: [29, 0],
		stone: [30, 0],
		tnt: [31, 0],
		torch: [32, 0],
		wheat: [33, 0],
		plank: [34, 0],
		workshop: [35, 0],
		flint: [36, 0],
		bedrock: [37, 0],
		
		//Line 2
		axe_w: [0, 1],
		axe_s: [1, 1],
		axe_i: [2, 1],
		axe_d: [3, 1],
		axe_g: [4, 1],
		hoe_w: [5, 1],
		hoe_s: [6, 1],
		hoe_i: [7, 1],
		hoe_d: [8, 1],
		hoe_g: [9, 1],
		bow: [10, 1],
		arrow: [11, 1],
		bucket: [12, 1],
		bucket_w: [13, 1],
		bucket_l: [14, 1],
		bucket_m: [15, 1],
		leather: [16, 1],
		saddle: [17, 1],
		redstone: [18, 1],
		clayball: [19, 1],
		bread: [20, 1],
		string: [21, 1],
		feather: [22, 1],
		seeds: [23, 1],
		apple: [24, 1],
		apple_g: [25, 1],
		sign: [26, 1],
		door: [27, 1],
		door_s: [28, 1],
		paper: [29, 1],
		book: [30, 1],
		cart: [31, 1],
		cart_s: [32, 1],
		cart_p: [33, 1],
		boat: [34, 1],
		ladder: [35, 1],
		track: [36, 1],
		wire: [37, 1],
		
		//Line 3
		helmet_l: [0, 2],
		helmet_c: [1, 2],
		helmet_i: [2, 2],
		helmet_d: [3, 2],
		helmet_g: [4, 2],
		chest_l: [5, 2],
		chest_c: [6, 2],
		chest_i: [7, 2],
		chest_d: [8, 2],
		chest_g: [9, 2],
		pants_l: [10, 2],
		pants_c: [11, 2],
		pants_i: [12, 2],
		pants_d: [13, 2],
		pants_g: [14, 2],
		boots_l: [15, 2],
		boots_c: [16, 2],
		boots_i: [17, 2],
		boots_d: [18, 2],
		boots_g: [19, 2],
		sword_w: [20, 2],
		sword_s: [21, 2],
		sword_i: [22, 2],
		sword_d: [23, 2],
		sword_g: [24, 2],
		shovel_w: [25, 2],
		shovel_s: [26, 2],
		shovel_i: [27, 2],
		shovel_d: [28, 2],
		shovel_g: [29, 2],
		pickaxe_w: [30, 2],
		pickaxe_s: [31, 2],
		pickaxe_i: [32, 2],
		pickaxe_d: [33, 2],
		pickaxe_g: [34, 2],
		
		player_u: [35, 2, 1, 2],
		player_r: [36, 2, 1, 2],
		player_l: [37, 2, 1, 2],
		
		//Line 4
		snowball: [0, 3],
		clay: [1, 3],
		jukebox: [2, 3],
		firestarter: [3, 3],
		compass: [4, 3],
		button: [5, 3],
		lever: [6, 3],
		redlight: [7, 3],
		bowl: [8, 3],
		stew: [9, 3],
		toadstool: [10, 3],
		mushroom: [11, 3],
		fence: [12, 3],
		painting_1: [13, 3],
		painting_2: [14, 3],
		painting_3: [15, 3],
		wire_off: [16, 3],
		wire_on: [17, 3],
		redstone_b: [18, 3],
		bookshelf: [19, 3],
		cactus: [20, 3],
		storage: [21, 3],
		painting: [22, 3],
		bush: [23, 3],
		record_g: [24, 3],
		record_s: [25, 3],
		spawn: [26, 3],
		reeds: [27, 3],
		heart: [28, 3],
		halfheart: [29, 3],
		armor: [30, 3],
		halfarmor: [31, 3],
		noarmor: [32, 3],
		noheart: [33, 3],
		water: [34, 3],
		
		
		//Line 5
		cloth: [26, 4],
		arrow: [27, 4],
		crack: [28, 4]
	};
	
	SpriteMap = [
		//Line 1
		"brick",
		"coal",
		"coal_b",
		"rock",
		"diamond",
		"diamond_b",
		"flower",
		"stove",
		"glass",
		"gold",
		"gold_b",
		"top_soil",
		"gravel",
		"gunpowder",
		"iron",
		"iron_b",
		"lava",
		"leaves",
		"bark",
		"pork",
		"meat",
		"creeper",
		"skeleton",
		"spider",
		"zombie",
		"moss_b",
		"obsidian",
		"sand",
		"dirt",
		"stick",
		"stone",
		"tnt",
		"torch",
		"wheat",
		"plank",
		"workshop",
		"flint",
		"bedrock",
		
		//Line 2
		"axe_w",
		"axe_s",
		"axe_i",
		"axe_d",
		"axe_g",
		"hoe_w",
		"hoe_s",
		"hoe_i",
		"hoe_d",
		"hoe_g",
		"bow",
		"arrow",
		"bucket",
		"bucket_w",
		"bucket_l",
		"bucket_m",
		"leather",
		"saddle",
		"redstone",
		"clayball",
		"bread",
		"string",
		"feather",
		"seeds",
		"apple",
		"apple_g",
		"sign",
		"door",
		"door_s",
		"paper",
		"book",
		"cart",
		"cart_s",
		"cart_p",
		"boat",
		"ladder",
		"track",
		"wire",
		
		//Line 3
		"helmet_l",
		"helmet_c",
		"helmet_i",
		"helmet_d",
		"helmet_g",
		"chest_l",
		"chest_c",
		"chest_i",
		"chest_d",
		"chest_g",
		"pants_l",
		"pants_c",
		"pants_i",
		"pants_d",
		"pants_g",
		"boots_l",
		"boots_c",
		"boots_i",
		"boots_d",
		"boots_g",
		"sword_w",
		"sword_s",
		"sword_i",
		"sword_d",
		"sword_g",
		"shovel_w",
		"shovel_s",
		"shovel_i",
		"shovel_d",
		"shovel_g",
		"pickaxe_w",
		"pickaxe_s",
		"pickaxe_i",
		"pickaxe_d",
		"pickaxe_g",
		
		"player_u",
		"player_r",
		"player_l",
		
		//Line 4
		"snowball",
		"clay",
		"jukebox",
		"firestarter",
		"compass",
		"button",
		"lever",
		"redlight",
		"bowl",
		"stew",
		"toadstool",
		"mushroom",
		"fence",
		"painting_1",
		"painting_2",
		"painting_3",
		"wire_off",
		"wire_on",
		"redstone_b",
		"bookshelf",
		"cactus",
		"storage",
		"painting",
		"bush",
		"record_g",
		"record_s",
		"spawn",
		"reeds",
		"heart",
		"halfheart",
		"armor",
		"halfarmor",
		"noarmor",
		"noheart",
		"water",
		
		
		//Line 5
		"cloth",
		"arrow",
		"crack"
	];
	
	Crafty.sprite(32, "assets/sprite.png", Sprites);
}
