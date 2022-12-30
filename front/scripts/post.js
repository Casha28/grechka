'use strict'
// обявление всех переменных
const username = document.getElementById('namePost');
const surname = document.getElementById('surnamePost');
const patronymic = document.getElementById('patronymicPost');
const birthDay = document.getElementById('DayPost');
const phoneNumber = document.getElementById('phonePost');
const pasportSeries = document.getElementById('pasSerPost');
const pasportNumber = document.getElementById('pasNumPost');
const adress = document.getElementById('adressPost');
const email = document.getElementById('emailPost');

const confirmPost = document.getElementById('confirmPost');
const answerPost = document.getElementById('answerPost');
const urlPost = 'http://192.168.0.58:5000/api/clients/'

// создание класса для тела запроса post
class RegistrationUserData {
    constructor(
        username,
        surname,
        patronymic,
        phoneNumber,
        pasportSeries,
        pasportNumber,
        birthDay,
        adress,
        email
    ){
        this.username = username
        this.surname = surname
        this.patronymic = patronymic
        this.phoneNumber = phoneNumber
        this.pasportSeries = pasportSeries
        this.pasportNumber = pasportNumber
        this.birthDay = birthDay
        this.adress = adress
        this.email = email
    };
};

// Функция для fetch запроса с методом post
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    })
    return response.json()
};

// обработка кнопки
confirmPost.addEventListener('click', () => {
    // Создание тела запроса с введёнными данными
    const userData = new RegistrationUserData(
        username.value,
        surname.value,
        patronymic.value,
        phoneNumber.value,
        pasportSeries.value,
        pasportNumber.value,
        birthDay.value,
        adress.value,
        email.value
    );
    // Post запрос
    postData(urlPost, userData).then((data) => {
        try {
            answerPost.innerHTML = data;
        } catch (error) {
            console.log(error);
        };
    });
});