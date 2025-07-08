const cards = [
    {
    category: 'Relationship',
    question: 'Why do some people would rather end a relationship rather than fixing it?',
    answer: 'I dont know'
    },
    {
    category:'Real-talk',
    question:'Am I a bad person?',
    answer:'Super'
    },
    {
    category:'Real-talk',
    question:'Is she a bad person for acting like this?',
    answer:'I dont know'
    },
    {
    category:'Relationship',
    question:'Should I end it all?',
    answer:'Yes'
    },
    {
    category:'Relationship',
    question:'Do you think she still loves me?',
    answer:'No'
    },
    {
    category:'Real-talk',
    question:'Do you think she hates me?',
    answer:'I hope not'
    }
];

const card = document.getElementById('card');
const cardText = document.getElementById("card-text");
const cardCategory = document.getElementById('category-text');
cardText.textContent = cards[0].question;
cardCategory.textContent = cards[0].category

let showQuestion = true;
card.addEventListener('click', () => {
    if(showQuestion) {
        cardText.textContent = cards[currentIndex].answer;
    } else {
        cardText.textContent = cards[currentIndex].question;
    }
    showQuestion = !showQuestion;
});

let currentIndex = 0;
const next = document.getElementById('next-btn');

next.addEventListener('click', () =>{
    currentIndex = (currentIndex + 1) % cards.length;
    cardText.textContent = cards[currentIndex].question;
    cardCategory.textContent = cards[currentIndex].category;
    showQuestion = true;
});

