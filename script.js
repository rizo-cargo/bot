let score = 0;
let timer = 30;
let gameInterval;
let timerInterval;

function startGame() {
    score = 0;
    timer = 30;
    document.getElementById('score').innerText = `Очки: ${score}`;
    document.getElementById('timer').innerText = `Осталось времени: ${timer} секунд`;
    document.getElementById('hamster').style.display = 'inline-block';
    
    // Обновляем счетчик времени
    timerInterval = setInterval(function() {
        timer--;
        document.getElementById('timer').innerText = `Осталось времени: ${timer} секунд`;
        if (timer <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);

    // Обработчик кликов по хамстеру
    document.getElementById('hamster').onclick = function() {
        score++;
        document.getElementById('score').innerText = `Очки: ${score}`;
        document.getElementById('hamster').style.transform = `rotate(${Math.random() * 360}deg)`; // случайный угол
    };
    
    // Скрытие хамстера на случайном месте
    gameInterval = setInterval(function() {
        if (timer > 0) {
            let randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Генерация случайных координат
            let randomY = Math.floor(Math.random() * (window.innerHeight - 100));
            document.getElementById('hamster').style.position = 'absolute';
            document.getElementById('hamster').style.left = `${randomX}px`;
            document.getElementById('hamster').style.top = `${randomY}px`;
        }
    }, 500);
}

function endGame() {
    document.getElementById('hamster').style.display = 'none';
    alert(`Игра закончена! Ваш итоговый счет: ${score}`);
}