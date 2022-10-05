onEvent( "recipes", ( event ) => {
    event
        .shapeless( "blue_skies:runic_arc", [
            Item.of( "blue_skies:summoner_trophy", '{BlockStateTag:{tier:"silver"}}' ),
            Item.of( "blue_skies:alchemist_trophy", '{BlockStateTag:{tier:"silver"}}' ),
            Item.of( "blue_skies:starlit_crusher_trophy", '{BlockStateTag:{tier:"silver"}}' ),
            Item.of( "blue_skies:arachnarch_trophy", '{BlockStateTag:{tier:"silver"}}' ),
            "#blue_skies:arcs",
        ] )

} );
