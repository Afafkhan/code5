let Num1 = 0
let Num2 = 0
let Result = 0
input.onButtonPressed(Button.B, function () {
    Num1 = 5
    Num2 = 1
    for (let index = 0; index < 4; index++) {
        Num1 += 10
        Num2 += 3
        Result = Num1 + Num2
    }
    basic.showNumber(Result)
})
