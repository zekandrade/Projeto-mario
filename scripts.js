

const form = document.querySelector(".fale-conosco") /* variavel para procurar a classe do formulario*/
const mascara = document.querySelector(".mascara1")

function cliqueiNoBotao(){ /* tem que criar essa função no html*/
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    
}

function cliqueNaMascara1(){ /* variavel para procurar a classe do formulario*/
    form.style.left = "-230%" /* ao clicar na mascara1 o formulario vlte a seu lugar*/
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
    
    
    

}