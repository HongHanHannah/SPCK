const regSignup = document.createElement("div")

const title = document.createElement("h3");
title.innerHTML = "Đăng ký để xem ảnh và video từ bạn bè.";

const emailInput = document.createElement("input")
emailInput.placeholder="email"

const nameInput = document.createElement("input")
nameInput.placeholder="Tên đầy đủ"

const usernameInput = document.createElement("input")
usernameInput.placeholder="Tên người dùng"

const passInput = document.createElement("input")
passInput.type="passwword"
passInput.placeholder ="Mật khẩu"

const p1 = document.createElement("p");
p1.innerHTML = "Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Instagram. Tìm hiểu thêm";

const p2 = document.createElement("p");
p2.innerHTML = "Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư và Chính sách cookie của chúng tôi.";

const submitButton = document.createElement("input")
submitButton.type="button"
submitButton.value="Đăng ký"

regSignup.appendChild(title)
regSignup.appendChild(emailInput)
regSignup.appendChild(nameInput)
regSignup.appendChild(usernameInput)
regSignup.appendChild(passInput)
regSignup.appendChild(p1)
regSignup.appendChild(p2)

const regForm = document.createElement("form");
regForm.appendChild(regSignup);

const regSignnup = document.getElementById("signup")
signup.appendChild(regForm);


