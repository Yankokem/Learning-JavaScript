//SIMPLE GREETING APP

let name1;
function greeting() {
    name1 = document.getElementById('idName').value;
    alert('Greetings ' + name1 + '!');
    
}

//AGE CHECKER

let age1
function checker() {
    age1 = document.getElementById('idAge').value;

    if (age1 < 0) {
        document.getElementById('res1').textContent = "Age cant be a negative number!";
    } else if (age1 <= 12) {
        document.getElementById('res1').textContent = "You're a child!";
    } else if (age1 >= 13 && age1 < 18) {
        document.getElementById('res1').textContent = "You're a teenager!";
    } else if (age1 >= 18 && age1 < 56 ) {
        document.getElementById('res1').textContent = "You're an adult!";
    } else if (age1 >=56 && age1 < 101) {
        document.getElementById('res1').textContent = "You're a Senior!";
    } else {
        document.getElementById('res1').textContent = "Damn you old as hell!";
    }
    
}

//SIMPLE CALCULATOR

function add() {
    let num1 = document.getElementById('firstNum').value;
    let num2 = document.getElementById('secNum').value;

    num1 = Number(num1);
    num2 = Number(num2);

    document.getElementById('equals').textContent = num1 + num2;
}

function sub() {
    let num1 = document.getElementById('firstNum').value;
    let num2 = document.getElementById('secNum').value;

    num1 = Number(num1);
    num2 = Number(num2)

    document.getElementById('equals').textContent = num1 - num2;
}

function mult() {
    let num1 = document.getElementById('firstNum').value;
    let num2 = document.getElementById('secNum').value;

    num1 = Number(num1);
    num2 = Number(num2)

    document.getElementById('equals').textContent = num1 * num2;
}

function div() {
    let num1 = document.getElementById('firstNum').value;
    let num2 = document.getElementById('secNum').value;

    num1 = Number(num1);
    num2 = Number(num2)

    document.getElementById('equals').textContent = num1 / num2;
}

function reset() {
    document.getElementById('firstNum').value = '';
    document.getElementById('secNum').value = '';
    document.getElementById('equals').textContent = '';
}

//TODO LIST

const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox" /> <span>${task}</span> <button>Delete</button>`;
    taskList.appendChild(listItem);
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const input = document.querySelector('#task-input');
    const task = input.value;
    addTask(task);
    input.value = '';
})

taskList.addEventListener('click', (event)=> {
    if (event.target.tagName === 'BUTTON') {
        const listItem = event.target.parentElement
        taskList.removeChild(listItem);
    }
})


//SIMPLE PLAYLIST MAKER

const form1 = document.querySelector('.form1');
const musiclist = document.querySelector('#music-list');

function addSong(song) {
    const listSong = document.createElement('li');
    listSong.innerHTML = `<input type='checkbox'/> <span>${song}</span> <button>Delete</button> `;
    musiclist.appendChild(listSong);
}

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const input1 = document.querySelector('#title-input');
    const input2 = document.querySelector('#artist-input');
    const task1 = `${input1.value} by ${input2.value}`;
    addSong(task1);
    input1.value = '';
    input2.value = '';
})

//MAD LIBS GAME

const form2 = document.querySelector('.form2');
const madlibList = document.querySelector('#madlib-list');

let noun = document.getElementById('#noun').value;
let verb = document.getElementById('#verb').value;
let adjective = document.getElementById('#adjective').value;


function madlib(combine) {
    const result = document.createElement('p');
    result.innerHTML = ``;
}

