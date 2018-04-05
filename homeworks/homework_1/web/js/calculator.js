var res = 0;
var firstInput = "";
var symbol = "";

function doCalc() {
    with (document.calc) {
        switch (symbol) {
            case '+':
                res += parseFloat(firstInput);
                firstInput = res;
                symbol = "";
                break;

            case '-':
                res -= parseFloat(firstInput);
                firstInput = res;
                symbol = "";
                break;

            case '*':
                res *= parseFloat(firstInput);
                firstInput = res;
                symbol = "";
                break;

            case '/':
                res /= parseFloat(firstInput);
                firstInput = res;
                symbol = "";
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

function writeSymbol(key) {
    if (symbol) {
        doCalc();
    }
    symbol = key;
    res = parseFloat(firstInput);
    firstInput = "";
}

function resetCalc() {
    res = 0;
    firstInput = "";
    symbol = "";

    with (document.calc) {
        result.value = "";
    }
}

function minusOne() {
    firstInput = '' + parseFloat(firstInput) * -1;
    with (document.calc) {
        result.value = firstInput;
    }
}