'use strict'
// объявление всех переменных
const inpDelete = document.getElementById('inpDelete')
const btnDelete = document.getElementById('btnDelete')
const answerDelete = document.getElementById('answerDelete')

const urlDelete = 'http://192.168.0.58:5000/api/clients/'

// Функция для fetch запроса с методом delete
async function deleteData(url = '') {
    const response = await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    })
    return response.json()
}

// обработка кнопки
btnDelete.addEventListener('click', () => {
    // создание юрл ссылки
    const id = inpDelete.value
    const urlId = urlDelete + id
    
    // проверка на заполленость поля с id
    if (urlId === urlDelete) {
        answerDelete.innerHTML = 'Введите id клиента'
    } else {
        // выполнение запроса
        deleteData(urlId).then((data) => {
            answerDelete.innerHTML = data
        });
    }
})