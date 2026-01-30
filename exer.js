// seleciona o formulário e o h3
const frm = document.querySelector("form")
const resp = document.querySelector("h3")


// adiciona o ouvinte do evento submit
frm.addEventListener("submit" , (e) => {
    e.preventDefault() // impede o recarregamento da página


    // obtém o valor digitado e converte para número
    const numero = Number(frm.inNumero.value)
 
   
    // verifica se é par ou ímpar
    if ( numero % 2 === 0) {
         resp.innerText = `O número ${numero} é Par`
    } else {
        resp.innerText = `O número ${numero} é Ímpar`
    }
})