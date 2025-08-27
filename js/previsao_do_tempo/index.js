const axios = require('axios')

const PROTOCOL = 'https'
const BASE_URL = 'api.openweathermap.org/data/2.5/forecast'
const APPID = '6278981e6c3e2970dfcd8d2d32b07bda'
const UNITS = 'metric'
const Q = 'Itu'
const LANG = 'pt_br'
const CNT = 1

const URL = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&units=${UNITS}&q=${Q}&lang=${LANG}&cnt=${CNT}`

const promiseResultante = axios.get(URL)

promiseResultante.then((previsoes) => {
    console.log(previsoes.data)
})
.catch((erro) => {
    console.log(`Erro: ${erro}`)
})