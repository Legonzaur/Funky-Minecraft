// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	event.remove({input:"twilightforest:uncrafting_table"})
	event.remove({ output: "chancecubes:chance_cube" });
	event.custom({
		"type": "tconstruct:casting_basin",
		"cast": {
		  "item": "minecraft:lapis_block"
		},
		"cast_consumed": true,
		"fluid": {
		  "name": "blue_skies_tcon:molten_aquite",
		  "amount": 1000
		},
		"result": "chancecubes:chance_cube",
		"cooling_time": 300
	  })
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})