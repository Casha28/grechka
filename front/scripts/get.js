'use strict'
// объявление всех переменных
const get = document.getElementById('get');
const scrollGet = document.getElementById('scrollGet');
const btnGet = document.getElementById('btnGet');
const idGet = document.getElementById('idGet');
const answerErrGet = document.getElementById('answerErrGet');
const urlGet = 'http://192.168.0.58:5000/api/clients/'

// Функция для fetch запроса с методом get
async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
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
};

// обработка кнопки
btnGet.addEventListener('click', () =>{
// Объявление функции в fetch запросее чтоб был доступ к data получаемое при ответе сервера    
getData(urlGet).then((data) => {
        function clients(number){

        const clientForm = document.createElement('div')
        clientForm.id = `client${number}`
        scrollGet.insertAdjacentElement('beforeend', clientForm)

        const idGet = document.createElement('p')
        idGet.innerHTML = data[number]._id
        idGet.classList.add('id')
        clientForm.insertAdjacentElement('beforeend', idGet)
        
        const nameGet = document.createElement('p')
        nameGet.innerHTML = 'имя: ' + data[number].username
        nameGet.classList.add('text')
        clientForm.insertAdjacentElement('beforeend', nameGet)
    
        const surnameGet = document.createElement('p')
        surnameGet.innerHTML = 'фамилия: ' + data[number].surname
        surnameGet.classList.add('text')
        clientForm.insertAdjacentElement('beforeend', surnameGet)
    
        const patronymicGet = document.createElement('p')
        patronymicGet.innerHTML = 'отчество: ' + data[number].patronymic
        patronymicGet.classList.add('text')
        clientForm.insertAdjacentElement('beforeend', patronymicGet)
    
        const birthDayGet = document.createElement('p')
        birthDayGet.innerHTML = 'день рождения: ' + data[number].birthDay
        birthDayGet.classList.add('text')
        clientForm.insertAdjacentElement('beforeend', birthDayGet)
    
        const phoneNumberGet = document.createElement('p')
        phoneNumberGet.innerHTML = 'телефон: ' + data[number].phoneNumber
        phoneNumberGet.classList.add('text')
        clientForm.insertAdjacentElement('beforeend', phoneNumberGet)
    
        const pasportSeriesGet = document.createElement('p')
        pasportSeriesGet.innerHTML = 'серия паспорта: ' + data[number].pasportSeries
        pasportSeriesGet.classList.add('text')
        clientForm.insertAdjacentElement('beforeend', pasportSeriesGet)
    
        const pasportNumberGet = document.createElement('p')
        pasportNumberGet.innerHTML = 'номер паспорта: ' + data[number].pasportNumber
        pasportNumberGet.classList.add('text')
        clientForm.insertAdjacentElement('beforeend', pasportNumberGet)
    
        const adressGet = document.createElement('p')
        adressGet.innerHTML = 'адрес проживания: ' + data[number].adress
        adressGet.classList.add('text')
        clientForm.insertAdjacentElement('beforeend', adressGet)
    
        const emailGet = document.createElement('p')
        emailGet.innerHTML = 'почта: ' + data[number].email
        emailGet.classList.add('text')
        clientForm.insertAdjacentElement('beforeend', emailGet)
    };
// Начало работы после нажатия кнопки
    try {
        // Удаления клиентов при повторном нажатии кнопки, для исключаня дубликации
        try {
           for (let i = 0; i < data.length; i++){
            const clnt = document.getElementById(`client${i}`);
            clnt.remove();
           };
        } catch (error) {
        };
        // Создание кол-ва клиентов равное кол-ву элементов масива
        for (let i = 0; i < data.length; i++){
            clients(i);
        };
        // очистка поля ответа если он был заполнен
        answerErrGet.innerHTML = null;
    } catch (error) {
        // информирование пользователя о клиентах в массиве
        answerErrGet.innerHTML = `ошибка получения клиентов`;
        console.log(error);
    };
})});