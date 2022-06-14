let idade = 18

if (idade >= 18){
    console.log("Você tem 18 anos ou mais")
} else {
    console.log("Você não tem 18 anos")
}

let humano = true

if (idade >=18 && humano == true){
    console.log("Você tem 18 anos ou mais e é humano")
} else {
    console.log("Você é menor de 18 anos e é/ou não humano")
}

let aniversario = 1

if (aniversario == 1 || aniversario == 12){
    console.log("Seu aniversario é em Janeiro ou em Dezembro")
} else {
    console.log("Seu aniversario não é em Janeiro ou em Dezembro")
}

let nome = 'Eduardo'

if (nome.substring (0, 1) == 'R'){
    console.log ('Seu nome inicia com a letra R')
} else {
    console.log('Seu nome não inicia com a letra R')
}

let sobrenome = 'costa'

if (sobrenome.length > 6){
    console.log('Seu sobrenome possui mais que 6 letras')
} else {
    console.log('Seu sobrenome possui menos que 6 letras')
}