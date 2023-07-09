$(".errado").click(() =>{
    alert("Você errou, tente novamente")
})

function fimGame(){
    $(".tudo").remove()
    $(".titulo").remove()
    $(".fim-game").toggleClass("invisivel")
    $("header").remove()
}

let correto = []

function verificaFimGame(){
    if($(correto).length == 10){
        fimGame()
    }
}
function acerto(){
    
    $(".certo1").click(() =>{
        $("p.1").addClass("amarelo")
        correto.push("certo")
        correto.join(", ")
        verificaFimGame()
    })//1
    $(".certo2").click(() =>{
        $("p.4").addClass("verde")
        correto.push("certo")
        correto.join(", ")
        verificaFimGame()
    })//2
    $(".certo3").click(() =>{
        $("p.2").addClass("rosa")
        correto.push("certo")
        correto.join(", ")
        verificaFimGame()
    })//3
    $(".certo4").click(() =>{
        $("p.3").addClass("roxo")
        correto.push("certo")
        correto.join(", ")
        verificaFimGame()
    })//4
    $(".certo5").click(() =>{
        $("p.8").addClass("ciano")
        correto.push("certo")
        correto.join(", ")
        verificaFimGame()
    })//5
    $(".certo6").click(() =>{
        $("p.9").addClass("rosa")
        correto.push("certo")
        correto.join(", ")
        verificaFimGame()
    })//6
    $(".certo7").click(() =>{
        $("p.5").addClass("verde")
        correto.push("certo")
        correto.join(", ")
        verificaFimGame()
    })//7
    $(".certo8").click(() =>{
        $("p.6").addClass("laranja")
        correto.push("certo")
        correto.join(", ")
        verificaFimGame()
    })//8
    $(".certo9").click(() =>{
        $("p.10").addClass("roxo")
        correto.push("certo")
        correto.join(", ")
        verificaFimGame()
    })//9
    $(".certo10").click(() =>{
        $("p.7").addClass("azul")
        correto.push("certo")
        correto.join(", ")
        verificaFimGame()
    })//10
}

acerto()