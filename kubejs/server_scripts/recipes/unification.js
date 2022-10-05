onEvent("recipes", (event) => {

    const { smelting, blasting } = event.recipes.minecraft

    let unifyMetal = function (name, oreItem, nuggetItem, ingotItem, blockItem, storageItem, dustItem, gearItem, plateItem, nugget_cooling_time, ingot_cooling_time, block_cooling_table) {
        event.remove({ mod: "bno" })
        if (ingotItem !== '') event.replaceOutput('#forge:ingots/' + name, ingotItem)
        if (dustItem !== '') event.replaceOutput('#forge:dusts/' + name, dustItem)
        if (nuggetItem !== '') event.replaceOutput('#forge:nuggets/' + name, nuggetItem)
        if (blockItem !== '') event.replaceOutput('#forge:storage_blocks/' + name, blockItem)
        if (gearItem !== '') event.replaceOutput('#forge:gears/' + name, gearItem)
        if (plateItem !== '') event.replaceOutput('#forge:plates/' + name, plateItem)
        if (storageItem !== '') event.replaceOutput("#forge:storage_blocks/raw_" + name, storageItem)
        if (oreItem !== '') event.replaceOutput("#forge:raw_materials/" + name, oreItem)
        event.remove({ output: '#forge:ingots/' + name, type: 'minecraft:smelting' })
        event.remove({ output: '#forge:ingots/' + name, type: 'minecraft:blasting' })
        event.remove({ output: '#forge:storage_blocks/' + name, type: 'tconstruct:casting_basin' })


        event.remove({ output: '#forge:ingots/' + name, type: 'thermal:press' })
        event.remove({ output: '#forge:nuggets/' + name, type: 'thermal:press' })
        event.remove({ output: '#forge:storage_blocks/' + name, type: 'thermal:press' })

        event.recipes.thermal.press("9x " + nuggetItem, ["#forge:ingots/" + name, "thermal:press_unpacking_die"])
        event.recipes.thermal.press("9x " + ingotItem, ["#forge:storage_blocks/" + name, "thermal:press_unpacking_die"])
        event.recipes.thermal.press(ingotItem, ["9x #forge:nuggets/" + name, "thermal:press_packing_3x3_die"])
        event.recipes.thermal.press(blockItem, ["9x #forge:ingots/" + name, "thermal:press_packing_3x3_die"])


        if (nugget_cooling_time && ingot_cooling_time && block_cooling_table) {
            event.remove({ output: '#forge:nuggets/' + name, type: 'tconstruct:casting_table' })
            event.remove({ output: '#forge:ingots/' + name, type: 'tconstruct:casting_table' })
            event.custom({ "type": "tconstruct:casting_table", "conditions": [{ "value": { "tag": "forge:nuggets/" + name, "type": "forge:tag_empty" }, "type": "forge:not" }], "cast": { "tag": "tconstruct:casts/single_use/nugget" }, "cast_consumed": true, "fluid": { "tag": "forge:molten_" + name, "amount": 10 }, "result": { "item": nuggetItem }, "cooling_time": nugget_cooling_time })
            event.custom({ "type": "tconstruct:casting_table", "conditions": [{ "value": { "tag": "forge:nuggets/" + name, "type": "forge:tag_empty" }, "type": "forge:not" }], "cast": { "tag": "tconstruct:casts/multi_use/nugget" }, "cast_consumed": false, "fluid": { "tag": "forge:molten_" + name, "amount": 10 }, "result": { "item": nuggetItem }, "cooling_time": nugget_cooling_time })
            event.custom({ "type": "tconstruct:casting_table", "conditions": [{ "value": { "tag": "forge:ingots/" + name, "type": "forge:tag_empty" }, "type": "forge:not" }], "cast": { "tag": "tconstruct:casts/single_use/ingot" }, "cast_consumed": true, "fluid": { "tag": "forge:molten_" + name, "amount": 90 }, "result": { "item": ingotItem }, "cooling_time": ingot_cooling_time })
            event.custom({ "type": "tconstruct:casting_table", "conditions": [{ "value": { "tag": "forge:ingots/" + name, "type": "forge:tag_empty" }, "type": "forge:not" }], "cast": { "tag": "tconstruct:casts/multi_use/ingot" }, "cast_consumed": false, "fluid": { "tag": "forge:molten_" + name, "amount": 90 }, "result": { "item": ingotItem }, "cooling_time": ingot_cooling_time })
            event.custom({ "type": "tconstruct:casting_basin", "conditions": [{ "value": { "tag": "forge:storage_blocks/" + name, "type": "forge:tag_empty" }, "type": "forge:not" }], "fluid": { "tag": "forge:molten_" + name, "amount": 810 }, "result": { "item": blockItem }, "cooling_time": block_cooling_table })
        }
        if (dustItem !== '' && ingotItem !== '') {
            smelting(ingotItem, '#forge:dusts/' + name).xp(0.7)
            blasting(ingotItem, '#forge:dusts/' + name).xp(0.7)
        }
        if (oreItem !== '' && ingotItem !== '') {
            smelting(ingotItem, '#forge:ores/' + name).xp(0.7)
            blasting(ingotItem, '#forge:ores/' + name).xp(0.7)
            smelting(ingotItem, '#forge:raw_materials/' + name).xp(0.7)
            blasting(ingotItem, '#forge:raw_materials/' + name).xp(0.7)
        }
    }
    unifyMetal('iron', 'minecraft:raw_iron', 'minecraft:iron_nugget', 'minecraft:iron_ingot', 'minecraft:iron_block', 'minecraft:raw_iron_block', 'thermal:iron_dust', 'thermal:iron_gear', 'thermal:iron_plate')
    unifyMetal('gold', 'minecraft:raw_gold', 'minecraft:gold_nugget', 'minecraft:gold_ingot', 'minecraft:gold_block', 'minecraft:raw_gold_block', 'thermal:gold_dust', 'thermal:gold_gear', 'thermal:gold_plate')
    unifyMetal('copper', 'minecraft:raw_copper', 'thermal:copper_nugget', 'minecraft:copper_ingot', 'minecraft:copper_block', 'minecraft:raw_copper_block', 'thermal:copper_dust', 'thermal:copper_gear', 'thermal:copper_plate', 17, 50, 150)
    unifyMetal('tin', 'mekanism:raw_tin', 'mekanism:nugget_tin', 'mekanism:ingot_tin', 'mekanism:block_tin', 'mekanism:block_raw_tin', 'mekanism:dust_tin', 'thermal:tin_gear', 'thermal:tin_plate', 13, 39, 117)
    unifyMetal('steel', '', 'mekanism:nugget_steel', 'mekanism:ingot_steel', 'mekanism:block_steel', '', 'mekanism:dust_steel', 'thermal:steel_gear', 'thermal:steel_plate', 22, 65, 194)
    unifyMetal('silver', 'thermal:raw_silver', 'thermal:silver_nugget', 'thermal:silver_ingot', 'thermal:silver_block', 'thermal:raw_silver_block', 'thermal:silver_dust', 'thermal:silver_gear', 'thermal:silver_plate', 20, 60, 179)
    unifyMetal('nickel', 'thermal:raw_nickel', 'thermal:nickel_nugget', 'thermal:nickel_ingot', 'thermal:nickel_block', 'thermal:raw_nickel_block', 'thermal:nickel_dust', 'thermal:nickel_gear', 'thermal:nickel_plate', 22, 65, 194)
    unifyMetal('uranium', 'mekanism:raw_uranium', 'mekanism:nugget_uranium', 'mekanism:ingot_uranium', 'mekanism:block_uranium', 'mekanism:block_raw_uranium', '', '', '', 20, 61, 183)
    unifyMetal('lead', 'thermal:raw_lead', 'thermal:lead_nugget', 'thermal:lead_ingot', 'thermal:lead_block', 'thermal:raw_lead_block', 'thermal:lead_dust', 'thermal:lead_gear', 'thermal:lead_plate', 14, 43, 130)
    unifyMetal('bronze', '', 'thermal:bronze_nugget', 'thermal:bronze_ingot', 'thermal:bronze_block', '', 'thermal:bronze_dust', 'thermal:bronze_gear', 'thermal:bronze_plate', 19, 57, 171)
    unifyMetal('osmium', 'mekanism:raw_osmium', 'mekanism:nugget_osmium', 'mekanism:ingot_osmium', 'mekanism:block_osmium', 'mekanism:block_raw_osmium', 'mekanism:dust_osmium', '', '', 22, 66, 197)


    event.remove({ id: 'thermal:storage/raw_tin_block' })
    event.remove({ id: 'thermal:storage/tin_block' })
    event.remove({ id: 'thermal:storage/tin_nugget_from_ingot' })
    event.remove({ id: 'thermal:storage/tin_ingot_from_block' })
    event.remove({ id: 'thermal:storage/tin_ingot_from_nuggets' })
    event.remove({ id: 'thermal:storage/steel_block' })
    event.remove({ id: 'thermal:storage/steel_nugget_from_ingot' })
    event.remove({ id: 'thermal:storage/steel_ingot_from_block' })
    event.remove({ id: 'thermal:storage/steel_ingot_from_nuggets' })
    event.remove({ id: 'thermal:storage/raw_lead_block' })
    event.remove({ id: 'thermal:storage/lead_block' })
    event.remove({ id: 'thermal:storage/lead_nugget_from_ingot' })
    event.remove({ id: 'thermal:storage/lead_ingot_from_block' })
    event.remove({ id: 'thermal:storage/lead_ingot_from_nuggets' })
    event.remove({ id: 'thermal:storage/raw_silver_block' })
    event.remove({ id: 'thermal:storage/silver_block' })
    event.remove({ id: 'thermal:storage/raw_nickel_block' })
    event.remove({ id: 'thermal:storage/nickel_block' })
    event.remove({ id: 'thermal:storage/bronze_block' })
    event.remove({ id: 'thermal:storage/bronze_nugget_from_ingot' })
    event.remove({ id: 'thermal:storage/bronze_ingot_from_block' })
    event.remove({ id: 'thermal:storage/bronze_ingot_from_nuggets' })
    event.remove({ id: 'tconstruct:common/materials/copper_nugget_from_ingot' })
    event.remove({ id: 'electrodynamics:raworeblocktin' })
    event.remove({ id: 'electrodynamics:raworeblocklead' })
    event.remove({ id: 'electrodynamics:raworeblocksilver' })
    event.remove({ id: 'electrodynamics:raworeblockuranium' })

    event.shapeless('thermal:silver_block', ['9x #forge:ingots/silver'])
    event.shapeless('thermal:raw_silver_block', ['9x #forge:raw_materials/silver'])

    event.remove({ id: 'thermal:storage/nickel_block' })
    event.shapeless('thermal:nickel_block', ['9x #forge:ingots/nickel'])
    event.shapeless('thermal:raw_nickel_block', ['9x #forge:raw_materials/nickel'])

    event.custom({ "type": "mekanism:metallurgic_infusing", "itemInput": { "amount": 3, "ingredient": { "tag": "forge:ingots/copper" } }, "chemicalInput": { "amount": 10, "tag": "mekanism:tin" }, "output": { "item": "thermal:bronze_ingot", "count": 4 } })
    event.remove({ output: "mekanism:ingot_lead" })
    event.remove({ output: "mekanism:ingot_bronze" })
    event.remove({ output: "mekanism:block_lead" })

    event.remove({ output: 'bno:raw_aluminum' })

    event.remove({ id: 'thermal:smelting/netherite_ingot_from_dust_blasting' })
    event.remove({ id: 'thermal:smelting/netherite_ingot_from_dust_smelting' })
    event.remove({ id: 'ae2:inscriber/ender_dust' })
    event.custom({ "type": "ae2:inscriber", "mode": "inscribe", "result": { "item": "thermal:ender_pearl_dust" }, "ingredients": { "middle": { "item": "minecraft:ender_pearl" } } })   

    event.replaceOutput("#forge:dusts/wood", "thermal:sawdust")
    event.replaceOutput("#forge:dusts/lapis", "thermal:lapis_dust")
    event.replaceOutput("#forge:dusts/quartz", "thermal:quartz_dust")
    event.replaceOutput("#forge:dusts/netherite", "thermal:netherite_dust")
    event.replaceOutput("#forge:dusts/ender_pearl", "thermal:ender_pearl_dust")
    event.replaceOutput("#forge:dusts/emerald", "thermal:emerald_dust")
    event.replaceOutput("#forge:dusts/diamond", "thermal:diamond_dust")
    event.replaceOutput("#forge:dusts/sulfur", "thermal:sulfur_dust")
    event.replaceOutput("#forge:dusts/saltpeter", "thermal:sulfur_dust") 
})


onEvent("lootjs", (event) => {
    event.addBlockLootModifier("bno:nether_tin_ore").replaceLoot("bno:raw_tin", "mekanism:raw_tin", true);
    event.addBlockLootModifier("bno:nether_silver_ore").replaceLoot("bno:raw_silver", "thermal:raw_silver", true);
    event.addBlockLootModifier("bno:nether_lead_ore").replaceLoot("bno:raw_lead", "thermal:raw_lead", true);
    event.addBlockLootModifier("bno:nether_nickel_ore").replaceLoot("bno:raw_nickel", "thermal:raw_nickel", true);
    event.addBlockLootModifier("bno:nether_osmium_ore").replaceLoot("bno:raw_osmium", "mekanism:raw_osmium", true);
    event.addBlockLootModifier("bno:nether_uranium_ore").replaceLoot("bno:raw_uranium", "mekanism:raw_uranium", true);
});


onEvent('item.tags', event => {
    event.get('forge:dyes/yellow').remove('mekanism:dust_sulfur')
    event.get('forge:dyes/yellow').add('thermal:sulfur_dust')
    event.get('forge:dusts/saltpeter').add('thermal:niter_dust')
})