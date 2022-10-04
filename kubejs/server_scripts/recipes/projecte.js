onEvent("recipes", (event) => {
    event.replaceInput("projecte:watch_of_flowing_time", "projecte:archangel_smite")
    event.remove({id:"projecte:watch_of_flowing_time"})
    event.replaceInput({output:"projecte:philosophers_stone"}, "minecraft:diamond", "extendedcrafting:the_ultimate_ingot")
    event.replaceInput({mod:"projecte"}, "minecraft:diamond_block", "extendedcrafting:the_ultimate_block")
})