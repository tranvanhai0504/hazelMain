scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.vy = -160
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    if (mySprite.vy >= 0) {
        mySprite.vy = 0
        mySprite.ay = 0
        if (isDown == 1) {
            mySprite.vy = 100
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -220
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vDarts == 150) {
        animation.runImageAnimation(
        sworf,
        assets.animation`myAnim1`,
        40,
        false
        )
    } else if (vDarts == -150) {
        animation.runImageAnimation(
        sworf,
        assets.animation`myAnim4`,
        50,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.vx = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    if (mySprite.vy >= 0) {
        mySprite.vy = 0
        mySprite.ay = 0
        if (isDown == 1) {
            mySprite.vy = 100
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = sprites.createProjectileFromSprite(assets.image`myImage0`, mySprite, vDarts, 0)
    animation.runImageAnimation(
    myDart,
    assets.animation`myAnim`,
    40,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    mySprite.destroy(effects.fire, 500)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    isDown = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isDown == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim3`,
        150,
        true
        )
    } else if (isDown == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim5`,
        200,
        true
        )
    }
    vDarts = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    mySprite.destroy(effects.fire, 500)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`Main character`)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    vDarts = 150
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`Main character1`)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    vDarts = -150
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isDown == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim2`,
        150,
        true
        )
    } else if (isDown == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim0`,
        200,
        true
        )
    }
    vDarts = 150
})
function nextLevel (num: number) {
    if (num == 1) {
        scene.setBackgroundImage(assets.image`Ice map`)
        tiles.setCurrentTilemap(tilemap`level1`)
        mySprite.setPosition(10, 160)
    } else if (num == 2) {
        scene.setBackgroundImage(img`
            cfffffffffccccccccccccfffffffffffcfcccccccccccfffffffffffcccccfffffffffffffffffccccccccfffffffffcccccccccffccccffffccccbacccccffffffffffffffffffffcbccfffffccff
            cffffffffffffcffcfcccccffffffffffffccfffcccbcffffffffffffffccbcffffffffffffcffcccbcccccffccffffcffffffffffffffffffccfcccccccfffffffffffffffcfffffcfbbcfffffffff
            ffffffffffffffcccccfccfffffffffffffcccfffffcffffffffffffffffcccffffffffffffcffffffccccccd777ffcfffffffffffffffffffffffffccccfffffffffffffffccffffffcccfffffffff
            ffffffffffffffffcccffffffcfcffffffffccfffffffffffffffffffffffcbfffcccffffffffffffffccccb13777fffffffffffffffffffffffffffffcfffffffffffffffffffffffffccfffffffff
            fffcffcffffffffffffffffffcfccfffffffbcffffffccccfffffffffffffccccbcccbcffffffbbffffffccdd7a77cffffffffffffffffffffffffffffffcfcffffffffffffffffffffffffffffffff
            ffccfcccffffcccffffffffffcccccfffffffccfffffcfcbfffffffffffffffcbbccfffffffffcddbcffcc1dd7777cffffffffffffcffffffffffffffffffffffffcccccfffffffffffffffffffffff
            fffccccccffccccccfffffffccccccccfffffcccffffffcbcffffffffffffffffffffffffffffccbbdbcc1dddddd7cffffffffffffcccffccffffffffffffffffccfffcccfcffffffffffffffffffff
            fffccfffccffffffccffffffcccccccccfffffccfffffcfccfffffcccffffffffffffffcfffffccffffcc77777dbcffffcccccfffffcccccccfccccccccfffccccfffc77ccccfffffffffffffffffff
            fcc77cfffcfffffffccfffffcccccccccfffffffcffffffcffffcc7ccfffffffffffffffffffccffffccaca777cfcfcccffffccfffffcfccccfccccccccffffcccccc7777fcbfffffffffffffffffff
            ccc7777cffffffffffccfffccccccccccccffcbccfffffffffccd777cffffcfffffffffffffcfcccfccc77a77cfcffffcfffffffffffcfcccffcccccbcccffccccccc7ca7cfbcffffffffffffffffff
            cc7cc77ccfffffffcfcccffcccccccccccbccccccffffffffcf77777cfffffffffffffffffffffcccbcc777ccfffffffffffcffffffffffcfffccccabccccfcccfffcc7777ccccfffffffffccfcffff
            cc77a77cccffffcffffccfcbccccccccbccccccccffffffffffc777ccfffffffffccffffffffffcbbcc777ccffffffccccccccccfffffcffffffcbbcbccccffffffffffcccbccffffffffccccccffff
            c77c77ccccffffffffffcfccccc7ccacccccccfcfffffccfffffc7ccfffc7d7dbc7fcfffffffffcccbccccccfcfffffcccccfffccfffffffffffccbbccccfffffffffffffffffffccfcccfffffcffff
            7777ccccccffffffffffffccaccccccccccccfffffffccfffffffcccfffc777dd77cccccbbdcbbccbcccffffffffffffccfffcffffffcccfffffffccccccffffffffffffffffcccccfcccfffcccffff
            ccc7ccccc7cffffffffffcbcabcc7aacccccfffffffccffffffffcccffccccccd7cccccbccfffcbcffffffffffffffffffffffcffccc777ccfffffcfccccccffffffffffffffcccccfccfccccccffff
            ffccd77c77fffffffffffcacccccc77ccccfffffffffffffffffffcfffffffccc77ffcccffcfffccbcffffffffffffffffffffffcccbcc777ccccffccccccfffcffffffffffccbffffffffffcccffff
            ffffc77c77fffffffffffcaccccccccbcffffffffffcffffffffffffcccfffffc7cfffffcfffcccbccffffffffffffffffffffcbccbccccc777dcccccccccfffccffffffffcc3dbccffffffffccffff
            cfcffc7777ffffffffffccbac7cccccfffffffffffcffffffffffffffffffffffcbffffffccccccccccffffffffffffffffffcccccccccc77777dccccccccfffccfffffffccbb3dcfffffffffffffff
            cccffcccffffffcffffffcccc7777ccfffffffccfffffffffffffffffcccccffffccffccccccccccffcfffffffffffffffffffccccccbcc7777777ffcccbcfffccffffffcccccbbffcfffffffffffff
            fcfffffffffffffcccffffffc77ccccfffffc77ccfffffffffffffffcffffcccfccbcffcffffffcfffffffffffffffffffffffccbcccbbbc7777cfffffccccfffccffccccccccccfffcffffffffffff
            cfffffffffffffffcffffffffccccffffffffc77cfffffffffffffffcccccfffcccccffffffffffffffffffffffffffffffffccccccccbc777ccfffffcccccfffccfffcccbbcccfffffcfffffffffff
            fffffffffcccffffffffffffffcffffffffffcffccffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffccccccbccccc7ffcfffccccccfffcffffffcccccffffffccffffffffff
            fffffffffccccccffffffffffffffffffffffccfffcfffffffffffcfffffffcffccfbcfffffffffcfffffcfcfffffffffffffcccccccccccccfffffcccccccffffffffffffffffffffffccfffffffff
            fffffffffccccccbbfffffffffffffffffffffccffffccccffcffffffffffffffcccfcffffffffffffffccccfffffffffffffcccbbbbbbcffffffffffcccffffffffffffffffccffffffcfffffffffc
            fffffffffccccccccbcfffffffffffffffffff77ccffccccfcccccfffffffffffffffccfffffffffffffffccfffffffffffffcccbccdcccfffffffccccccfcffffffffffffcfcffccdffcffffffffcc
            ffffffffccccccccccccfffffffffffffffffffffffffccccc7cccffffffffffffffcccffffffffffffffffcfffffffffffffccccffccffffffffcccfcccccfffffffccccffffffc77cfccffffffbbc
            ffffffffcccccccabccccfffffffffffffcffccccffffffcfc7ccccffffffccccffffffffffffffffffffffccfffffffffffffffffffffffffffcccccccccfffffcccccfffffffcc77cffffffffcccc
            ffffffffccccccbccccccfffffffcfffffffcccfcfffffccccf7cccffffffffffffcccbcccfffffffffffcbbcfffffffffffffffffffffffffffcccccfccffffcccffffffffffcccd7ccffffffccccb
            cfffffffccccccfffffffffffcfccfffffffcffffffffccccccc77ccfffcfffffcccccbcccffffffffffbbccccffffffffffffccccccfffffccccccccffffffccffffffffffccccc7cccffffffccccc
            fffffffffffffffffffffffffcfffffffffffffffffffcbccccc7cccfffffffffcccccccccffffffcfffcccccccfffccccccccccccccffffcccffccffffcfffffffffffffffcccc77cccfcccccccccc
            ffffffffffffffffffcccfffffffffffffffffffffffcccccccccbccfcfffffccccccccccfffffffcffcccccccccffbccfffcfffccfcffffcffffffffffcfffffffffffffccfcc777cccccccbbfcccc
            ffffffffffffffffccccfffffffffffffffffffffffccccccccccccfffffffcccccccccccfffffffffccc77ccccffcfffcfffffffffffffffffffffffccfffffffffffffcccccbccccccccbccccffff
            ffffccfffffffffcccccccffffcccccfffffffffffccccccccccccffffffffcccccccccccfffffffffcccc7cccffffffffcffcccffffffffffffffffccccfffffffffffccccccffccccffcc777ccfff
            fffcccfffffffffcccffccfccc7ccccffffffffffccccccccccccffffffffcccccccccccfffffffffffccc7ccfffcfffffffffccffffffffffffffffffcffffffffffffcccccfffffcfffcc7777cfff
            ffccbccffffffffccccccffccc7cccfffffffffffcccccccccfffcccfffffcccccccccccfffffffffcffccccffffffcfffffffffcffffffffffffffffffffcfffffffcfccffffffffcfffccc777cfff
            fccfcccffffffffccccccfffffccccccffffffffffccccccfcfffcccfffffffcccccccccfffffffbcffffcccffffffffffffffffffffffffffffffffffffcccccffffccfffffffffffffcccccc7ccff
            ccfffffcfffffffccccccfffffc7cccffffffffffffcccccffffc77cccffffccffcccccffffffffcccffffcfffffffffffffffffffffcfffffffffffffcccc77ccffffffffffffffffffcccccccffff
            fffffffffffffffcbbccfffffccccccfffccfffffffffcfffffcc7777cffffcfcccccccfccfffffffccfffffffccffffffffffffffffcffffffffffffcccfcc7cfffffffffffffffffffccccfffffff
            ffffffffffffffffccfffffffffffffffcccccffffffffffffffffff7ccfffffccccccffccffffffffccffffffffffffcccffffffffccffffffffffffcfffffc7fffffffffffffffffffccffffcffff
            ffffffffffffffffffffffcffffffffffcccccffffffffffffffccfffccffffcccccccffccccfffffffcffffffffffffffcccfffcccfcffffffffffffffffffc7cffffffffffffffffffccfffffffff
            ffcccffffffffffffffffffffffffffffffffcffffffffffffffccfffcccffffcccccffccccccffffffccfffffcc777cccbcfcfcccbbccffffffffffffffffffccfffffffffffffffffffffffffffff
            ccffffffcccfccfffccfffffffffffffffffcccffffffffffffffffff77cfffffccccffccccccffffffcccfffcccc777ccccccccccbcbcffffffffffffffffffcfcfffffffffffffffffffffffcccff
            cccccfcfcbccccccc7ccccffccccffffccccccccffffffcfffffffffffcccfffffffcccccccccfffffffcccccccccc777cc777cccccffcfffccffffffffffffffccffcfffffffffffffffffffccffff
            ccccfcccbcccbbc777cccccccfffcffccccccccfffffffffffffffffffffffffffffffcccccccffffffccccccccccccc7777777ccffffcfccbccfcfcffffffffcffffffffffffffffffffffffffffff
            ffccfccbccc7cc77cacbaac7cfca77cfcccccccfffffffccffffffffffffffffffffffffc7cccffffc77cfcccc777cbcc7ccccccfffffffcccccccccfffffffffffffffffccfffffffcffcccfffffff
            fffffccc7777cc3d3d337777ccbbc7cffcccccffffffccccfffffffffffffffffffffffccccffcccccc7cffccccffcfc77777cfffffffffcfcbbcfcccfffffffcfffcffcfccffffcfccccccccffffff
            fffffc7ccc7cd7cccccccccfccccccfffffcfcffffccccbbcfffffffffffffffffffffffffc73dccccccffffffcfcfbc7cccfffffffffffcccccccfccffffffcccfffcfccffffffccccccccccccffff
            fffff77cccfc77ccfcfcffffcccccffffffffffffccccccccfffffffffffffffffffffffcc77ccccccccffffffcccccccccfffffffffffffffffcccfcfffffffccfffcffccfffcccccccccccc77cfff
            fffff77ccccfccffffffffffcccccfffffffffffccccccccccfffffffffffffffffffffcc77c7cccccccffcfffffcccffffffffffffffffffffffccffffffffffcffffffffffccccccccccccbc7ffff
            ffffffccbcffffffffffffffccccfffffffffffccccfcccccffcccccccccccccffffffccffccfc7c7ccccfcccfffffffffffffffffffffffcccfccccfffccffcccffffffffffccccccccccccccfffff
            fffffffffffffffffffffffccccfffffffffffccccccccffcffccccccccccc7cccfffffffffcccccccccfffbccfffffffffffffffffffffffccccccffcccccfffffffffffffccccccccbccbccffffff
            ffffffffffffffffffffffccccfffffffffffccccc777cffffffccccccccccccccccfffffffccccc7ccffffdccccffffffffcffffffffffffcccccffccccbcfffffffffffffccccccccccccffffffcc
            ffffffffffffffffffffccccfffffcffffffccccc7ccccfffffffcccccccccc77acccffffcffcccccffffffc77ccfffffffcccfffffffffffffffffc777cccfffffcfffffffcccfccccccfffffcffff
            fccccfffffffffffffcfcccffffffffccfffffcc777cccccffffffccccccccccc777ccffffccccccfffffffc77cccfffffccccccccffcffffffffccb3777ccffffccccfcffcccccccccffffffffffff
            ccbbcccfffffffffccfccffffffffccccfcccccbcccccccfffffffccccccccccccccc7cffffccccffffffffffccbccffcccccccccccccccfffffffccccc7ccffffcccccccffccccccfffffffffccccc
            ccc3bbccfffffffcccccfffffffffcccfffccc7cccfffffffffffffccccccccccccccccffffcccffffffffcfccccccff77cccc77ccccccccccffffccccccccffffccccccccfffcfffffffffffffffcc
            cccbbccfffffffcccccffffffffffccffffccc7ccccffffffffffffccfccfcccfcfffcffffffffffffffffffccccccfccccccccc3ccccccccccfffccccccfcfffffffcffccffffffffffffffffccc77
            cccccccffffffffcccffffffcffffffcfffcccccffffffffffffffffffcccccccfffcfffffffffffffffffffffcccffccfcccccfcbcccccccccffffccfcccffffffffffffffffffffffffffffffcccc
            ffffcccffffffffffffffffcccfffffffffccccffffffffffffffffffffffccccccfcccfffffffffffffffffffffffccccc77cccffcccc77cccfffffcfcffcffffffffffffffffffffffffffffcccff
            fffcccccffffffffffffffccccccfffffffcffffcfffffffffffffffffffffffcc7ccccfffffffffffffccffffffffffcffc77ccfccccccccccfffffcfcfffffffffcccccbccccfffffffffffffcccc
            ffffccccfffffffffffffcccccccccffffccfcffffffffffffffffffffffffffcc7cccffcffcffffffffffffffffffffffcfc7ccfcccccccccfffffffcffffffffffffffffc777cccccffffffffcccf
            ffffcccccfffffffffffffcccccccccfffffffffffffffffffffccfffffffffffcccc7fcfccfffffffffffcffffffffffffffcccccccccccccfcfffffffcffffffffffffffffccccccfffffffffffcc
            ffffcccccfffffffffffffcfcccccccccfffffffffccfffffffccfcfffffffffffffccfcfffffffffffffffffffffffffffffffccfffccccccccfffffffffffcccccfffffffffffffffffffffffffff
            fffffcccccfffffffffffffccccccccccfffffffffcbccfffffccccffffffffffffffffccffffffffffffffffffffffffffffffffcfcfccccc7cfffffffffffcccffcccffffffffffffffffffffffff
            ffffffffffffccfffffffffcccccccccfffcfffffccb3bbcffffcccffffffffffffffffccfffffffffffcffffffffffffffffffffffccccccc7ccfffffffffffcccccffcccffffcffffccffffffffff
            ffffffffffffffffffffffffffcc77ccffffcccfccfcb73bacfffcccfffffffffffffffcacffffffffccccfffffffffffffffffffffffcccbccccffffffffffffccffffffffccbcfffccccfffffffff
            cccccfffffffffffffffffffffffc7cffffffccfcccccb73bcfffccccffffffffffffffcbcfffffffccccfffffffffffffffccccccccccccfcccccfffffffffffffffffffcfffccffffccccffffffff
            ffcccccfccffffffffcccccfffffccffffffffffcccffc3337cfccccccccfffffffffcccccfffffcc77ccccfcffffffffffccccc77777cfccccfccffffffffffffffcfffffccffccfffcccccfffcfff
            cfffffccccbc7cffcccffcccccffffffffffffffcccfffc377cfcccccccccfffffffccfcccffffccccccccffffcfffffffcc7ccbacccaacffffffcfffffffffffffffffffffcfffffffccccccffcfff
            fffffffcb3c777cfffffffcccccfffffffffffffcccfcfcbaccfccccccccccffffffcffcccfffcffffffccccfffcfffffcc77ccabaa7aaacffffffffffffffcffffffccfffffcffffffcccccfffccff
            fffffffff7777cffffffffcccbcfffffffffffffcccccccccccfffccccccccfffffffffcccffffffffffffcccccfcfffccc77aaaaaa7a7accfffffffffffcccffffffffffffffffffffcccccfffcccc
            ffffffffcfffcbcfffffffffcccccffffffffffffccccccccccffffcccccccfffffffcffccffffffffffffffffffffffccccccc77c777777cffffffffcfccccfffffffffffffffffffffccccfffffcc
            ffffffffcffffccfffffffffffffcfffffffffffffccccccccffffffffccccffccfffcccccfffffffffffffffffffffffcccccbccccc77ccffffffffffccccbffffffffffffffffffffcccccffffccf
            cffffffffccfcfcfffffffffffffffccccffffffffffccccaccfffffffffffffcccfffcccffffffffffffffffffffffffffffccbccffffffffffccfffcb3bccfffffffffffffffffffff7ccffffffff
            ccfffffffffcccfffffffffffffffcccccffffffffffffcccccffffffffffffffcccccccffffffffffffffffcccccffffffffffffffffffffcccbbcccccffffffccfcfffffffccccffffc7ccfffffff
            c7cffffffffffffffffffffffffffcccccffffffffffffcccccffffffffffcffcccccfffffffffffffffffccccccccfffffffffffffffffffccccccccccffffffccccccccfccccccfffffccccffffff
            777cfffffffffffffffffffffffffcccfffffffffffffffccccfffffffffffffccccccffffffffffffffffccccccccffffffffffffffffffffcccccccccffffffccccbcccccccccfffffffccfffffff
            c7ccffffffffffffffffffffffffccffffffccccccfffffffccffffffffffffffcccffffffffffffffffcccffccccfffffffffffffffffccbcfcccccccfffffcffccffc777c77cffffffffcccffffff
            cffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffcccfffffffffcccccccfccccffffffffffffffffffffccbd77ccccfcfffffffcffccfffcfffcfffffffffffcffffff
            fccffffffffffcfffffffffffffffffffffffffffcfcbccfffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffccccccccccccccfffffcccfffffffffcfffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffccccccfffffffffffffffffffffffffffffcccccccccfffffffffffffffffccbccffffffccffffffffccccfffffcccfffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffcccfcccfffffffffffffffffffffffffffcfccccccfffffffffffffffccc777cccffffffffffffffffcccffffffcccffffffffffffffffffccf
            ffffffffffffffffffffffffffffffffffccfffffffccfcccc77cffffffffffffffffffffffccccffffffffccccfffffffffffccccccfffcfffffffffffff7ccccfffffffcfffffffffffffffffffcf
            fffffffffffccfffcfffcfcfffffffccccccfffffffffcfccffccffffffffffffffffcfffffffffffffffffccfffffffffffffffffcfcccffcfffffffffffccccccccffffffffffcfffffffffffffff
            ffffffffffffcfffffffccccffffffffcfcccfffffffcccfffffccfffffffffffffffccffccffffffffffffcffffffffffffffffffffcfffffffffffffffffcccccccffffffffffcccfffffffffccff
            ffffccccffffcffffffcc7cccffffffffffccffffffffccffffffffffffffffffffccccfccccccccccffffffffffffffffffffffffffcccffffffffffffffccccccccffffffffffccccccffffffcfff
            ffffcccccccfffffffffccccffffffccccffcbccfffffcffcffffccfffffffffffffccccfcfccccfffcffffffffffffffffffffffffccccccfffcffffffffcc7cccccffffffffffffcccccfffffffff
            fffffccccfffffffffffffcccfffffccfffffccffffffffffffffcccffffffffffffccccffcffcccccfffffcfffffffffffffffffffccccccffcccfffffffccccccffcffffffffffccccccfffffcccc
            cffffccfffffffffffffffffccfffffffffffffffcfffffffffffffcffffffffffffffffffcccccccccffffcfffffffffffffffffffcccfccffccccffffffccccccccccfffffffffcccccffffcccccc
            cccfffccccffffffffccccffffcfffffffffffffffcfffffffffffffffffffffffffffffffffcbccccffffccccffffffffffffffffffccccffccccccffffffcccffccccfffcfffffffbcccccccccccc
            ccccffcbcccfffffccccc7cffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffcfcfffffffffffffffffffffcffccccccfffffffffccccfffffccffffffc7acccccccccc
            cccffffcccccfffffcccc7cfffffffffffffffffffffccfffffffffffffffcccffffcfffffffffc7777ccccfcccfffffffffffffffffccccffcccccffcccffffffccffffffccfffffff77ccffffcccc
            cccccffcccccfffffffccccffffcfcfffffffffffffccccfffffffffffffcc7ccffffffffffffcc7cccababbcccfffcffffffffffffffcfcffcccbcfcffcfffffffffccfffcccffffffccccfffffccc
            ccccccffcccffffffffffcccfffffcffffffffffffffffffffffffffffccccc77cfffffffffffccccccccccabcfffcccffffffffffffffccffcccfccfffffffffffffcccffcccffffffccccffffffcc
            ccccccffffffffffffffffcfffffffcffffffffffffffffffffffffffcccccccccfffffffffffccccccfccccccffffffccfffffffffffffffffffffffffffffffffffffffffccfccfffccccfffffffc
            cccccccfffffffcffffffffffffffc7cccffcccfcffffffffffffffffccccccccffffffccccccccffffffffffffffcfcccccfffffffffffffffffffffffffcffffffffcffffffcfcffffcccffffffff
            ccccccfffffffccccfffffffffffcc7ccccccccfcccffffffffffffffccccccccfffffcffccccccffffffffffffffffffccccffffffffffffffffffffffffffcfffffffffffffffffffffccffffffff
            cccccccfffccfcccccfffffffcfcffccccccccc77ccffffffcccffffffcccccffffffffccccfccccccfffffffffffffcfcccffffffffffffffffffffffffffffcfffffffffffffffcfffffcffffffff
            ffcccccccccffcaccccfccccffcffffccccccccc73bcffffffcccffffffffffffffffffcccffccbcccccffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffff
            ffffcccbccfffcaaccccccccfffffffccccccccbcc3ccffffffccfffffffffffffffffffffffcccccccccccffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfff
            fffffcbccfffccbaccccccfcc77cffffcccccfccccccccffffffffffffffffcccffcffffffffccccccbcacccffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffc
            ccccffffcffffffccc7cccffffffffffccfffffffffccfffffffffffffffffffffccccfcccccccccccfffffffffffffffffffffffffffcccfffffffffffffffccccccccfffffffffffccccccffffffc
            cccccccfffffffffcccccffffffccccffcbccffffffcffcffffccffffffffffffffccccfcfccccffffcfffffffffffffffffffffffffccccccfffcfffffffffcc7cccccfffffffffffffcccccffffff
            fccccffffffffffffffcccfffffccfffffccfffffffffffffffcccfffffffffffffccccffcffccccccfffffcffffffffffffffffffffccccccffcccffffffffccccccffcfffffffffffccccccfffffc
            fccffffffffffffffffffccffffffffffffffffcfffffffffffffcfffffffffffffffffffccccccccccffffcffffffffffffffffffffcccfccffccccfffffffccccccccccffffffffffcccccffffccc
            ffccccffffffffcccccffffcffffffffffffffffcffffffffffffffffffffffffffffffffffcbcccccffffccccfffffffffffffffffffccccffcccccccffffffcccffccccfffcffffffff7ccccccccc
            ffcbcccfffffcccccc7cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffcfcffffffffffffffffffffffcffcccccccfffffffffccccfffffcccffffffc7accccccc
            fffcccccfffffccccc7cffffffffffffffffffffffccffffffffffffffffcccffffcfffffffffc77777ccccfcccffffffffffffffffffccccffcccccfffcccffffffccffffffcccfffffff77ccffffc
            cffcccccfffffffcccccffffcfcffffffffffffffccccfffffffffffffcccbccffffffffffffcc7ccccaba77cccfffcfffffffffffffffcfcffcccbcffcffcfffffffffccfffccccffffffccccfffff
            ccffcccfffffffffffcccfffffcfffffffffffffffffffffffffffffcccccc77cfffffffffffcccccccccccabcfffcccfffffffffffffffccffcccfcccfffffffffffffcccffccccffffffccccfffff
            ccfffffffffffffffffcfffffffcfffffffffffffffffffffffffffccccccccccfffffffffffcccccccfccccccffffffccfffffffffffffffffffffffffffffffffffffffffffcccfccfffccccfffff
            ccfffffffccccffffffffffffccbccccccccfccccffffffffffffffcccccccccfffffcffccccccfffffffffffffffffffcccccfffffffffffffffffffffffffffcffffffffffffffffffffffccfffff
            cccfffccfcccccffffffffcfcffccccccccc777ccffffffcccffffffccccccffffffffccccfcccccccfffffffffffffcfccccfffffffffffffffffffffffffffffcffffffffffffffffcfffffcfffff
            cccccccffcaccccfcccccffcffffccccccccc773bcffffffcccfffffffffffffffffffcccffccbccccccffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
            cccbccfffcaacccccccccfffffffccccccccbccc3ccffffffccffffffffffffffffffffffffccccccccccccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
            fcbccfffccbacccccccfcc77cffffcccccfcccccccccfffffffffffffffffcccffcffffffffcccccccbcacccfffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccfffcccaccccccff3ccacfffffffffccccccccffffffcfffffffffffcccccfccfffffffcccaaacccaaaccfffffffffffffcffffffcfffffffffffffffffffcccccfccccffffffffffffffffffff
            cffccffcccccacbcccf77cccffffffffccccccccccffccfffcfcffffffcccaacccfccfffffcccccaaaaaccccccfffcccfffffffffffffffffffffffffffffffccccc7cccccaccccffffffffffffffff
            ffcccccffcccccccfffccccfffffffffcccccccfccffccffccccffffcccccacacaaabbbcffcaa7aaaaaaaccccffffcccccccccffffffcffffffffffffffffffccccc7ccccccccccffcffffffffffcff
            fffcccccfffccccfffcccccffffffffffccccccccfffcccbccccffcccccccca77ddbccfccc7777777abbaccccfffcbcccccccccffffffffccccffffffffffff777ccccccccccccccccffffffcccfcff
            `)
        tiles.setCurrentTilemap(tilemap`level2`)
        mySprite.setPosition(10, 0)
    } else if (num == 3) {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    nextLevel(2)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vDarts == 150) {
        mySprite.setImage(assets.image`Main character4`)
    } else if (vDarts == -150) {
        mySprite.setImage(assets.image`Main character7`)
    }
    isDown = 1
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    myDart.destroy(effects.disintegrate, 50)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
})
let vDarts = 0
let isDown = 0
let sworf: Sprite = null
let myDart: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Main character`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
nextLevel(1)
mySprite.ay = 650
myDart = sprites.create(assets.image`myImage0`, SpriteKind.Projectile)
sworf = sprites.create(assets.image`myImage0`, SpriteKind.Projectile)
info.setLife(1000)
game.onUpdate(function () {
    if (mySprite.vy < 0 && isDown == 0) {
        mySprite.setImage(assets.image`Main character2`)
    } else if (mySprite.vy > 0 && isDown == 0) {
        mySprite.setImage(assets.image`Main character3`)
    } else if (mySprite.vx == 0 && isDown == 0) {
        mySprite.setImage(assets.image`Main character`)
    }
    if (vDarts == -150) {
        if (mySprite.vy < 0 && isDown == 0) {
            mySprite.setImage(assets.image`Main character5`)
        } else if (mySprite.vy > 0 && isDown == 0) {
            mySprite.setImage(assets.image`Main character6`)
        } else if (mySprite.vx == 0 && isDown == 0) {
            mySprite.setImage(assets.image`Main character1`)
        }
    }
})
game.onUpdate(function () {
    if (vDarts == 150) {
        sworf.left = mySprite.right
        sworf.y = mySprite.y
    } else if (vDarts == -150) {
        sworf.right = mySprite.right
        sworf.y = mySprite.y
    }
})
game.onUpdate(function () {
    mySprite.ay = 650
})
