onEvent( "recipes", ( event ) => {
  event.remove( { type: "avaritia:compressor" } );
  event.remove( { output: "avaritia:compressor" } );

  event.recipes.thermal.bottler(
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:water"}' ),
    [ Fluid.of( "minecraft:water", 10000 ), "ae2:singularity" ]
  );

  event.recipes.thermal.bottler(
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:d-t_fuel"}' ),
    [ Fluid.of( "mekanismgenerators:fusion_fuel", 10000 ), "ae2:singularity" ]
  );


  event.remove( { output: "extendedcrafting:ultimate_singularity" } )
  event.recipes.extendedcrafting.shapeless_table( "extendedcrafting:ultimate_singularity", [
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:bronze"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:certus_quartz"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:charged_certus_quartz"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:chest"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:copper"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:diamond"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:dt_fuel"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:electrum"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:emerald"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:glowstone"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:gold"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:invar"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:iron"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:lapis_lazuli"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:lead"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:nether_star"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:nickel"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:osmium"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:redstone"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:silver"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:steel"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:tin"}' ),
    Item.of( "extendedcrafting:singularity", '{Id:"extendedcrafting:water"}' ),
  ] );

  event.remove( { output: "avaritia:infinity_catalyst" } );
  event.recipes.extendedcrafting.shapeless_table( "avaritia:infinity_catalyst", [
    "avaritia:crystal_matrix_ingot",
    "mekanism:pellet_antimatter",
    "avaritia:neutron_pile",
    "avaritia:neutron_nugget",
    "avaritia:neutronium_ingot",
    "avaritia:record_fragment",
    "extendedcrafting:the_ultimate_ingot",
    "extendedcrafting:ultimate_singularity",
    "avaritia:ultimate_stew",
    "avaritia:cosmic_meatballs"
  ] );

  event.recipes.extendedcrafting.shapeless_table( "extendedcrafting:the_ultimate_ingot", [ "blue_skies:horizonite_ingot", "blue_skies:falsite_ingot", "blue_skies:ventium_ingot", "#forge:ingots/silver", "#forge:ingots/lead", "#forge:ingots/nickel","#forge:ingots/tin","#forge:ingots/osmium","#forge:ingots/uranium", "minecraft:brick", "minecraft:copper_ingot", "minecraft:gold_ingot", "minecraft:iron_ingot", "minecraft:netherite_ingot", "minecraft:nether_brick", "bloodmagic:ingot_hellforged", "twilightforest:ironwood_ingot", "twilightforest:fiery_ingot", "twilightforest:knightmetal_ingot", "thermal:enderium_ingot", "thermal:lumium_ingot", "thermal:signalum_ingot", "thermal:bronze_ingot", "mekanism:ingot_bronze", "thermal:constantan_ingot", "thermal:electrum_ingot", "thermal:invar_ingot", "thermal:rose_gold_ingot", "tconstruct:rose_gold_ingot", "#forge:ingots/steel", "tconstruct:seared_brick", "tconstruct:scorched_brick", "tconstruct:cobalt_ingot", "tconstruct:slimesteel_ingot", "tconstruct:amethyst_bronze_ingot", "tconstruct:pig_iron_ingot", "tconstruct:queens_slime_ingot", "tconstruct:manyullyn_ingot", "tconstruct:hepatizon_ingot", "tconstruct:knightslime_ingot", "mekanism:ingot_refined_glowstone", "mekanism:ingot_refined_obsidian", "aquaculture:neptunium_ingot", "bloodsmeltery:bloodbrass_ingot" ] );

  event.remove( { output: "avaritia:neutron_collector" } );
  event.custom( {
    type: "mekanism:crystallizing",
    chemicalType: "gas",
    input: { amount: 100, gas: "mekanism:spent_nuclear_waste" },
    output: { item: "avaritia:neutron_pile" },
  } );

} );
