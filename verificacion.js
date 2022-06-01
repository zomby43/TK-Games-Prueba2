function validar(){
    var telefono = document.Formulario.inputTelefono.value
    var nombre = document.Formulario.inputName.value
    var correo = document.Formulario.inputCorreo.value
    var contraseña = document.Formulario.inputContraseña.value
    var rut = document.Formulario.inputRut.value
    if(nombre.length<3){
        alert("Nombre debe Tener 3 o mas caracteres")
        return false;
    }
    if(correo.length<3){
        alert("Correo debe Tener 3 o mas caracteres")
        return false;
    }
    if(contraseña.length<3){
        alert("Contraseña debe tener 3 o mas caracteres")
        return false;
    }
    if (telefono.length<9){
    alert("Telefono debe contener 9 caracteres")
    return false
    }
    if (rut.length<9){
        alert("Rut debe contener 9 caracteres")
        return false
        }
    cadena = "Nombre: "+nombre+"\nCorreo: "+correo+"\nContraseña: "+contraseña+"\nTelefono: "+telefono+"\nRut: "+rut
    alert(cadena)
}