class Validar {
	constructor(correo) {
		const usuario = document.getElementById("usuario");
		const contraseña = document.getElementById("contraseña");
		if (correo) {
			const correo = document.getElementById("correo");
			this.registrarse(usuario, contraseña, correo);
			usuario.addEventListener("input", () => {
				this.registrarse(usuario, contraseña, correo);
			});
			contraseña.addEventListener("input", () => {
				this.registrarse(usuario, contraseña, correo);
			});
			correo.addEventListener("input", () => {
				this.registrarse(usuario, contraseña, correo);
			});
		} else {
			usuario.addEventListener("input", () => {
				this.registrarse(usuario, contraseña);
			});
			contraseña.addEventListener("input", () => {
				this.registrarse(usuario, contraseña);
			});
		}
	}

	registrarse(usuario, contraseña, correo) {
		const user = usuario.value;
		if (user.length > 10 || user.length < 1) {
            usuario.style.border = "2px solid red"
		} else {
            usuario.style.border = "1px solid #70e1f5"
        }

		const clave = contraseña.value;
		if (clave.length > 10 || clave.length < 1) {
            contraseña.style.border = "2px solid red"
		} else {
            contraseña.style.border = "1px solid #70e1f5"
        }

		const mail = correo.value;
		if (mail.length > 50 || mail.length < 5) {
			correo.style.border = "2px solid red";
		} else {
			let counter = 0;
			for (let i = 0; i < mail.length; i++) {
				const letra = mail[i];
				if (letra === "@") {
					counter++;
				}
			}
			if (counter != 1) {
				correo.style.border = "2px solid red";
			} else {
				console.log(mail.indexOf("@"));
				if (mail.indexOf("@") == mail.length - 1) {
					correo.style.border = "2px solid red";
				} else {
                    if (mail[mail.indexOf("@") +1 ] !== "."){
                        if (mail.indexOf(".") == -1) {
                            correo.style.border = "2px solid red";
                        } else{
                            if (mail.indexOf(".") == mail.length -1 ) {
                                correo.style.border = "2px solid red";
                            } else {
                                correo.style.border = "1px solid #70e1f5"
                            }
                        }
                    } else {
                        correo.style.border = "2px solid red";
                    }
                } 
			}
		}
    }
    iniciarSesion(usuario, contraseña){
        const user = usuario.value;
		if (user.length > 10 || user.length < 1) {
            usuario.style.border = "2px solid red"
		} else {
            usuario.style.border = "1px solid #70e1f5"
        }

		const clave = contraseña.value;
		if (clave.length > 10 || clave.length < 1) {
            contraseña.style.border = "2px solid red"
		} else {
            contraseña.style.border = "1px solid #70e1f5"
        } 
    }
}


