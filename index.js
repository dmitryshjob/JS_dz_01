
let result = confirm('Хотите сыграть в игру «Угадай число»')

if (result === true) {

    while (true) {
        const numberToGuess = Math.floor(Math.random() * 1000);
        console.log('Загадано число', numberToGuess);
        numberFromUser = null;
        counter = 0;

        while (Number(numberFromUser) !== numberToGuess) {
            let numberFromUser = prompt('Введите число от 0 до 999 или (q) для выхода из игры');
            console.log('Пользователь ввел число', Number(numberFromUser));
            counter++;

            if (numberFromUser === 'q') {
                alert('Игра завершена');
                document.write('Число попыток  ', counter, '  Загадано число  ', numberToGuess);
                break;
            }

            if (isNaN(Number(numberFromUser)) || (Number(numberFromUser) < 0) || (Number(numberFromUser) > 999)) {
                alert('Необходимо ввести число от 0 до 999');
            } else if (Number(numberFromUser) === numberToGuess) {
                alert('Вы угали!');
                console.log('Число попыток', counter);
                document.write('Число попыток  ', counter, '  Загадано число  ', numberToGuess);
                break;
            } else if (Number(numberFromUser) < numberToGuess) {
                alert('Больше');
            } else {
                alert('Меньше');
            }
        }
        break;
    }
}

else if (result !== true) {
    document.write('Всего хорошего!!!');
    console.log('Game Over');
}
