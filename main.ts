let rij = 0
let kolom = 0
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    rij += -1
    if (rij == -1) {
        rij = 0
    }
    led.plot(kolom, rij)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # # . # #
            # # # # #
            `)
        basic.pause(500)
    }
    basic.showString("E")
    basic.showString("N")
    basic.showString("D")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    kolom += 1
    if (kolom == 5) {
        kolom = 4
    }
    led.plot(kolom, rij)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    rij = 2
    kolom = 2
    led.plot(kolom, rij)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    rij += 1
    if (rij == 5) {
        rij = 4
    }
    led.plot(kolom, rij)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    rij += 1
    if (rij == 5) {
        rij = 0
        kolom += 1
        if (kolom == 5) {
            kolom = 0
        }
    }
    led.plot(kolom, rij)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    kolom += -1
    if (kolom == -1) {
        kolom = 0
    }
    led.plot(kolom, rij)
})
