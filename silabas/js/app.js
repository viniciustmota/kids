import modificador from "./modificador.js";
import figuras from "./figuras.js";

let figurasOrdenadas = modificador.ordenar(figuras, 'img');
let arraysOrdenados = modificador.ordenar(figuras,'div')
let principal = $(".tudo");

for(let figura of figurasOrdenadas){
    let letrasDiv = figura.palavra.split(' ').map(letra => `<div class='divLetra'><p class="${figura.numP} ">${letra}</p></div>`).join('');
    let textoHTML = `
    <section class="principal">
        <div class="itens">
            <div class="area-principal">
                <img src="${figura.img}" class="img">
                <div class="letras">
                ${letrasDiv}
                </div>
                <div class="div-botoes">
                    <button class="btn amarelo ${figura.classBtn[0]} btn${figura.numBtn[0]}">${figura.botoes[0]}</button>
                    <button class="btn rosa ${figura.classBtn[1]} btn${figura.numBtn[1]}">${figura.botoes[1]}</button>
                    <button class="btn verde ${figura.classBtn[2]} btn${figura.numBtn[2]}">${figura.botoes[2]}</button>
                    <button class="btn azul ${figura.classBtn[3]} btn${figura.numBtn[3]}">${figura.botoes[3]}</button>
                </div>
            </div>
            <div class="txtErro active ${figura.div}">
                <p class="msgErro">Boa tentativa, você está quase lá!!</p>
            </div>
        </div>
    </section>
    
    `;

    principal.append(textoHTML);  
};

let resultado = [
    {
        btnAmarelo : $(".amarelo").text().split("")
    },
    {
        btnRosa : $(".rosa").text().split("")
    },
    {
        btnVerde : $(".verde").text().split("")
    },
    {
        btnAzul :$(".azul").text().split("")
    },
]

$(document).ready((numbers) => {

    let letra1 = arraysOrdenados[0].letraCerta
    let letra2 = arraysOrdenados[1].letraCerta
    let letra3 = arraysOrdenados[2].letraCerta

    
    modificador.verificadorDeAcerto(letra1,letra2,letra3,resultado,numbers)

    

});