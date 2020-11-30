function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Jumlah Pertanyaan " + currentQuestionNumber + " dari " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Score Kamu: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Benda padat yaitu benda yang memiliki …", ["bentuk tidak tetap dan volum yang tidak tetap", "bentuk tidak tetap dan volum yang tetap","bentuk dan volum yang tetap", "bentuk dan volum yang tidak tetap"], "bentuk dan volum yang tetap"),
    new Question("Perubahan dari benda padat menjadi benda cair dinamakan …", ["Menguap", "Mencair", "Membeku", "Mengembun"], "Mencair"),
    new Question("Di bawah ini yang termasuk benda padat yaitu...", ["Air putih", "Minyak","Balok es", "Kecap"], "Balok es"),
    new Question("Menyublim yaitu …", ["Perubahan benda gas menjadi padat", "Perubahan benda padat menjadi cair", "Perubahan benda padat menjadi gas", "Perubahan benda cair menjadi gas"], "Perubahan benda padat menjadi gas"),
    new Question("Bagian dari tumbuhan yang mempunyai fungsi mencari air dan zat hara didalam tanah dinamakan …", ["Akar", "Batang", "Daun", "Buah"], "Akar"),
    new Question("Benda yang bentuknya berubah-ubah mengikuti tempatnya, tetapi volumenya tetap dinamakan", ["Benda gas", "Benda cair", "Benda padat", "Semua benar"], "Benda cair"),
    new Question("Pada umumnya, daun berwarna hijau karena mengandung....", ["Karbondioksida", "Krolofil", "Oksigen", "Air"], "Krolofil"),
    new Question("Daun selalu tumbuh dari...", ["Biji", "Akar", "Batang", "Bunga"], "Batang"),
    new Question("Bagian tumbuhan yang memiliki fungsi sebagai alat pengangkut atau transportasi yaitu …", ["Bunga", "Akar", "Batang", "Daun"], "Batang"),
    new Question("Penghubung antar tulang dinamakan ..", ["Rangka", "Sendi", "Otot", "Daging"], "Sendi"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
