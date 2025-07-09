const cards = [
    {
    category: "Personal",
    question: "What's my biggest mistake?",
    answer: "Buying wallpaper engine",
    a1: "Buying wallpaper engine",
    a2: "Having you",
    a3: "Leaving you",
    a4: "Beef Stake",
    },
    {
    category: "Real-talk",
    question: "Was I ever truly okay?",
    answer: "I was pretending so well I fooled myself",
    a1: "Of course, for a moment",
    a2: "I was pretending so well I fooled myself",
    a3: "Depends on the definition of okay",
    a4: "Maybe in a dream"
    },
    {
    category: "Regret",
    question: "What did I truly lose?",
    answer: "Time I can never scroll back to",
    a1: "A friend",
    a2: "My playlist",
    a3: "Time I can never scroll back to",
    a4: "The last slice"
    },
    {
    category: "Identity",
    question: "Who am I without others?",
    answer: "Still me. Just louder in my head.",
    a1: "A mystery",
    a2: "Still me. Just louder in my head.",
    a3: "Someone worth discovering",
    a4: "Username: unknown"
    },
    {
    category: "Career",
    question: "Why haven’t I made progress?",
    answer: "Because I fear success just as much as failure",
    a1: "No motivation",
    a2: "Because I fear success just as much as failure",
    a3: "My workspace is haunted",
    a4: "Meetings drained my soul"
    },
    {
    category: "Self-Reflection",
    question: "What scares me the most?",
    answer: "Being forgotten in a world that scrolls fast",
    a1: "Clowns",
    a2: "Commitment",
    a3: "Being forgotten in a world that scrolls fast",
    a4: "Running out of snacks"
    },
    {
    category: "Relationships",
    question: "Why did it end?",
    answer: "We stopped speaking each other’s language",
    a1: "We grew apart",
    a2: "I became fluent in silence",
    a3: "We stopped speaking each other’s language",
    a4: "Pineapple on pizza"
    },
    {
    category: "Personal",
    question: "Why did I send that message?",
    answer: "Impulse control: disabled",
    a1: "I had to speak my truth",
    a2: "It was midnight and I was bored",
    a3: "Impulse control: disabled",
    a4: "My cat walked on the keyboard"
    }
];

const card = document.getElementById('card');
const question = document.getElementById('question');
const category = document.getElementById('category');
const choices = document.querySelectorAll('.answers div');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');

question.textContent = cards[0].question;
category.textContent = cards[0].category;
a1.textContent = cards[0].a1;
a2.textContent = cards[0].a2;
a3.textContent = cards[0].a3;
a4.textContent = cards[0].a4;

let currIndex = 0;

//answer checker
choices.forEach((element) => {
  element.addEventListener("click", () => {
    let selected = element.textContent.trim();

    choices.forEach((element) => {
      element.style.backgroundColor = "";
    });

    if(selected === cards[currIndex].answer) {
        element.style.backgroundColor = 'green';
        question.textContent = 'Correct!'
    } else {
        element.style.backgroundColor = 'red';
    }
  });
});

//next button and show
const nextBtn = document.getElementById('button');

nextBtn.addEventListener('click', () =>{
    currIndex = (currIndex + 1) % cards.length;
    category.textContent = cards[currIndex].category;
    question.textContent = cards[currIndex].question;
    a1.textContent = cards[currIndex].a1;
    a2.textContent = cards[currIndex].a2;
    a3.textContent = cards[currIndex].a3;
    a4.textContent = cards[currIndex].a4;

    choices.forEach((element) => {
    element.style.backgroundColor = "";
  });
});




