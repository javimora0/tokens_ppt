import { login } from './http-user.js';

const botonLogin = document.getElementById('botonLogin');
const mensaje = document.getElementById('mensaje');
document.getElementById('email').value= 'javi@javi.com'
document.getElementById('password').value= 'javi'

clearLocalStorage();

botonLogin.addEventListener('click', () => {
    main()
});

async function main() { 
    var usuario = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    console.log(usuario)
    var respuesta = await login(usuario)
    console.log(respuesta)
    // if (respuesta.success == true) {
    //     setToken(respuesta.data.token)
    //     window.location.href = 'admin.html'
    // }else{
    //     mensaje.textContent = 'Usuario incorrecto'
    // }
}

function setToken(token) { 
    localStorage.setItem('token', token);
}

function clearLocalStorage() { 
    localStorage.clear();
}