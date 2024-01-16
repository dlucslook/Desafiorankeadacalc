// script.js

const questions = [
    {
        question: 'JavaScript é uma linguagem de programação?',
        answer: true,
    },
    {
        question: 'CSS é uma linguagem de programação?',
        answer: false,
    },
    // Adicione mais perguntas conforme necessário
];

let playerName;
let currentQuestionIndex = 0;
let xp = 0;
let hp = 100;

function startGame() {
    playerName = document.getElementById('playerName').value;
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function answerQuestion(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const resultElement = document.getElementById('result');
    const xpElement = document.getElementById('xp');
    const hpElement = document.getElementById('hp');

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Resposta Correta! Ganhou 20 XP!';
        xp += 20;
    } else {
        resultElement.textContent = 'Resposta Incorreta! Perdeu 10 HP!';
        hp -= 10;
    }

    xpElement.textContent = xp;
    hpElement.textContent = hp;

    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');

    if (currentQuestionIndex === questions.length - 1) {
        endGame();
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        document.getElementById('result-container').classList.add('hidden');
        document.getElementById('question-container').classList.remove('hidden');
        showQuestion();
    }
}

function endGame() {
    const endResultElement = document.getElementById('end-result');
    const endLevelElement = document.getElementById('end-level');

    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('end-container').classList.remove('hidden');

    if (hp <= 0) {
        endResultElement.textContent = `Fim do Jogo, ${playerName}! Infelizmente, você ficou sem HP.`;
    } else {
        endResultElement.textContent = `Fim do Jogo, ${playerName}! Você terminou com ${xp} XP e ${hp} HP.`;
        endLevelElement.textContent = `Nível: ${calculateLevel()}`;
    }
}

function calculateLevel() {
    if (xp < 10) {
        return 'Ferro';
    } else if (xp <= 20) {
        return 'Bronze';
    } else if (xp <= 50) {
        return 'Prata';
    } else if (xp <= 80) {
        return 'Ouro';
    } else if (xp <= 90) {
        return 'Diamante';
    } else if (xp <= 100) {
        return 'Lendário';
    } else {
        return 'Imortal';
    }
}
