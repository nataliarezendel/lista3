function enviarDados() {
	var usuario = dados.usuario.value;
	var senha = dados.senha.value;
	var confirmar = dados.confirmar.value;
	if (nome == "") {
		alert("Preencha o campo Usuário!");
		document.dados.usuario.focus();
		return false;
	}
	if (senha.length < 6) {
		alert("A senha não contém o número mínimo de caracteres!");
		document.dados.senha.focus();
		return false;
	}
	if (senha.length > 10) {
		alert("A senha excedeu o número máximo de caracteres!");
		document.dados.senha.focus();
		return false;
	}
	if (senha == "") {
		alert("A senha em branco!");
		document.dados.senha.focus();
		return false;
	}
	if (senha != confirmar) {
		alert("As senhas não são iguais!");
		document.dados.confirmar.focus();
		return false;
	}
	if (confirmar == "") {
		alert("Confirmação de senha vazio!");
		document.dados.confirmar.focus();
		return false;
	}
}