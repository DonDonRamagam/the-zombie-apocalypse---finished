namespace SpriteKind {
    export const boss1 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f e e e e e e c 4 e . 
        e e f 4 4 4 4 4 4 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c e e e e e e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e e e e e e c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    100,
    true
    )
    leftdir = false
    rightdir = false
    updir = true
    downdir = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (rightdir == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
    } else {
    	
    }
    if (leftdir == true) {
        projectile = sprites.createProjectileFromSprite(assets.image`myImage`, mySprite, -100, 0)
    } else {
    	
    }
    if (updir == true) {
        projectile = sprites.createProjectileFromSprite(assets.image`myImage1`, mySprite, 0, -100)
    } else {
    	
    }
    if (downdir == true) {
        projectile = sprites.createProjectileFromSprite(assets.image`myImage0`, mySprite, 0, 100)
    } else {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f e 5 5 e 4 4 e . . 
        . . . f e e e f 4 4 e . . 
        . . . f d f d f d e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 5 5 f 4 4 e f . . 
        . . f d f d f d e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . f . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f e e 5 5 f 4 4 e . 
        . . f f 4 d f d f d e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    100,
    true
    )
    leftdir = true
    rightdir = false
    updir = false
    downdir = false
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    mySprite3 = sprites.create(img`
        ....................
        ......d3d3..........
        ......3ddd3.........
        ......7272d.........
        ......77777.........
        ......7fff7.........
        .......777..........
        .....ee777ee........
        ....77eeeeeee.......
        ....7e47e55ee.......
        ....ee44eeeee.......
        ....77e7eee77.......
        ....77e777e77.......
        ....77eee7777.......
        ....77eee7777.......
        ......eeeee.........
        ......e7.e7.........
        ......77.77.........
        ......ee.77.........
        ......ee.7e.........
        ......ee.ee.........
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Enemy)
    mySprite4 = sprites.create(img`
        ....................
        ......d3d3..........
        ......3ddd3.........
        ......7272d.........
        ......77777.........
        ......7fff7.........
        .......777..........
        .....ee777ee........
        ....77eeeeeee.......
        ....7e47e55ee.......
        ....ee44eeeee.......
        ....77e7eee77.......
        ....77e777e77.......
        ....77eee7777.......
        ....77eee7777.......
        ......eeeee.........
        ......e7.e7.........
        ......77.77.........
        ......ee.77.........
        ......ee.7e.........
        ......ee.ee.........
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Enemy)
    mySprite5 = sprites.create(img`
        ....................
        ......d3d3..........
        ......3ddd3.........
        ......7272d.........
        ......77777.........
        ......7fff7.........
        .......777..........
        .....ee777ee........
        ....77eeeeeee.......
        ....7e47e55ee.......
        ....ee44eeeee.......
        ....77e7eee77.......
        ....77e777e77.......
        ....77eee7777.......
        ....77eee7777.......
        ......eeeee.........
        ......e7.e7.........
        ......77.77.........
        ......ee.77.........
        ......ee.7e.........
        ......ee.ee.........
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Enemy)
    mySprite6 = sprites.create(img`
        ....................
        ......d3d3..........
        ......3ddd3.........
        ......7272d.........
        ......77777.........
        ......7fff7.........
        .......777..........
        .....ee777ee........
        ....77eeeeeee.......
        ....7e47e55ee.......
        ....ee44eeeee.......
        ....77e7eee77.......
        ....77e777e77.......
        ....77eee7777.......
        ....77eee7777.......
        ......eeeee.........
        ......e7.e7.........
        ......77.77.........
        ......ee.77.........
        ......ee.7e.........
        ......ee.ee.........
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Enemy)
    mySprite7 = sprites.create(img`
        ....................
        ......d3d3..........
        ......3ddd3.........
        ......7272d.........
        ......77777.........
        ......7fff7.........
        .......777..........
        .....ee777ee........
        ....77eeeeeee.......
        ....7e47e55ee.......
        ....ee44eeeee.......
        ....77e7eee77.......
        ....77e777e77.......
        ....77eee7777.......
        ....77eee7777.......
        ......eeeee.........
        ......e7.e7.........
        ......77.77.........
        ......ee.77.........
        ......ee.7e.........
        ......ee.ee.........
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Enemy)
    mySprite8 = sprites.create(img`
        ....................
        ......d3d3..........
        ......3ddd3.........
        ......7272d.........
        ......77777.........
        ......7fff7.........
        .......777..........
        .....ee777ee........
        ....77eeeeeee.......
        ....7e47e55ee.......
        ....ee44eeeee.......
        ....77e7eee77.......
        ....77e777e77.......
        ....77eee7777.......
        ....77eee7777.......
        ......eeeee.........
        ......e7.e7.........
        ......77.77.........
        ......ee.77.........
        ......ee.7e.........
        ......ee.ee.........
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Enemy)
    mySprite9 = sprites.create(img`
        ....................
        ......d3d3..........
        ......3ddd3.........
        ......7272d.........
        ......77777.........
        ......7fff7.........
        .......777..........
        .....ee777ee........
        ....77eeeeeee.......
        ....7e47e55ee.......
        ....ee44eeeee.......
        ....77e7eee77.......
        ....77e777e77.......
        ....77eee7777.......
        ....77eee7777.......
        ......eeeee.........
        ......e7.e7.........
        ......77.77.........
        ......ee.77.........
        ......ee.7e.........
        ......ee.ee.........
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Enemy)
    mySprite.setPosition(4, 4)
    mySprite3.setPosition(160, 125)
    mySprite4.setPosition(150, 96)
    mySprite5.setPosition(151, 81)
    mySprite6.setPosition(150, 6)
    mySprite7.setPosition(148, 29)
    mySprite8.setPosition(150, 37)
    mySprite9.setPosition(149, 65)
    mySprite3.follow(mySprite, 20)
    mySprite4.follow(mySprite, 20)
    mySprite5.follow(mySprite, 20)
    mySprite6.follow(mySprite, 20)
    mySprite7.follow(mySprite, 20)
    mySprite8.follow(mySprite, 20)
    mySprite9.follow(mySprite, 20)
    scaling.scaleByPercent(mySprite3, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleByPercent(mySprite4, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleByPercent(mySprite5, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleByPercent(mySprite6, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleByPercent(mySprite7, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleByPercent(mySprite8, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleByPercent(mySprite9, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    mySprite.setPosition(0, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 4 4 e e f . . . 
        . f e e f 4 4 4 4 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 4 4 f . . . 
        . f f f e e f 4 4 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 4 4 e f . . . 
        . . e 4 4 e e e e f . . . 
        . . f e e f 4 4 4 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    100,
    true
    )
    rightdir = true
    leftdir = false
    updir = false
    downdir = false
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f 4 4 e e 5 5 f e f . 
        e 4 f e e e e e e f 4 e . 
        e e f 4 4 4 4 4 4 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f 4 4 e e e 4 4 4 e 
        . e 4 f e e e e e 4 4 e . 
        . . . f 4 4 4 4 4 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f e e f f f c c c . 
        f c c f f e e f f f f f . 
        f f f b f e e f b f f f . 
        f f 4 1 f 4 4 f 1 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e e e 5 5 f e f . 
        . e 4 4 e e e e e f 4 e . 
        . . e e 4 4 4 4 4 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    100,
    true
    )
    leftdir = false
    rightdir = false
    updir = false
    downdir = true
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    mySprite10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        . . . . 3 3 3 d 3 3 . . . . . . 
        . . . 3 d 3 3 d d 3 3 . . . . . 
        . . . f d 3 3 3 d f 3 . . . . . 
        . . . f f 3 3 3 f 3 3 . . . . . 
        . . . 7 2 f 3 f 2 7 7 . . . . . 
        . . . 7 2 7 7 7 2 7 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . f 1 f 1 f 7 7 7 . . . . 
        . . . . f f f f f 7 7 . . . . . 
        . . . . 1 f 1 f 1 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.boss1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.fire, 5000)
})
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let projectile: Sprite = null
let downdir = false
let updir = false
let rightdir = false
let leftdir = false
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ....ffff...........
    ..ffffffff.........
    .ffffffcfff........
    ffffffccfffc.......
    fffcfffffffc.......
    cccfffeeffcc.......
    fffffeeffccf.......
    fffbfeefbfff.......
    .f41f44f14f........
    .fe444444ef........
    .fffeeeefff.f.f....
    fef44ee55feffdfdf..
    e4feeeeeef4ef......
    eef444444feef......
    ...ffffff..........
    ...ff..ff..........
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
let myEnemy = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f d d 3 3 f f . . 
    . f f 3 d 3 d 3 d f f . 
    f f f f 7 3 3 d f f f f 
    f f f 7 7 7 d 3 f f f f 
    f f f 7 7 7 7 3 3 f f f 
    f 7 d 7 7 7 7 7 7 d 7 f 
    f 7 7 f f 7 7 f f 7 7 f 
    f d 7 d d d d d d 7 d f 
    . f d d d b b d d d f . 
    . f f d 7 7 7 7 d f f . 
    d 7 f f f f f f f f 7 d 
    7 d f 1 f 1 f 1 f 1 d 7 
    7 7 f f f f f f f f 7 7 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Enemy)
let mySprite2 = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f d d 3 3 f f . . 
    . f f 3 d 3 d 3 d f f . 
    f f f f 7 3 3 d f f f f 
    f f f 7 7 7 d 3 f f f f 
    f f f 7 7 7 7 3 3 f f f 
    f 7 d 7 7 7 7 7 7 d 7 f 
    f 7 7 f f 7 7 f f 7 7 f 
    f d 7 d d d d d d 7 d f 
    . f d d d b b d d d f . 
    . f f d 7 7 7 7 d f f . 
    d 7 f f f f f f f f 7 d 
    7 d f 1 f 1 f 1 f 1 d 7 
    7 7 f f f f f f f f 7 7 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Enemy)
myEnemy.sayText("BRAINS!!")
mySprite2.sayText("BRAINS!!")
myEnemy.follow(mySprite, 80)
mySprite2.follow(mySprite, 80)
myEnemy.setPosition(160, 117)
mySprite2.setPosition(148, 3)
controller.moveSprite(mySprite)
leftdir = false
rightdir = false
updir = false
downdir = false
