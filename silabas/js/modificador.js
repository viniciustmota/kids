function fnOrdenar(colecao, attr){    
    return attr ?
        colecao.sort(function(a,b){
            return typeof a[attr] == 'number' ?
                a[attr] - b[attr] :
                a[attr].localeCompare(b[attr])
        }):
        colecao.sort(function(a,b){
            return typeof a == 'number' ?
                a - b :
                a.localeCompare(b)
        });
}

function fnModificarLetra(letLetra,number){
      let letrasDiv = $(".divLetra p."+number+"").map(function() {
        return $(this).text();
      }).get().join(" ");
      let ultimaLetra = letrasDiv.charAt(letrasDiv.length - 2);
      letrasDiv = letrasDiv.replace("--", letLetra);
      $(".divLetra p."+number+":contains('" + ultimaLetra + "')").text(letLetra);
}

function verificaEAlteraResposta(let1,let2,let3,resultado,certoOuErrado){
    
    function verificacaoResposta(btnCor,numClasse, number, number2, letra, numDiv,numCerto, letLetra,certoOuErrado) {
        $(numClasse).click(() => {
            if(resultado[number][btnCor][number2] != letra){                
                $(".div"+numDiv+"").toggleClass("active")
                if($(".div"+numDiv+"").hasClass != "active"){
                    function desativaErro() {
                        $(".div"+numDiv+"").toggleClass("active")
                    }
                    setTimeout(desativaErro, 1000*8)
                }
                $(".btn"+numClasse+"").addClass("erro").text("X").attr("disabled", true)
                
                certoOuErrado = true
                const resultados = [
                    {
                        resposta : certoOuErrado},
                    {
                        chave : numClasse
                    }]
                return resultados
            }else{
                fnModificarLetra(letLetra,numCerto)
                certoOuErrado = false
                const resultados = [
                    {
                        resposta : certoOuErrado},
                    {
                        chave : numClasse
                    }]
                return resultados
            };
        });
    }

    verificacaoResposta('btnAmarelo','.1', 0, 0, 'A', 1,certoOuErrado);
    verificacaoResposta('btnRosa','.2', 1, 0, 'A', 1, 0,certoOuErrado);
    verificacaoResposta('btnVerde','.3', 2, 0, 'A',1,certoOuErrado);
    verificacaoResposta('btnAzul','.4', 3, 0, 'A', 1, 0, let1,certoOuErrado); // CORRETO

    verificacaoResposta('btnAmarelo','.5', 0, 1, 'A', 2,certoOuErrado);
    verificacaoResposta('btnRosa','.6', 1, 1, 'A',2,certoOuErrado);
    verificacaoResposta('btnVerde','.7', 2, 1, 'A', 2, 1, let2,certoOuErrado); // CORRETO
    verificacaoResposta('btnAzul','.8', 3, 1, 'A',2);

    verificacaoResposta('btnAmarelo','.9', 0, 2, 'O', 3, 2, let3,certoOuErrado); //CORRETO
    verificacaoResposta('btnRosa','.10', 1, 2, 'O',3,certoOuErrado);
    verificacaoResposta('btnVerde','.11', 2, 2, 'O',3,certoOuErrado);
    verificacaoResposta('btnAzul','.12', 3, 2, 'O',3,certoOuErrado);
}

function verificarFimDoGame() {
    $(".tudo").remove()
    $(".titulo").remove()
    $(".fim-game").toggleClass("invisivel")
    $("header").remove()
 }

function verificadorDeAcerto(letra1,letra2,letra3,resultado,numbers) {
    let certoOuErrado
    let fnDeAlteracao = verificaEAlteraResposta(letra1,letra2,letra3,resultado,certoOuErrado)
    $(numbers).click(fnDeAlteracao,(resultados) =>{
        if(resultados.target.innerHTML == 'A'){
            if(resultados.target.classList[2] == '4'){
                $(".div1").addClass("active")
                $(".1").removeClass("erro")
                $(".2").removeClass("erro")
                $(".3").removeClass("erro")
                $(".1").attr('disabled',true)
                $(".2").attr('disabled',true)
                $(".3").attr('disabled',true)
                $(".4").attr('disabled',true)
                $(".btn1").text("E")
                $(".btn2").text("O")
                $(".btn3").text("U")
            }
        }        
        if(resultados.target.innerHTML == 'A'){
            if(resultados.target.classList[2] == '7'){
                $(".5").removeClass("erro")
                $(".6").removeClass("erro")
                $(".8").removeClass("erro")
                $(".5").attr('disabled',true)
                $(".6").attr('disabled',true)
                $(".7").attr('disabled',true)
                $(".8").attr('disabled',true)
                $(".div2").addClass("active")
                $(".5").text("O")
                $(".6").text("E")
                $(".8").text("U")
            }
        }
        if(resultados.target.innerHTML == 'O'){
            if(resultados.target.classList[2] == '9'){
                $(".10").removeClass("erro")
                $(".11").removeClass("erro")
                $(".12").removeClass("erro")
                $(".9").attr('disabled',true)
                $(".10").attr('disabled',true)
                $(".11").attr('disabled',true)
                $(".12").attr('disabled',true)
                $(".div3").addClass("active")
                $(".10").text("U")
                $(".11").text("I")
                $(".12").text("E")
            }
        }
        if($(".4").attr('disabled') == 'disabled' && $(".7").attr('disabled') == 'disabled' && $(".9").attr('disabled') == 'disabled'){
            console.log("certo");
            verificarFimDoGame()
        }  
    })
}

export default {
    ordenar: fnOrdenar,
    verificadorDeAcerto: verificadorDeAcerto,
};