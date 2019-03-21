function palindromo(box) {
	var box = dados.box.value;
	x = box.split("").reverse().join("");
	if (x == box) {
		return alert(box + " É um palíndromo!");
            } else {
		return alert(box + " Não é um palíndromo!");
	}
}