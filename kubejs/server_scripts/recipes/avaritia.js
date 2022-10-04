onEvent("recipes", (event) => {
  event.remove({ id: "avaritia:ultimate_stew" });
  event.recipes.extendedcrafting.shapeless_table("4x avaritia:ultimate_stew", [
    "minecraft:beetroot_soup","thermal:spring_salad", "minecraft:mushroom_stew","minecraft:rabbit_stew", "blue_skies:scalefruit", "blue_skies:pine_fruit", "thermal:hearty_stew", "thermal:xp_stew", "#forge:crops/wheat","minecraft:apple","minecraft:melon","minecraft:pumpkin","minecraft:cactus","avaritia:neutron_pile"]
  );

  event.remove({id:"avaritia:cosmic_meatballs"})
  event.recipes.extendedcrafting.shapeless_table("4x avaritia:cosmic_meatballs", [
    "minecraft:cod","minecraft:porkchop", "minecraft:rabbit","minecraft:salmon", "minecraft:chicken", "minecraft:beef", "minecraft:mutton","blue_skies:grittle_flatfish", "blue_skies:municipal_monkfish","blue_skies:charscale_moki","blue_skies:horizofin_tunid", "twilightforest:raw_meef", "twilightforest:raw_venison", "avaritia:neutron_pile"]
  );
});
