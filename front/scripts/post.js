'use strict'

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
    ) {
        this.username = username
        this.surname = surname
        this.patronymic = patronymic
        this.phoneNumber = phoneNumber
        this.pasportSeries = pasportSeries
        this.pasportNumber = pasportNumber
        this.birthDay = birthDay
        this.adress = adress
        this.email = email
    }
}

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
}


confirmPost.addEventListener('click', () => {
    
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
    )

    postData(url, userData).then((data) => {
        try {
            answerPost.innerHTML = data
        } catch (error) {
            console.log(error)
        }
    })
})