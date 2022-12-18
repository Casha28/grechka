'use strict'

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

btnDelete.addEventListener('click', () => {
    const id = inpDelete.value

    const urlId = url + '/' + id

    deleteData(urlId).then((data) => {
        console.log(data)
        try {
            answerDelete.innerHTML = 'client deleted'
        } catch (error) {
            answerDelete.innerHTML = 'ВЫ ЛОХ'
        }
    })
})