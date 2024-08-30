// Select the button and elements that will display the quote and person
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "The first step is the hardest.",
        person: "Unknown"
    },
    {
        quote: "Courage is found in unlikely places.",
        person: "J.R.R. Tolkien"
    },
    {
        quote: "Dream big, act bigger.",
        person: "Unknown"
    },
    {
        quote: "Every moment is a fresh beginning.",
        person: "T.S. Eliot"
    },
    {
        quote: "Simplicity is the ultimate sophistication.",
        person: "Leonardo da Vinci"
    },
    {
        quote: "Change is the end result of all true learning.",
        person: "Leo Buscaglia"
    },
    {
        quote: "Happiness depends on ourselves.",
        person: "Aristotle"
    },
    {
        quote: "Life is a daring adventure or nothing at all.",
        person: "Helen Keller"
    },
    {
        quote: "The greatest wealth is to live content with little.",
        person: "Plato"
    },
    {
        quote: "A journey of a thousand miles begins with a single step.",
        person: "Lao Tzu"
    }
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    // Update the text content of the quote and person elements
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
