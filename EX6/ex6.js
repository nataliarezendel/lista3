function palindromo(box) {
	var box = dados.box.value;
	x = box.split("").reverse().join("");
	if (x == box) {
		return alert(box + " � um pal�ndromo!");
            } else {
		return alert(box + " N�o � um pal�ndromo!");
	}
}