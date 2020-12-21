var  a = prompt("Введіть довжину гіпотенузи");
var b = prompt("Введіть довжину катета");
var c;

function ifFalse(d) {
	alert(`${this.String(d)} трикутника не може бути <= 0!`);
	document.location.reload();
}

function ifTrue () {
	c = Math.sqrt((a*a)-(b*b));
}

	if (a>0) { 
		ifTrue ()
	} else ifFalse ("Гіпотенуза");
	if(b>0) { 
		ifTrue ()
	} else ifFalse ("Катет");

	if (a!=b && c > 0){
	document.write("Гіпотенуза = "+a+";"+"<br/>");
	document.write("Катет = "+b+";"+"<br/>");
	document.write("Довжина іншого катета становить: "+c+".");
} else ifFalse ("Шуканий катет");
