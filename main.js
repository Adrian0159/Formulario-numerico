const form = document.getElementById("form-deposito");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let num1 = document.getElementById("campo-a");
  let num2 = document.getElementById("campo-b");
  let res = document.getElementById("res");
  let n1 = Number(num1.value);
  let n2 = Number(num2.value);
  let validaForm = false;

  if (n2 > n1) {
    validaForm = true;
  } else {
    validaForm = false;
  }

  if (validaForm == true) {
    res.innerHTML = "Enviado com sucesso";
    res.classList = "acerto";
    num1.value = "";
    num2.value = "";
  } else if (validaForm == false) {
    res.innerHTML = "O Campo B precisa ser maior que o Campo A";
    res.classList = "erro";
  }
});
