def count_words(input_string):
    # Разбиваем строку по пробелам
    words = input_string.split()
    
    # Возвращаем количество слов
    return len(words)

input_string = "Пример строки для подсчета слов"
word_count = count_words(input_string)
print("Количество слов в строке:", word_count)
