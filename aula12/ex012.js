var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas.`)
if (horas <= 5) {
    console.log('Boa Madrugada!')
} else if (horas <= 12) {
    console.log('Bom Dia!')
} else if (horas < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}