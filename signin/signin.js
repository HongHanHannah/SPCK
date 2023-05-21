const regSignin = document.createElement("div")

const emailInput = document.createElement("input")
emailInput.placeholder="email"

const passInput = document.createElement("input")
passInput.type="passwword"
passInput.placeholder ="Mật khẩu"

const submitButton = document.createElement("input")
submitButton.type="button"
submitButton.value="Đăng nhập"


regSignin.appendChild(emailInput)
regSignin.appendChild(passInput)



const regFormm = document.createElement("form");
regFormm.appendChild(regSignin);

const regSignnin = document.getElementById("signin")
signin.appendChild(regFormm);

