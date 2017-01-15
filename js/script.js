//как найти максимальное число в масиве
var array = [34, 1, 529, -78, 89.7, 1243];
var max = getMaxValue(array);
var min = getMinValue(array);
alert(max);
alert(min);

// получение максимального элемента массива
function getMaxValue(array){
    var max = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) { // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (max < array[i]) max = array[i];
    }
    // возвращаем максимальное значение
    return max;
}
console.log(max);
