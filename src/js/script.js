$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path'); //каждый отдельный этаж
    var counterUp = $('.counter-up'); /*кнопка увеличения этажа*/
    var counterDown = $('.counter-down'); /*кнопка уменьшения этажа*/

    // функция при наведении мышью на этаж
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor'); // удаление активного класса у этажей
        currentFloor = $(this).attr('data-floor'); // значение текущего этажа
        $('.counter').text(currentFloor); // записываем значение этажа в счетчик
    });

    counterUp.on('click', function() { // отслеживаем клик по кнопке вверх
        if (currentFloor < 18) { // проверка значения этажа
            currentFloor++; // +1
            usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2,
            useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсветка текущего этажа
        }
    });

    counterDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2,
            useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })
});