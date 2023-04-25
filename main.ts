radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function Forward () {
    wuKong.setAllMotor(100, 100)
}
function forkdown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function Reverse () {
    wuKong.setAllMotor(-100, -100)
}
function forkup () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
let strip: neopixel.Strip = null
let action = 0
joystickbit.initJoystickBit()
radio.setGroup(3)
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    wuKong.lightIntensity(100)
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
})
