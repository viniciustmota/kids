$(() => {
    $("#peca1").click(clickPeca1)
    $("#peca2").click(clickPeca2)
    $("#peca3").click(clickPeca3)
    $("#peca4").click(clickPeca4)
})


function pecaLogica(classe, src, classnew, classNo, nPeca){
    var table = $(".table1")
    if(table.is(classe)){
        $(table).attr("src", src)
        $(table).removeClass(classNo)
        $(table).addClass(classnew)
        nPeca.addClass("habilitado")
    } else{
        var msg = $(".msg")
        var paragrafo = $("<p>").text("Peça errada, tente novamente").addClass("msg-erro")
        msg.append(paragrafo)
        setTimeout(() => {
            paragrafo.remove()
        }, 1500)
    }
}

function clickPeca1(){
    pecaLogica(".peca1-in","imgs/tatu/tatu-base2.png", "peca2-in", "peca1-in", $("#peca1"))
}

function clickPeca2(){
    pecaLogica(".peca2-in","imgs/tatu/tatu-base3.png", "peca3-in", "peca2-in", $("#peca2"))
}

function clickPeca3(){
    pecaLogica(".peca3-in","imgs/tatu/tatu-base4.png", "peca4-in", "peca3-in", $("#peca3"))
}

function clickPeca4(){
    pecaLogica(".peca4-in","imgs/tatu/tatu-base.png", "","",$("#peca4"))
    setTimeout(() => {
        if ($(".habilitado").length === 4) {
            fimdejogo();
        }
    }, 2500)

}


function fimdejogo(){
    $(".fim-game").toggleClass("invisivel")
    $(".peças").remove()
    $(".msg").remove()
    $(".img-container").remove()
    $("header").remove()
}


