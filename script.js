// Количество слов в строке
function countWords(str) {
    // Удаляем лишние пробелы в начале и конце строки
    str = str.trim();
    
    // Разбиваем строку по пробелам
    let words = str.split(" ");
    
    // Фильтруем пустые элементы
    words = words.filter(word => word !== "");
    
    // Возвращаем количество слов
    return words.length;
}

let inputString = "Пример строки для подсчета слов";
let wordCount = countWords(inputString);
console.log("Количество слов в строке: " + wordCount);
