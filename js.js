function tabuada(){
    var selc = document.getElementById('sec')
    var num = Number(document.getElementById('num').value)
    var cont = 0
    var op = ''
    var res = ''

    for(cont = 0;cont<10;cont++){
        var opr = selc.options[0]
        selc.remove(opr)
    }


    for(cont = 1;cont <=10;cont++){
        res = cont * num
        op = document.createElement('option')
        op.textContent= `${num} x ${cont} = ${res}`
        selc.appendChild(op)
    }
}