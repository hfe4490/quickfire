input.onButtonPressed(Button.A, function () {
    if (A == 1) {
        basic.showIcon(IconNames.Yes)
        A = 0
        SCORE += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (B == 1) {
        basic.showIcon(IconNames.Yes)
        B = 0
        SCORE += 1
    }
})
let SCORE = 0
let B = 0
let A = 0
basic.showLeds(`
    . # # # .
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . # # # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.pause(2000)
basic.showLeds(`
    # # # # .
    # . . . #
    # # # # .
    # . . . #
    # # # # .
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . # # # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
basic.pause(2000)
basic.showString("READY?")
for (let index = 0; index < 30; index++) {
    if (randint(1, 2) == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        A = 1
    } else {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . #
            # # # # .
            `)
        B = 1
    }
    basic.pause(500)
    A = 0
    B = 0
}
basic.pause(2000)
