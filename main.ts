input.onButtonPressed(Button.A, function () {
    modules.servo1.setAngle(90)
    myModules.servo2.setAngle(90)
    myModules.servo3.setAngle(90)
})
input.onButtonPressed(Button.AB, function () {
    modules.servo1.setAngle(0)
    myModules.servo2.setAngle(0)
    myModules.servo3.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    modules.servo1.setAngle(-90)
    myModules.servo2.setAngle(-90)
    myModules.servo3.setAngle(-90)
})
basic.showIcon(IconNames.TShirt)
modules.servo1.setEnabled(true)
myModules.servo2.setEnabled(true)
myModules.servo3.setEnabled(true)
basic.forever(function () {
	
})
