// add quick timer: 1min 5min etc.
// add status bar

var minute = document.getElementById('min');
var second = document.getElementById('sec');
var startButton = document.getElementById('start');
var resetButton = document.getElementById('reset');
var seti = undefined;
var mm = '25';
var ss = '00';

startButton.addEventListener('click', function start() {
    if (startButton.innerHTML === 'START') {
        startButton.innerHTML = 'PAUSE';
        mm = minute.value;
        ss = second.value;
        if (minute.value === '') minute.value = '00';
        if (second.value === '') second.value = '00';
        minute.setAttribute('disabled', true);
        second.setAttribute('disabled', true);
        seti = setInterval(function () {
            if (second.value > 0) {
                second.value -= 1;
                if (second.value < 10 && second.value >= 0) {
                    second.value = '0' + second.value;
                }
            } else if (minute.value > 0) {
                second.value = '59';
                minute.value -= 1;
                if (minute.value < 10 && minute.value >= 0) {
                    minute.value = '0' + minute.value;
                }
            } else {
                clearInterval(seti);
                document.body.style.backgroundImage = 'linear-gradient(to top left, #c0392b, #e74c3c , #9b59b6)';
                setTimeout(function () {
                    alert('Time Out !');
                    res();
                }, 100);
            }
        }, 1000);
    } else {
        minute.removeAttribute('disabled');
        second.removeAttribute('disabled');
        startButton.innerHTML = 'START';
        clearInterval(seti);
    }
});

resetButton.addEventListener('click', res);

function res() {
    clearInterval(seti);
    minute.value = mm;
    second.value = ss;
    minute.removeAttribute('disabled');
    second.removeAttribute('disabled');
    startButton.innerHTML = 'START';
    // document.body.style.backgroundImage = "linear-gradient(to top left, #2980b9, #9b59b6)";
}
