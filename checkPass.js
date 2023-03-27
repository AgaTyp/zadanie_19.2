function passValidation() {
  let password = document.getElementById("password").value;
  let passwordLength = password.length;
  let info = "";
  if (passwordLength < 8) {
  	info += "Za krótkie hasło. Min. 8 znaków";
  }
  if (! /[a-z]/.test(password) ) {
  	info +="<br/>Min. 1 mała litera"
  }
  if (! /[A-Z]/.test(password) ) {
  	info +="<br/>Min. 1 duża litera"
  }
  if (! /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/.test(password) ) {
  	info +="<br/>Min. 1 znak specjalny"
  }
  document.getElementById("info").style.color = "red";
  document.getElementById("info").innerHTML = info;
}

function comparePass() {
	let password = document.getElementById("password").value;
	let passwordRepeated = document.getElementById("passRepeat").value;
    let info = "Hasła różnią się od siebie!";

    if (password === passwordRepeated ) {
    	info = "";
    }
    document.getElementById("info2").style.color = "red";
    document.getElementById("info2").innerHTML = info;
}
