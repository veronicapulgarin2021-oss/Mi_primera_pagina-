function adivinarNumero() {
    let numero = document.getElementById("numerofavorito").value;

    if (numero==7){
        document.getElementById("resultado").textContent =
                 "¡Acertaste el numero !";
    } else{
        document.getElementById("resultado").textContent =
        "no acertaste. intenta otra vez,";
    }
}