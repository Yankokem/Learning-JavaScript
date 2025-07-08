const screen = document.getElementById('screen');

//idk
const ac = document.getElementById('ac');
const del = document.getElementById('del');

//operators
const mod = document.getElementById('%');
const plus = document.getElementById('+');
const sub = document.getElementById('-');
const mult = document.getElementById('x');
const div = document.getElementById('/');
const point = document.getElementById('.');
const equals = document.getElementById('=');

//numbers
const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');

zero.addEventListener('click', function () {
    if (screen.value === "") {
        return;
    }
    screen.value += '0';
});

one.addEventListener('click', function () {
    screen.value = screen.value + '1';
});

two.addEventListener('click', function () {
    screen.value = screen.value + '2';
});

three.addEventListener('click', function () {
    screen.value = screen.value + '3';
});

four.addEventListener('click', function () {
    screen.value = screen.value + '4';
});

five.addEventListener('click', function () {
    screen.value = screen.value + '5';
});

six.addEventListener('click', function () {
    screen.value = screen.value + '6';
});

seven.addEventListener('click', function () {
    screen.value = screen.value + '7';
});

eight.addEventListener('click', function () {
    screen.value = screen.value + '8';
});

nine.addEventListener('click', function () {
    screen.value = screen.value + '9';
});

point.addEventListener('click', function () {
    screen.value = screen.value + '.';
});

ac.addEventListener('click', function() {
    screen.value = '';
});

del.addEventListener('click', function() {
    screen.value = screen.value.slice(0, -1);
});

mod.addEventListener('click', function () {
    screen.value = screen.value + mod.value;
});



plus.addEventListener('click', function () {
    if (screen.value === "") {
        return;
    }
    screen.value += plus.value;
});

sub.addEventListener('click', function () {
    if (screen.value === "") {
        return;
    }
    screen.value += sub.value;
});

mult.addEventListener('click', function () {
    if (screen.value === "") {
        return;
    }
    screen.value += mult.value;
});

div.addEventListener('click', function () {
    if (screen.value === "") {
        return;
    }
    screen.value += div.value;
});

equals.addEventListener('click', function () {
    if (screen.value !== '') {
        try {
        screen.value = eval(screen.value);
        } catch (error) {
        screen.value = 'Error';
        }
    }
});











