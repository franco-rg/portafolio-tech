const btn_ok =  document.querySelector('.btn-ok');
const modalConfirm = document.querySelector('.container-modal-ok');
btn_ok.addEventListener('click', ()=>{
    modalConfirm.classList.remove('show');
})

$(document).on("click", "#registrar_contacto", function() {
	const name = document.getElementById('txtnombre').value;
	const email = document.getElementById('txtcorreo').value;
	const message = document.getElementById('txtmensaje').value;

    if (name === "") {
		$("#error_nombre").text("Este campo es requerido.")
	} else {
		$("#error_nombre").text("")
	}
	if (email === "" || email.includes('@') === false || email.includes('.') === false) {
		$("#error_correo").text("Este campo solo acepta formato correo.")
	} else {
		$("#error_correo").text("")
	}
	if (message === "") {
		$("#error_mensaje").text("Este campo tiene un rango de dígitos(250).")
	} else {
		$("#error_mensaje").text("")
	}
	if(name !== "" && email !== "" && (email.includes('@') !== false) && (email.includes('.') !== false)) {
        /* consumer api rest - portfolio digital */
        fetch('https://api-rest-portfolio.herokuapp.com/api/add', {
                method: 'POST',
                body: JSON.stringify({
                    name: $("#txtnombre").val(),
                    email: $("#txtcorreo").val(),
                    message: $("#txtmensaje").val()
                }),
                headers: {
                    "Content-Type": "application/json",
                }
        }).then(response => response.json())
          .then(json => console.log(json));

          /* post send form */
          clean();
          modalContact.classList.toggle('show');
          document.body.classList.toggle('overflow-hidden');
          const conteo = function() {
              setTimeout(function() {
                  modalConfirm.classList.toggle('show')
              }, 1000)
          }
          conteo();
    }
});

/* clean form contact */
function clean() {
	$("#txtnombre").val("");
	$("#txtcorreo").val("");
	$("#txtmensaje").val("")
};

function soloLetras(e) {
	let key = e.keyCode || e.which;
	let teclado = String.fromCharCode(key).toLowerCase();
	
	let letras = " abcdefghijklmnñopqrstuvwxyz";
	let especiales = "8-37-38-46-164";
	var teclado_especial = !1;
	for (var i in especiales) {
		if (key == especiales[i]) {
			teclado_especial = !0;
			break
		}
	}
	if (letras.indexOf(teclado) == -1 && !teclado_especial) {
		return !1
	}
};