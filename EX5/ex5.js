function enviarDados() {
	var usuario = dados.usuario.value;
	var senha = dados.senha.value;
	var confirmar = dados.confirmar.value;
	if (nome == "") {
		alert("Preencha o campo Usu�rio!");
		document.dados.usuario.focus();
		return false;
	}
	if (senha.length < 6) {
		alert("A senha n�o cont�m o n�mero m�nimo de caracteres!");
		document.dados.senha.focus();
		return false;
	}
	if (senha.length > 10) {
		alert("A senha excedeu o n�mero m�ximo de caracteres!");
		document.dados.senha.focus();
		return false;
	}
	if (senha == "") {
		alert("A senha em branco!");
		document.dados.senha.focus();
		return false;
	}
	if (senha != confirmar) {
		alert("As senhas n�o s�o iguais!");
		document.dados.confirmar.focus();
		return false;
	}
	if (confirmar == "") {
		alert("Confirma��o de senha vazio!");
		document.dados.confirmar.focus();
		return false;
	}
}