
// function non_sotib_olish (pul) {

//     console.log('Non necha pul ?');
//     console.log('Non : ' , pul,  'som');

// }

// function non_sotib_olish (pul) {}

// const Non_sotib_olish = (pul) => {}

const add = (a, b) => 
{
    if(a === undefined || b === undefined)
    {
        return 0;
    }
    else if(Number.isNaN(a) || Number.isNaN(b))
    {
        return 0;
    }
    else
    {
       return Number(a) + Number(b);
    }
    
}

/*
    Измените функцию add таким образом, чтобы
    все условия ниже вывели в консоль true
*/

console.log(add(1, 2) === 3);

console.log(add(1, '2') === 3);

console.log(add('1', 3) === 4);

console.log(add('2', '2') === 4);

console.log(add(NaN, 2) === 0); // Not a number

console.log(add('', 2) === 2);

console.log(add() === 0);

console.log(add(true, true) === 2);


const arr = [
    { rating: "96%", cost: 41.3, name: "Дюна", adult: true },
    { rating: "96%", cost: 32.4, name: "Звёздный путь 4" },
    { rating: "96%", cost: 39.6, name: "Доктор Стрэндж и мультивселенная безумия" },
    { rating: "96%", cost: 33.7, name: "Круэлла" },
    { rating: "96%", cost: 33.0, name: "Смерть на Ниле" },
    { rating: "95%", cost: 38.3, name: "Вечные" },
    { rating: "94%", cost: 39.2, name: "Матрица 4" },
    { rating: "94%", cost: 40.8, name: "Главный герой" },
    { rating: "94%", cost: 41.2, name: "Морбиус", adult:true },
    { rating: "93%", cost: 32.1, name: "Веном 2" },
    { rating: "93%", cost: 38.7, name: "Джон Уик 4" },
    { rating: "92%", cost: 38.2, name: "Бэтмен" },
    { rating: "92%", cost: 38.3, name: "Тихое место 2", adult:true },
    { rating: "92%", cost: 36.0, name: "Не время умирать" },
    { rating: "91%", cost: 41.5, name: "Заклятие 3: По воле дьявола" },
    { rating: "90%", cost: 34.8, name: "Чёрная Вдова" },
    { rating: "90%", cost: 39.0, name: "Охотники за привидениями: Наследники" },
    { rating: "90%", cost: 34.0, name: "Аватар 2" },
    { rating: "88%", cost: 37.6, name: "Неизведанное: Удача Дрейка" },
    { rating: "88%", cost: 36.5, name: "Топ Ган: Мэверик" },

];

let result = arr.filter((item)=>{

    const rating = Number(item.rating.split('%')[0]);
    
    return rating < 90;
});

console.log(result)

arr.map(function (item) 
{
    if(item.rating >= '92%')  //   9   2  %   ' 9 6 % '  ' 9 2 %'
    {
        item.cost *= 2 ; // item.cost = item.cost * 2 
    }
     /**
     * Опишите функцию для map таким образом,
     * что бы у фильмов с рейтингом 92 и более %, цена (cost) увеличилась в два раза.
     */
});




/**
 * Отфильтруйте фильмы с рейтингом ниже 90%.
 * Почитать про фильтр можно тут - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
