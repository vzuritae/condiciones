//ejercicio 1

function imagen() {
    let imagen = document.querySelector('.img')

    if (imagen.style.border == '2px solid red') {
        imagen.style.border = 'none'
    }
    else {
        imagen.style.border = '2px solid red'
    }
}

//ejercicio 2

function stickers() {
    let input1 = Number(document.getElementById('input-1').value)
    let input2 = Number(document.getElementById('input-2').value)
    let input3 = Number(document.getElementById('input-3').value)
    let suma = input1 + input2 + input3
    let cantidad = document.querySelector('.resultado-stickers')

    if (input1 < 0 || input2 < 0 || input3 < 0) {
        cantidad.innerHTML = ''
        alert('Ingresa un valor igual o mayor a cero')
    }

    else if (suma <= 10) {
        cantidad.innerHTML = 'Llevas ' + suma + ' stickers' 
    }
    else {
        cantidad.innerHTML = 'Llevas demasiados stickers' 
    }
}

//ejercicio 3

function password() {
    let digito1 = document.getElementById('select-1').value
    let digito2 = document.getElementById('select-2').value
    let digito3 = document.getElementById('select-3').value
    let password = digito1 + digito2 + digito3
    let pass = document.querySelector('.resultado-pass')

    if (password == 911) {
        pass.innerHTML = 'Password 1 correcto'
    }
    else if (password == 714) {
        pass.innerHTML = 'Password 2 correcto'
    }
    else {
        pass.innerHTML = 'Password incorrecto'
    }
}