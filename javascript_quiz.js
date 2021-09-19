let questions = [
    {
        question: "What is Superman's arch-enemy?\n(a) Clark Kent\n(b) Lois Lane\n(c) Lex Luthor",
        answer: "c"
    },
    {
        question: "What is Batman's real name?\n(a) Barry Allen\n(b) Bruce Wayne\n(c) Diana Prince",
        answer: "b"
    },
    {
        question: "What is the first Green Lanter's of earth?\n(a) John Stewart\n(b) Guy Gardner\n(c) Hal Jordan",
        answer: "c"
    }
];

let score = 0;

for (var i=0; i < questions.length; i++){
    let response = window.prompt(questions[i].question);

    if (response == questions[i].answer){
        score ++;
        alert ('You got the right answer!');
    } else {
        alert ('Wrong!');
    };
};

alert ('You got ' + score + "/" + questions.length);