// ****************************************
// ********* FORMULARIOS
// ****************************************

// Sets de Errores y Exito

function setError(input, msj, inputIdentificador, formularioIdentificador) {
  let inputField = input.parentElement;
  let spanAlerta = inputField.querySelector('.form__alert');
  spanAlerta.classList.add('form__alert--active');
  spanAlerta.textContent = msj;
  formularioIdentificador.push(`Error en input ${inputIdentificador}`);
}

function setSuccess(input) {
  let inputField = input.parentElement;
  let spanAlerta = inputField.querySelector('.form__alert');
  spanAlerta.classList.remove('form__alert--active');
}

// Validador de mail

const MAIL_FORMAT = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function mailInvalido(mail) {
  if (MAIL_FORMAT.test(mail)) {
    return false;
  } else {
    return true;
  }
}

// ****************************************
// ********* FORMULARIO CONTACTO
// ****************************************

const FORM_CONTACTO = document.getElementById('form-contacto');
const FORM_CONTACTO_NAME = document.getElementById('form-contacto-name');
const FORM_CONTACTO_MAIL = document.getElementById('form-contacto-mail');
const FORM_CONTACTO_MSJ = document.getElementById('form-contacto-msj');
let erroresContacto = [];

FORM_CONTACTO.addEventListener('submit', (e) => {
  e.preventDefault();
  checkFieldsContacto();
  erroresContacto.length > 0
    ? console.log('hay un error en el formulario contacto')
    : FORM_CONTACTO.submit();
});

function checkFieldsContacto() {
  let inputName = FORM_CONTACTO_NAME;
  let inputMail = FORM_CONTACTO_MAIL;
  let inputMsj = FORM_CONTACTO_MSJ;
  erroresContacto = [];
  if (inputName.value.trim() === '') {
    setError(
      inputName,
      'No olvides colocar tu nombre',
      'contacto-name',
      erroresContacto
    );
  } else if (inputName.value.trim().length < 5) {
    setError(
      inputName,
      'El nombre debe tener más letras',
      'contacto-name',
      erroresContacto
    );
  } else setSuccess(inputName);

  if (inputMail.value.trim() === '') {
    setError(
      inputMail,
      'No olvides colocar un email',
      'contacto-mail',
      erroresContacto
    );
  } else if (mailInvalido(inputMail.value.trim())) {
    setError(inputMail, 'El mail ingresado no es valido');
  } else setSuccess(inputMail);

  if (inputMsj.value.trim() === '') {
    setError(
      inputMsj,
      'No olvides dejar tu mensaje',
      'contacto-msj',
      erroresContacto
    );
  } else setSuccess(inputMsj);

  console.log(erroresContacto);
}

// Toggle de menu

const w = window;
const d = document;
const menubtn = d.getElementById('menu-icon-container');
const menucontainer = d.getElementById('menu__container');

function toggleMenu() {
  menubtn.firstElementChild.classList.toggle('menu-icon--active');
  menucontainer.classList.toggle('menu__container--hide');
}

menubtn.addEventListener('click', (e) => {
  toggleMenu();
});

menucontainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu__item')) {
    toggleMenu();
  }
});
