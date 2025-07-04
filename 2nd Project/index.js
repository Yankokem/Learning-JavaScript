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

function madlib() {
    let adjective = document.getElementById('adjective').value;
    let properNoun = document.getElementById('properNoun').value;
    let verb = document.getElementById('verb').value;
    let exclamation = document.getElementById('exclamation').value;
    let adverb = document.getElementById('adverb').value;
    let pluralNoun = document.getElementById('pluralNoun').value;
    let noun = document.getElementById('noun').value;
    let emotion = document.getElementById('emotion').value;

    document.getElementById('demo').innerHTML =
    `One day, a(n) ${adjective} explorer named <span>${properNoun}</span>
    woke up to find a noun sitting on their front porch.
    Without thinking, they <span>${verb}</span> it and shouted,
    <span>"${exclamation}"</span>. Suddenly, a(n) <span>${adverb}</span> dancing llama appeared,
    juggling <span>${pluralNoun}</span> while singing a song about <span>${noun}</span> .
    It was the most <span>${emotion}</span> morning ever.`;
}

//UNIT CONVERSION

const select1 = document.getElementById('select1');
const celcius = document.getElementById('celcius');
const fahrenheit = document.getElementById('fahrenheit');

select1.addEventListener('change', (event) => {
    selectedValue = select1.value;
    if (selectedValue === 'fahrenheit-opt') {
        fahrenheit.readOnly = true;
        celcius.readOnly = false;
        fahrenheit.value = '';
        celcius.value = '';
    } else if (selectedValue === 'celcius-opt') {
        celcius.readOnly = true;
        fahrenheit.readOnly = false;
        fahrenheit.value = '';
        celcius.value = '';
    }
});

function temp() {
    const celcius = document.getElementById('celcius').value;
    const fahrenheit = document.getElementById('fahrenheit').value;

    if(!fahrenheit) {
        if(celcius) {
            document.getElementById('fahrenheit').value = (celcius * 1.8) + 32;
        }
    } else if (!celcius) {
        if(fahrenheit) {
            document.getElementById('celcius').value = (fahrenheit - 32) / 1.8;
        }
    }
}

select2.addEventListener('change', (event) =>{
    selectedValue1 = select2.value;
    if(selectedValue1 === 'meter-opt') {
        document.getElementById('meter').readOnly = true;
        document.getElementById('kilometer').readOnly = false;
        document.getElementById('meter').value = '';
        document.getElementById('kilometer').value = '';
    } else if (selectedValue1 === 'kilometer-opt') {
        document.getElementById('kilometer').readOnly = true;
        document.getElementById('meter').readOnly = false;
        document.getElementById('kilometer').value = '';
        document.getElementById('meter').value = '';
    }
});

function weight() {
const meter = document.getElementById('meter').value;
const kilometer = document.getElementById('kilometer').value;

    if(!meter) {
        if(kilometer) {
            document.getElementById('meter').value = kilometer * 1000;
        }
    } else if(!kilometer) {
        if(meter) {
            document.getElementById('kilometer').value = meter / 1000;
        }
    }
}

// DARK MODE TOGGLE

const toggle = document.getElementById('toggle');
const body = document.body;

function updateButtonText() {
    toggle.textContent = body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';
}

updateButtonText();

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateButtonText();
});