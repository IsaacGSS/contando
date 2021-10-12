var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passos = document.getElementById('passo')
var res = document.getElementById('div_two')

    

function contar(){

    res.innerHTML = ''

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passos.value)

    if(i == "" || f == "" || p == "" ){
        alert('[ERROR] dados não encontrados, digiteos...')
        res.innerHTML = 'impossivel contar..'
    } else{
        if(i < f){
            // comtagem progreciva
            for(var c = i; c <= f; c += p){
                
                res.innerHTML += `${c}`
            
                if(c < f){
                    res.innerHTML += `👉`
                }else if(c == f){
                    res.innerHTML += '🏁'
                } else {
                    alert('algo deu errado..')
                }
            }
        } else{
            for(var c = i; c >= f; c -= p){
                
                    res.innerHTML += `${c}`
                
                if(c > f){
                    res.innerHTML += `👉`
                }else if(c == f){
                    res.innerHTML += '🏁'
                } else {
                    alert('algo deu errado..')
                }
            }
        }
    }
}

function linpar(){
    res.innerHTML = ''
}