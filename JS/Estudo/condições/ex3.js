var agora = new Date
var hora = agora.getHours()
var min = agora.getMinutes()
var s = agora.getSeconds()
var ms = agora.getMilliseconds()
console.log(`Agora são ${hora}:${min}:${s}:${ms}`)
if(hora < 12) {
    console.log('Bom dia')
}else if(hora < 18) {
    console.log('Boa tarde')
}else if(hora >= 18) {
    console.log('Boa noite')
}