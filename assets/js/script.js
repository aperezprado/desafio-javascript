function calculaTotal(){
    //Inputs
    cantidad = document.getElementById('cantidad').value;
    color = document.getElementById('color').value;
    monto = 400000;

    //Elementos a cambiar
    spnCantidad = document.getElementById("cant");
    spnValor = document.getElementById( "monto" );
    spnColor = document.getElementById( "color-laptop" );

    //Validación
    if(cantidad > 0){
        total = cantidad * monto;
        if(color == ''){
            color = 'black';
        }
        spnCantidad.innerHTML = cantidad;
        spnColor.style.backgroundColor = color;
        spnValor.innerHTML = total;   
    }
    else {
        alert('Debe indicar una cantidad de productos para continuar');
    }
}