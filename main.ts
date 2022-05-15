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
    isB = 0
    if (vDarts == 150) {
        animation.runImageAnimation(
        sworf,
        assets.animation`myAnim1`,
        40,
        false
        )
        timer.after(40, function () {
            isB = 1
        })
    } else if (vDarts == -150) {
        animation.runImageAnimation(
        sworf,
        assets.animation`myAnim4`,
        50,
        false
        )
        timer.after(40, function () {
            isB = 1
        })
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
    assets.animation`myAnim7`,
    50,
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    info.changeLifeBy(-1)
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
            cffcffccffccfcfffcccfffcfccccfcffcccccfccffffccccfccccccccccccccccccccccffcccccccccccccccccfffcfffcffffcfffffcfffccffcccccccccfcccccccffccffccffffffffccccffcff
            ccffffccfccffffffcccccffffccffcffcccfcccccffcccccccccccccccccccccccccccfffccccccccccccccccffffffcccffffcffffffffffcfcccfcccffcfcccccccfccffcccccffffffccccccfff
            fcffffccfcffffffcccccccffccfcccccffcffcffccccccccccccccccccccccccccfcfcffcfcccccccfcccccccffffffcffffffcffffcffffffcccccccccccccccccffccffccfcccfffffcccffccfff
            cffcffccffffffcccccccfccffccccccccfcffffcccfccccccccccccccccccccccccccffffcccccccccfccccccccfffccfcffffcffffccccfffffcccccccccccccccfccffcccccfffffffcfcfccffff
            ccfcffcffffffcccccfccccffcccccccccfffcfcfcccccccfcccccccccccccccccccfffffccfcccccccfccccccccfffccfcffcffcffffffccfffffccccccccccccfffccffccccfffffffccfcfcffcff
            ccccffcffffccccccccccccccccfcccccccffcccccccccccccccccccfcccccccccfccfccffcccccccccfcccfcccfffccfcfffcffcffcfffccffcffcccccccccccfffcccffccfccfffffccfffccffccf
            ccfccfccfffccccccccccccccccfcccccccffccccccccccccccccccccccccccccffccfffffccccccccffcccfccfffccccccfccffcfccccfcffccfffccccccccccfccccccfccfccffcffccfcfffffcff
            cccccfccfffccccccccccccccccccccccccfccccccccfcccccccccccccccccccccfccffccfccccccccfccccccffffccccccccfffcfccccfccccfffffccccccccccccccccfcffcfffcfcccffffffffff
            cccffccffffccccccccccccccccccccccccfccccccccfccccccccccccccccccccccfcfffcffcccccccfcccccccffcccccccccfffcfcccffcccfcffffcccccccccccccffffccccfcfffcffffccffffff
            cccffcffffccccccccccccccccccccccccffccccccccfcccccccccccccccccccccfffffffffccccccffcccccccffcccccccccccfcfcfcccccfcccccffccccfcfcccfcccffcccfccffccffffffffcfff
            cccfffffffccccccccccccccccccccccccffccfccccccfccccccccccccccccccccfffffffffccccccffccccccffccccccccccccffccccccccfccccffffcccccfcccffccffcccccfffcffffffffccffc
            ccffffffffffccfccccccccccccccccccfffcccccccfcfccccffcccfccccfccccccccfffffffccccfffcccfccffccccccccccccfccfccccfccccccfcfffcccccffcffcfffccccfcfcfcfffffffccfcc
            cffffffffffcccfcfccccccccccccccccffccfccccccccfcccffccccccccfccccccccfffffffcfcffffcfccccccccccccfcccccccffccccccccffcfffffcccccffcffffffccccfffffcffffccfffccf
            ffffffcfffcccccfffccccccccccfccffffccccccccccfcfcccffcccccccfcccccccccffffffccccfcccccccccccccccccccccccffccfccfccccccfccfccfcccfffffffcffcccfffcffffffccffcccf
            ffffffffffccccccfffcfcccccccccccffcccccfcccccccfcccffccccccffcccccccfcfcfffccccffcccccccccccccfccccccffffccccffcccccfcfcffccfccfcfffcccccfffcffffffffccccffccff
            ffffffcffccccccccfffccccccccfcfffccccccffccfccfcccccfccccccfccccccccfffcfffcccffcccccccccccccccccccccffffcccccccfcccfffcffccffcffffccccccccfffffccccccccfffcfff
            fffffccccfcccccccfcfcccccccfcccffccccfffcccfccfcccccffccccccccccccccffffffcccffcccfccccccccccccccccccfccffcccfcffccffccffccfffcfccccccccccffffffccccccffffcffff
            ffffcccccccfcccccfcffccccccfccffccccfcccccccccfcffcccffccccccccccccfffcfffcccffcccccccccfcccccccccccccccffcccfccfffffffffcfcffcccfcccccccccfffcfcccfffffffffffc
            fffffccfcccfcccccffffccfccffcccccccfccccccccfccccfccccccccccccfccccfffcfffccccfcccccccccfcffccccccccfccccfcffffffffffffcccccffccccccccccccfffccfcccfcffffffffff
            cffffccccccccccfccccfcccccfccccccccffcccffccccccffccccccccccffccccccffffcfcccffccccccfcccccfcccccccccccccffcffffffcccccfcffcfcfcccfccccccccccfffcccfffffcffffff
            fffcfcbccccccccfccfffccccccccccccccffccfffcccffccffcccccccccffcccccffffffccccfcccccccccccccfccccccccccccccfcfffffccccccffffcccccccccccccccffccffcccffffffffffff
            fffcfccccccccccffcfffccccccbcccccccfffccccfccffccffcccccccccffcccccfcffffccccfcccccccccccccccccccccccccccffccfffcccccccfffcccccccccccccccccccccfccfffffffffffff
            ffffcccccccccfccfccfffccccccccccccccffccccccccccccfcccccccfccfcccccfcffffccccfcccccccccccccccccccccccccfcffcffffccfcffcfccccccfcccccccccccccccffcccffffffffffff
            fffcccccccccccccccccffcccccccccccccccffffcccccffcfccccccccccfccccccfcfffcccccfccccccccccccccccccccccccccccfcfffcccfcfffcccccccccccccccccccccccfffccffffffffffff
            fffcccccccccccccfffcccccfcccccccccccfffcffcccfffcfcccccccccccccccccfffffccccffccccfccccfccccccccccccccfcccfcffcccccfcccfccccccccfccccccfccccccfffcccfffffffffff
            ffccccccccccccccfffcccfffcccccccccccffccffffffffffccccccccfccccccccffffcccccfcccccfccccfcccccccffcccccfffcfffcccccffccfccccccccccccccccccccfccffccccfffffffffff
            fccccccccccccccffffccffffcccccccccccffcccfffffffffccccccfffcccccccfffffffccffccccccccccccccccccffcccccfffcffccccccffccccccccffcccccccccccccfffffcccffffffffffff
            fccccccccccccccccffcfffffccccccfcccfcccccffcfcfffcccccccffcccccccfffcccfffffcccccccfccccccccccccccccccfffcfccccccccccffccccccccccccfcccccccfccfffcfffffffffffff
            cfcccccccccccccccffcfffffcccccfcfccccccccccffcffffffccccffccccccffcccccccffffcccccffcccccccccffcccccccffcccccccccccccffccccccccccccfcccccccfccfffcfffffffffffff
            cfccccccccccccccccccffffccccccccccccccfccccfcffffffccfccfccfcffcccccccccfcffffccccccccccccccccfccccccfcfccbcccccccccccfcccccccccccfcccccccfcccfffccffcfffffffff
            cffccccccccccccccccffffccccccccccccccccccccffffccffccffcfccfccccccccccccccfffcffcccccccccccccccfccccfcfcccccccccccccccffccccccccccfcfcfcccccfffffccffcffcfccfff
            cffccccccccccccccccfffccccccccccccccccccccfcfffccfccccffffffcccccccccccccfcffcffcccccccccfccccccccffffcbcccccccccccccfffccfcccccfcccccfcccccccfffccfffcccffffcf
            fccfcccccccccccccfffffccccccccccccccccccccccccfcccccccfffffccccccccccccccfccccfffccccccfccccccccfcfcfcccccccccccccfcccffcccccccccccccffffcccffffcccfcfcffcffcfc
            cccccfccfccccccccccffcbcccccccfccccccccccffcccccfccccccfccffbccccccccccccfcccccfccccccccfccfffcccfffcbcccccccccccccccccfccccccccccccccffccccfcccffccffffccfccfc
            ccccccfccccccccccffffcbccccccccccccccccccccccffccccccccccfffcccccccccccccccfcccfccfcccfcfccfcfcfcfcccccccccfcccccccccccccccccccccccccffcccccccfcfffcccfffcccfff
            ccfcccfcccccccccffffcccccccccccccccccccccccccfccffccccfccffccccccccccccccccfcccfccfccccccccccffffccccccccccccccccccccccccccccccfcfcccfcccfcffffccfffffffcccfffc
            ccccfcfcffcccccffffcccccccccccccccfcccccccccccccffccccffffcccccccccccccccccfccfcfcccccccccccfffcccccccccccccccccccfcccfcccccccfccfcccccccfffffccfffffcffcccffcc
            ccccfcfccffcccfffffcccccccccccccccfcccccccccccfccfccccffffcccccccccccccccccfccfffcccccccccccffccccccccccccccccccccfcccfcccccccccfffcccccccfffcccfcfffcffccccccc
            ccccfccccfffccfffffcccccccccccccccccccccccccccfcffffccffffcccccccccccccccfcccccffccccccccccffcccccccccccccccccccccccccccccccccccfffcccccccfcfcccfcfcfcffccccccc
            cccfccccccffccccfffcccfcccccccccccccccccccccccffffffccfffffccccccccccccfccccccffcccfccccccfffcccccccccccccccccccccccccccccccccfcfcccfccccccffcccfcfcfccfffccffc
            cccfcccccfffcccfffccccffcccccccfcfccccccccccffcfcfccccfffffcccccccccccccccffccfccfcffccccfffcccccccccccccccccccccccccfcfccccccfcffccfccccccfccfccccffccfffcccfc
            cfccccccffffcccfcfcfccfccccccccccccccccccccfffcfccfcccffccfcccccccccccccccfffccccffccccccfffcccccccccccccccfccccccccfcffccccfcccffccfccfccccccfcfccfcccfffffccc
            fccccfcccffccccccccccccccccccccccccccccccccffffcfffccfffccffccccccccccccffccccccccfcccccfffccccccccccccccccfccccccccccfcccccfcccfccfcccffcccccfcccfccccfffffccc
            cccccffcffccccccfcccccccccccccccccccccccccfcfffcfffccffcccffccccccccccccccccfcccccccccfffffccbccccccccccccccfcccccccccfcccccfcccfcffccccfccccccccccfcccccfcfccc
            cfcccfccfcccccccfccccccccfcccccccccccccfccfcccfffffccfccccfccccccccccccccccccccccccccccffffcbbccccccccccccfcfccccccfccccccccfcfcfcccccccccfcccccccccccfccfccccc
            ffcccccffcccccccccccccccccfcccccfcccccccffcfccfffffcffcccfccccccccccccccccccccccccccccccfffcccccccccccccccccfcccccccccccfcccccccfcfcccccccccccccfccccccccccfccc
            ccccccffccccccccfcccccccccfffccccccfcccccfcfcfccfcfccccccfcccccccccccccccccccccccccccccfffffccccccccccccccccfcccccccccccfccccccccfcccccccccccccccfccccccfccfccc
            cccccffcccccccccccccccccccffcccccccccccccfcccfccffccccccccccccccccccccccccccfcccccfcfccccccfccccccccccccccccccfccccccccccccccccccfcccccccccccccccfccccccfccfccc
            ccccfcfcccccccccccccccccccfcccccffffccffffccffcfffbcccccccccccccccccfccccccccccccccffccccccfccccccccccccccccccfccccccccccccccccccccccccccccccfccffcfcccccfffccc
            ccccfffcccccccccccccccccccfccfcffcfffffcccfccfccfcbccccccccccccccccccccccccccccccccfcccccccccccccccccccccccfccffcccccccccccfcccccccccccccccccfccfffccccccffcccc
            ccccffffccccccccccccccccccfcccccffcccfffccfcccfcccbcccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccffccccccccccccccfcccccccccccccffccfcccfcccfffcccc
            cccfcfffcccccccccccccccccffcccccffcfcccfcfcccccccccccccccccccccccccccccccfccccccccccccccccfccccccccfccccccccccfccccfccccccccccccccccccccccccccfcffcfffccffccccc
            cccccfffcccccccccccccccccfcccccfcfcfcccfcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccffccfffccfccccfccccc
            fcccfffcccccccccccccccccccccccfcccfcccccffcccccccfcccccccccccccccccccfccccccccccccccccccccccccccccccccccccccfcffcccccccccccccccccccccccccccffccfffccccccccfcccc
            fccfffcfccccccccccccccccccccccfcccfcccfffcccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccfcccccccccccccccccccccccccccccfcccfccccccccffcccc
            cfffffccfcbcccfccccfccccccccfcccccfcfcffccccccccccfccccccccccccccccccfccccfcccccccccfffcccccccfccccccccccccffccccccccccccccccccccccccccccccffcfcfccccccccfccccc
            cccffccccfccccfccccfcccccccccccccfcccfffccccccccfccccccccccccccccccccccfcccccccccccfccccccccccfccccccccfcccfcccccccccccccccccccccccccccccccfccfcccfccccffcccccc
            cccffccccffcccfccccfccccccccccccccccffffcccccccccccccccccccccccccccccccfcfccfcccccfccbccccccccccccfccccccffcccccfcccccccccccccccccccccccccccfcffccffccfffcccccc
            ccccccccccccfffccccfccccfcccccccccfcccffccccccccccccffccccccccccccccccfcccccccccccccccccccccccccccfccffcccfccccccccccccccccccccccccccccccccccffcccffccfcccccccc
            cccccccccccccfcfccfffcccfcccccccccccccffcccccccccccccfccccccccccccccccfcccccccccfcccccccccccccccccfcccfcccccccccccccccccccccfcccccccccccccccffcccffccfccccccccf
            ccccccccccccccfccccffcccccccccccccccffffcccccccccccccccccccccfcccccccccccccccccccbcccccccccccccccfcccccfcccccccccccccccffcccccfcccccccccccfcffcccfccccccccccccf
            ccccfcccccccccccccccfffcccccccccfcccfffccccccccccccccccccccccfccccccccccccccccccbccccccccccccccccccccccfcfcccccfcccccccfccccccfcccccccccccfcccccccccccccccccccc
            cccffccccccccccccccccffffcccccccffffffccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccfccfccccfcfccccfccccccccccccccfccccccccccccccccccccfccccccccccc
            ccccccccccccccccfccccffccccffffffcccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccfcfcccccccccccccccccccccccccfccccccccccccccccfccccccc
            ccccccccccccccccfccccffccccffffffcccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccfcfcccccccccccccccccccccccccfccccccccccccccccfccccccc
            fccccccccccccccffccccfccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccfcfccccccccccccccccccccccccccccccccccfccccccccccccffc
            ccccccccccccfccffccccfcccccccfcfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccffcccccccccccccccccccfccccccccccccccccccccccfcccccc
            ccfcccccccccfcccffcccccccccccfcffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccfcccccccccccccccccccccccccffccccfccccccccccccfcfccc
            ccfcccccccccfcccffcccfccccccfcccfcfcccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccfffcffcccccccccccccccccccfcccccfcbcccfccccccccccccffcccc
            ccccccccccccccccffcccfccccccfcccccffccccccfccccccccccccccccccccccccccccccccfccccccccccccccccccccccfccccfcfcfccfccffccccccccccccccccccffcbcccccccccccccfcfcccccc
            ccfccccccccccccffccfcfcccccccccccccfffccccccccccccccccccccccccccccccccccccfcfccccccccccccccccccccccccccfcffcccfffffcccccccccccfccccccffcbcccccccccffccfcccccfff
            ccfccccccccccccffccfcfcccccccccccccfffccccccccccccccccccccccccccccccccccccfcffcccccccccccccccccccccccccfcffcccfffffcccccccccccfccccccffcbcccccccccffccfcccccfff
            ccccccccccccfccccccccfcccffcccccccccffffccccfffccccccccccccccccccccccccccffffcccccccccccccccccccccccccffcfcccfcffffccccccccccccccccccffcccccccccccfccccccccccff
            ccccccccffcccccccfccffccfccccccccccccffffcccccccccccccccccccccccfcccccccfffccccccccfffcccccccccccccfccfccfcccccfcffcccccccccccccccccccffccccccccfcccccfcccccfff
            cccccccccfffcccccfccffffcccccccccccccccfffccccccccccccfccccccfcffccccfcccffccfccccccffccccfcccccccccccccffcccccfccfcccccccccccccccccccfcccccccccffcccccccccffcc
            cccccccccffffccfcfcccfcccccccccccccccccffffcccccccccccfcccccfffffccccccccccccccccccccccfffccccccccccccccffccfccccffffcccccccccccccccfcfccccccccfffccccccccffccc
            ccccccccccfffccfcfcccfccccccccccccccccfffffccccccccccccccccfffcccccccccccccccccccccccfccffbcccccccccccfcfcccffcccfcffffcccccccccccccfcfccccccccfffccccccfffcccf
            cfcccccccccffffcfcccffcccccfccccccccccccfcfffcccccccccccccccfffcccccfcccccccccccccccccccfcccccccccccccfccccccccccccffffccccccccccccfffcccccccccfccfccffcccccccf
            ccccccccccffffffcccfffcccccccccccccccfcccfcfffcfccccccccccccffccfcccffccfccccccccccccccffcccccccccccccfccccccccfcfcfffcccccccccccccccccccccccccfcfffccccccccccc
            ccfcccccccfffffccffcfccfccccccccccfccccccfcffffcfccccccccccffcccccccccccfccccccccccccfffcccccccccccccccccccccccccfcfffcfcccccccccffffccbccfffccccfccccccccccccc
            cccfcccccccfffccfcccfccccccccccccccccccccfcfffcccccfcccccccccccccfccccccfccccccccccccffffccccccccccccccccccccccccfffffcfcccccccccffccfcccffccccccccccccccccffcc
            cccccccccccffffcfccffffcfccccccccccccccccfcfccfccccccccfccccccfccccfffcccccccccccccccffffcccccccccccccccccccccfccfcfcccfcccccccffcccccccccccccccccccccccccccccc
            cccccffccffcfffcfccffcfcccccccccccccfcccffcccfcccccccccccccccccccccfcfccccccccccccccccfcfcccccccccccccccccccccccfccccccffcccffccccccccccccfccccccccccccccccccff
            ccccccfffcccfcfcfccffcfcccccccccccccfcfccccfcccccccccccccccccccccccccffcccccccccccccccfffccfccccccccfcccccccccccfcccccccffcfcccccccccccccccfcccccccccccccccccff
            cccccfffccccfcccccfffcccccccccccccccccfcccfffcffcccccccccccccccccccfccffccccccfcccccccfffccfffffcccffcccccccccccccccccccfffcbccccccccccccccccccccccccccccccccff
            ccccffffccccfcffccfcccccccccccccccccfcccccfcccfccccccccccffcccccccccccfffcccccfcccccccfccccfffffccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccffc
            fcfcfffcccfcfcffccccfcfcccfccccccccffcccccccccccccfccccccfcfccccfccccfcffcccccccccccccfcccfcffffccccccccccccccccccccccccffbccccccccccccccccccccccccccccccccfffc
            ffccffcccccfffccfffcfcfccccccccccccfccccccccfcccccccccccccfffcccfcccfcccfffccccccccccccccccccfcffcfccbccccccccccccccffccfccccccccccfcccccccccccccccccccccccfffc
            cfccfccccccffffffffcffccccccccfcccfccccccccfcffccccfccfcccffcccfccccfcfffffcccccccccccccccccffccfffccccccccfcccccccccfffcccccccccccfccfccccccccccfcccccccccfffc
            cfcffcfcccccccffccfcffcccccccccccffcccfcccccccccccccccfcccfffccfcccffcffffcccccccccccccccfccccfccffcccccccccccccccccccffcbccccccccccccffccccccccfffcccccfccfffc
            cfcffcccccccccffccfffcfccffccccccffccccccfccccccccccfcfccffcfccccccfffcfffccccccccccccccccccccfcccfcccccccccccccccccffccbcccccccccccffcccccccccccffcccfcffcccfc
            fcccfccccccccffcccffffccccfccccccfffcccccccfccfcffccfccffcfcccccccffffcffcccccccccccccccccfcccccccfffccccccccccffcccfcccbcccccccccffccccccccccccccccccffffccffc
            ccfffcfcccccffccfffffccccccccfffcfffcccccccfccfcffcccccffccfcccccffcfcffcccccccccccccccccccfccccccfccfcccccccfffcfccccfcccccccccccfccccccccccccccccccccffccffff
            cffcfcfcccffffcccffccccfccccccfccfffcccccccccccccffcffffffccccccccccfffccfccccccccccccccccccffccccfccffcccccccfffcccccccccccccccccccffcccccfcccccccccccffcfffcf
            fffccffcccffcccffffccccccccfccfcccffcccccccfccccccffffcfffcfccccccccfffcccccccccccccccccccfccccccccccffcccccccffccccccffcccccccccccfccccfccfcccccccfcccffcccccc
            fffccffcccfcffcffcccccccfffcccfcfccfffccccccccccccffffccffcccccccfccffccccccccccccccccccccffccccccccccffcccfffccccccccfffcccccccccccfcccccccfccccccfccffcccccfc
            cfffffffcccffcffccccccccffcccccfcccfffcccccccccccffcffcffffccfcccccffccccccccccccccccccccffcccfcccccccfffccfccbcccccfccffccccccccccffcfccccccfccccccccccffccccf
            cfffcfffcccffffccccccccccccfccffcfffffccccccccccfffffccffffffcccffffccccccccccccccccccccfffccccccccccccfffccbcccccccffccfffccccccccffcfcccccccfcccccccccffccccf
            fffcccfffccffcccccccccccccffcffcffffffffccccccccffffffcfffffffccffffccccccccccccccccccccffcccccccccccccfffcccccccccffffccffccccccffffcfffcccccccccccccccffccccf
            fffcccffffffcccccccccccccfffffccffffffffcccccccccffffffffccfffffccfcccccccccccccccccfcfcfccccccccccccccffcccccccccccfffccffcccccfffffcfffcccccccccccccccfffccff
            fcfcfffcfffccccccccccfcccfffffcccfffffffccfcccfffccffffffccffffffffccccccccccccccccfcffccccccccccccccccffcccccceeecccffccffccccfffcccfffcfccccccfccccccccffccfc
            ccfffffcfcccfcccccccccccccfcffffffcffcfcccfcccfffccffffcccfcccfcfffccccccccccccccccfcffcccccccccccccfffffcbcccceeccccffcccfccccfffcccffccfcccccccccccccfcfffccc
            fccfffffcccfccccccccccccccfcfffffffffffcccfcffffffcfcfccfffccccccffccccccccffcccffccffffccccccccccfffffccccccccccccccffcccffcccfffcccffccfcccccccccccccfcfcfffc
            fcffffffccffcccccccccffcfffcffcfffcffffccfccccffcfffccffcffccccccffccccccccccccffcfffffccfccfccccffffccccccccccccccccffccfffccffcfcccfffffccccccccccccccfccccff
            fffffffccfccffccccccfffcccccffccffffcffccfcccfcfffffccffccfffcfccffccccfcccccccfccfcfccccfcccfcccffffccccccccccccccccfffffffffffcccccccfffccccccccccccccffcccff
            fffcfffffffcfcccccccffcccccccfccfffffffffffcfcffccfffffcccfffcffffffcccccfcccccfccffffcfffffffcfffffcccfccccccccccccfcfffffffffcffcccfffffccccccccfcccccccffccc
            ccccffcccffffffccfccccffccccffffffcccffffffffffccccccfffcfffffcfffccccccfccfffcccccffffffffffffcfcccfffccccfcfcccccccccccccffcffffffcccfcfffccccccccccccfcccccc
            cccccfcccccccffccfccccffccccffffffccccccccffffffcccccccfcfffffcfffccccccfccfffcccccffffffffffffcfcccffffcccfcfccccccccccccccfccccccccccfcccffcccccccccccfcccccc
            ffcccfccccccccccffccccfccccccfffffccccccccffccffcccccccccfffffcccccccccccccffffcccccfffffffcfffcccccffffcccfcfccccccccccccccfcccccccccccccccfcccfccccccccccccff
            cccccfcccccccfccffccccfcccccccfcfccccccccccfcccfcccccccccccccccccccccccccccffffcccccccccccccccccccccffffcccccffcccccccccccccfcccccfcccccccccffcccccccccccfccccc
            cccfcccccccccfcccffcccccccccccfcffcccccccccccccccccccccccccccccccccccccccccfcfffccccccccccccccccccccccccccfccfcccccccccccccccccccccccccffccccfffccccccccccfcfcc
            cccfcccccccccfcccffcccfccccccfcccfcfcccccccccccccccccccccccccccccccccccccccfcffcccccccccccccccccccccccccfffcffcccccccccccccccccccfcccccfcbcccfcffcccccccccffccc
            cccccccccccccccccffcccfccccccfcccccffccccccfccccccccccccccccccccccccccccccccfffccccccccccccccccccccfccccfcfcfccfccffccccccccccccccccccffcbcccccccccccccfcfccccc
            cccfccccccccccccffccfcfcccccccccccccfffccccccccccccccccccccccccccccccccccccfcffcccccccccccccccccccccccccfcffcccfffffcccccccccccfccccccffcbcccccccccffccfcccccff
            cccfccccccccccccffccfcfcccccccccccccfffccccccccccccccccccccccccccccccccccccfcffcccccccccccccccccccccccccfcffcccfffffcccccccccccfccccccffcbcccccccccffccfcccccff
            cccccccccccccfccccccccfcccffcccccccccffffccccfffccccccccccccccccccccccccccfffffccccccccccccccccccccccccffcfcccfcffffccccccccccccccccccffcccccccccccfccccccccccf
            cccccccccffcccccccfccffccfccccccccccccffffcccccccccccccccccccccccfcccccccfffccccccccfffcccccccccccccfccfccfcccccfcffcccccccccccccccccccffccccccccfcccccfcccccff
            ccccccccccfffcccccfccffffcccccccccccccccfffccccccccccccfccccccfcffccccfcccffccfccccccffccccfcccccccccccccffcccccfccfcccccccccccccccccccfcccccccccffcccccccccffc
            ccccccccccffffccfcfcccfcccccccccccccccccffffcccccccccccfcccccfffffccccccccccccccccccccccfffccccccccccccccffccfccccffffcccccccccccccccfcfccccccccfffccccccccffcc
            cccccccccccfffccfcfcccfccccccccccccccccfffffccccccccccccccccfffcccccccccccccccccccccccfccffbcccccccccccfcfcccffcccfcffffcccccccccccccfcfccccccccfffccccccfffccc
            `)
        tiles.setCurrentTilemap(tilemap`level2`)
        mySprite.setPosition(10, 24)
    } else if (num == 3) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
            ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
            fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
            fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
            fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
            ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
            f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
            ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
            ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
            fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
            fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
            ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
            fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
            fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
            ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
            ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
            fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
            ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
            bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
            bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
            bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
            bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
            3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
            333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
            cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
            cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
            cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
            cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
            bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
            bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
            dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
            dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
            dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
            ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
            ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
            ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
            ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
            d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
            333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
            33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
            33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
            d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
            ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
            b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
            bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
            bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
            b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
            dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
            dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
            dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
            dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
            3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
            33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            `)
        tiles.setCurrentTilemap(tilemap`level3`)
        mySprite.setPosition(30, 10)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile56`, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    nextLevel(3)
})
let vDarts = 0
let isB = 0
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
