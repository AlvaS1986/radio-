input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("sorrir")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("oi")
})
radio.setGroup(2)
