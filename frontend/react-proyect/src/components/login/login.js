import React, { Component } from 'react';
import './login.css';
import store from '../store'



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                email: "",
                pass: ""

            },
            validado: [],
            classInfo: "alert alert-info show",
            classSuccess: "alert alert-info hidden",
            classError: "alert alert-danger hidden"


        }
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    log() {
        store.dispatch({
            type: "LOG_JEFE",
            usuario: this.state.usuario
        })
    }

    handleChange(e) {
        let nombre = e.target.name
        let value = e.target.value
        this.setState(prevState => ({
            usuario: {
                ...prevState.usuario,
                [nombre]: value
            }
        }))
    }


    login() {
            fetch('"http://localhost:3000/auth/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state.usuario)
            })
        .then(response => {
            return response.json();
        })
        .then(responsejson => {
            this.setState({
                validado: responsejson
            }, () => {
                this.isValidado()
                console.log(this.state.validado)


            })

            this.log()
        })
}

isValidado() {

    if (this.state.validado.usuario) {
        localStorage.setItem("usuario", this.state.validado.usuario)
        this.setState({ classSuccess: "alert alert-success show" })
        this.setState({ classInfo: "alert alert-success hidden" })
        this.setState({ classError: "alert alert-success hidden" })
        this.setState({
            usuario: {
                email: this.state.validado.usuario,
                pass: ""
            }
        })

    } else {
        localStorage.removeItem("usuario")
        this.setState({ classSuccess: "alert alert-success hidden" })
        this.setState({ classInfo: "alert alert-success hidden" })
        this.setState({ classError: "alert alert-danger show" })
    }
}

render() {
    return ( <
        div >
        <
        div className = "alert" >
        <
        div className = { this.state.classSuccess } >
        <
        p > < strong > Inicio de Sesion Correctamente. < /strong></p >
        <
        /div> <
        div className = { this.state.classInfo } >
        <
        p > < strong > Digita tu Correo y Contraseña. < /strong></p >
        <
        /div> <
        div className = { this.state.classError } >
        <
        p > < strong > Error de Usuario o Contraseña. < /strong></p >
        <
        /div> < /
        div > <
        div className = "g-form-container" >

        <
        div className = "g-form" >
        <
        div className = "g-form-titulo" >
        <
        p > Login < /p> < /
        div > <
        input type = "email"
        onChange = { this.handleChange.bind(this) }
        placeholder = "Digita Tu Correo Electronico"
        id = "email"
        name = "email"
        aria - label = "Usuario" / >
        <
        input type = "password"
        onChange = { this.handleChange.bind(this) }
        placeholder = "Digita Tu Contraseña"
        id = "pass"
        name = "pass"
        aria - label = "Password" / >
        <
        button onClick = { this.login } > Enviar < /button>

        <
        /div> < /
        div > <
        /div>
    );
}
}
export default Login;








/* const botonLogin = document.getElementById("login");

botonLogin.addEventListener("click", function() {

    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mail: mail,
            password: password
        })
    }).then(function(respuesta) {
        return respuesta.json();
    }).then(function(res) {
        console.log(res);

        if (res.error) {
            alert('Ocurrió un error');
        } else {
            alert('Login Exitoso');
            localStorage.setItem('jwt', res.token);
        }
    });
}); */