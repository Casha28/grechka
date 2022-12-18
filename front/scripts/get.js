'use strict'

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
}

btnGet.addEventListener('click', () =>{
    const client = inpGet.value

getData(url).then((data) => {
    try {
        // формирование описания клиента
        nameGet.innerHTML = 'имя: ' + data[client].username,
        surnameGet.innerHTML = 'фамилия: ' + data[client].surname,
        patronymicGet.innerHTML = 'отчество: ' + data[client].patronymic,
        birthDayGet.innerHTML = 'день рождения: ' + data[client].birthDay,
        phoneNumberGet.innerHTML = 'телефон: ' + data[client].phoneNumber,
        pasportSeriesGet.innerHTML = 'серия паспорта: ' + data[client].pasportSeries,
        pasportNumberGet.innerHTML = 'номер паспорта: ' + data[client].pasportNumber,
        adressGet.innerHTML = 'адрес проживания: ' + data[client].adress,
        emailGet.innerHTML = 'почта: ' + data[client].email,
        idGet.innerHTML = data[client]._id

        // очистка поля ответа если он был заполнен
        answerGet.innerHTML = null
    } catch (error) {
        // информирование пользователя о клиентах в массиве
        answerGet.innerHTML = 'всего клиентов ' + data.length

        // очистка полей данных если они были выведены о каком либо клиенте
        nameGet.innerHTML = null,
        surnameGet.innerHTML = null,
        patronymicGet.innerHTML = null,
        birthDayGet.innerHTML = null,
        phoneNumberGet.innerHTML = null,
        pasportSeriesGet.innerHTML = null,
        pasportNumberGet.innerHTML = null,
        adressGet.innerHTML = null,
        emailGet.innerHTML = null,
        idGet.innerHTML = null
    }
})})