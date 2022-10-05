onEvent("recipes", (event) => {
  event.remove({type:"avaritia:extreme_shaped"})
  event.remove({output:"avaritia:extreme_crafting_table"})
  event.recipes.extendedcrafting.shaped_table(
    "avaritia:infinity_ingot",
    [
      "NNNNNNNNN",
      "NCXXCXXCN",
      "NXCCXCCXN",
      "NCXXCXXCN",
      "NNNNNNNNN",
      "         ",
      "         ",
      "         ",
      "         ",
    ],
    {
      N: "avaritia:neutronium_ingot",
      C: "avaritia:crystal_matrix_ingot",
      X: "avaritia:infinity_catalyst",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:infinity_bow",
    [
      "   II    ",
      "  I W    ",
      " I  W    ",
      "I   W    ",
      "X   W    ",
      "I   W    ",
      " I  W    ",
      "  I W    ",
      "   II    ",
    ],
    {
      I: "avaritia:infinity_ingot",
      X: "avaritia:crystal_matrix_block",
      W: "#minecraft:wool",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:endest_pearl",
    [
      "   EEE   ",
      " EEPPPEE ",
      " EPPPPPE ",
      "EPPPNPPPE",
      "EPPNSNPPE",
      "EPPPNPPPE",
      " EPPPPPE ",
      " EEPPPEE ",
      "   EEE   ",
    ],
    {
      N: "avaritia:neutronium_ingot",
      E: "#forge:end_stones",
      S: "#forge:nether_stars",
      P: "#forge:ender_pearls",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:infinity_axe",
    [
      "   I     ",
      "  IIIII  ",
      "   IIII  ",
      "     IN  ",
      "      N  ",
      "      N  ",
      "      N  ",
      "      N  ",
      "      N  ",
    ],
    {
      N: "avaritia:neutronium_ingot",
      I: "avaritia:infinity_ingot",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:infinity_boots",
    [
      " NNN NNN ",
      " NIN NIN ",
      " NIN NIN ",
      "NNIN NINN",
      "NIIN NIIN",
      "NNNN NNNN",
      "         ",
      "         ",
      "         ",
    ],
    {
      N: "avaritia:neutronium_ingot",
      I: "avaritia:infinity_ingot",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:infinity_chestplate",
    [
      " NN   NN ",
      "NNN   NNN",
      "NNN   NNN",
      " NIIIIIN ",
      " NIIXIIN ",
      " NIIIIIN ",
      " NIIIIIN ",
      " NIIIIIN ",
      "  NNNNN  ",
    ],
    {
      N: "avaritia:neutronium_ingot",
      I: "avaritia:infinity_ingot",
      X: "avaritia:crystal_matrix_block",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:infinity_helmet",
    [
      " NN   NN ",
      "NNN   NNN",
      "NNN   NNN",
      " NIIIIIN ",
      " NIIXIIN ",
      " NIIIIIN ",
      " NIIIIIN ",
      " NIIIIIN ",
      "  NNNNN  ",
    ],
    {
      N: "avaritia:neutronium_ingot",
      I: "avaritia:infinity_ingot",
      X: "avaritia:infinity_catalyst",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:infinity_hoe",
    [
      "     N   ",
      " IIIIII  ",
      "IIIIIII  ",
      "I    II  ",
      "     N   ",
      "     N   ",
      "     N   ",
      "     N   ",
      "     N   ",
    ],
    {
      N: "avaritia:neutronium_ingot",
      I: "avaritia:infinity_ingot",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:infinity_legs",
    [
      "NNNNNNNNN",
      "NIIIXIIIN",
      "NINNXNNIN",
      "NIN   NIN",
      "NCN   NCN",
      "NIN   NIN",
      "NIN   NIN",
      "NIN   NIN",
      "NNN   NNN",
    ],
    {
      N: "avaritia:neutronium_ingot",
      I: "avaritia:infinity_ingot",
      X: "avaritia:infinity_catalyst",
      C: "avaritia:crystal_matrix_block",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:infinity_pickaxe",
    [
      " IIIIIII ",
      "IIIICIIII",
      "II  N  II",
      "    N    ",
      "    N    ",
      "    N    ",
      "    N    ",
      "    N    ",
      "    N    ",
    ],
    {
      N: "avaritia:neutronium_ingot",
      I: "avaritia:infinity_ingot",
      C: "avaritia:crystal_matrix_block",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:infinity_shovel",
    [
      "      III",
      "     IIXI",
      "      III",
      "     N I ",
      "    N    ",
      "   N     ",
      "  N      ",
      " N       ",
      "N        ",
    ],
    {
      N: "avaritia:neutronium_ingot",
      I: "avaritia:infinity_ingot",
      X: "avaritia:infinity_block",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:infinity_sword",
    [
      "       II",
      "      III",
      "     III ",
      "    III  ",
      " C III   ",
      "  CII    ",
      "  NC     ",
      " N  C    ",
      "X        ",
    ],
    {
      N: "avaritia:neutronium_ingot",
      I: "avaritia:infinity_ingot",
      X: "avaritia:infinity_catalyst",
      C: "avaritia:crystal_matrix_ingot",
    }
  );

  event.recipes.extendedcrafting.shaped_table(
    "avaritia:skullfire_sword",
    [
      "       IX",
      "      IXI",
      "     IXI ",
      "    IXI  ",
      " B IXI   ",
      "  BXI    ",
      "  WB     ",
      " W  B    ",
      "D        ",
    ],
    {
      B: "minecraft:bone",
      D: "minecraft:nether_star",
      I: "avaritia:crystal_matrix_ingot",
      X: "minecraft:blaze_powder",
      W: "#minecraft:logs",
    }
  );
});
