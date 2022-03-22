/**
 * p0 = servo
 * 
 * p1-2 = water level sensor
 * 
 * p8,12,13 = pump
 * 
 * m = pump
 * 
 * radio 1 = fertiliser
 * 
 * 2 = grass
 * 
 * 3 = algae
 * 
 * 4 =
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == m1) {
        pins.analogWritePin(AnalogPin.P8, 1023)
    } else if (receivedNumber == m2) {
        pins.analogWritePin(AnalogPin.P12, 1023)
    } else if (receivedNumber == m3) {
        pins.analogWritePin(AnalogPin.P13, 1023)
    }
})
let m3 = 0
let m2 = 0
let m1 = 0
radio.setGroup(545.98171)
let water_min = 100
let water_max = 500
m1 = 1
m2 = 2
m3 = 3
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) > water_max) {
        pins.servoWritePin(AnalogPin.P0, 90)
    } else if (pins.digitalReadPin(DigitalPin.P2) > water_min) {
        radio.sendNumber(4)
    }
})
