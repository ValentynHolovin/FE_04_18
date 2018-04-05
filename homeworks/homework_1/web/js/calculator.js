var res = 0;
var firstInput = "";
var symbol = "";

function doCalc(key) {
    with (document.calc) {
        switch (key) {
            case '+':
                res += parseFloat(firstInput);
                firstInput = "";
                break;

            case '-':
                res -= parseFloat(firstInput);
                firstInput = "";
                break;

            case '*':
                res *= parseFloat(firstInput);
                firstInput = "";
                break;

            case '/':
                res /= parseFloat(firstInput);
                firstInput = "";
                break;

            case '=':
                firstInput = "";
                break;
        }

        result.value = res;

    }
}

function writeNumber(key) {
    firstInput += key;
    with (document.calc) {
        result.value = firstInput;
    }
}

function resetCalc() {
    res = 0;
    firstInput = "";
    symbol = "";

    with (document.calc) {
        result.value = "";
    }
}