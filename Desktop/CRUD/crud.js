const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');
const uName = document.querySelector('#uName');
const mail = document.querySelector('#mail');
const pWord = document.querySelector('#pWord');
const sex = document.querySelector('#sex');
const age = document.querySelector('#age');
const logUser = document.querySelector('#logUser');
const logPass = document.querySelector('#logPass');

const sForm = document.querySelector('#sForm');

sForm.addEventListener('submit', signUp)

function signUp(e) {
  let pDetails = {
    'first Name': fName.value,
    'last Name': lName.value,
    'user Name': uName.value,
    email: mail.value,
    password: pWord.value,
    sex: sex.value,
    age: age.value
  }

  let detailsArr = [];
  if (localStorage.getItem('details') == null) {
    detailsArr.push(pDetails);
    localStorage.setItem('details', JSON.stringify(detailsArr))
  } else {
    detailsArr = JSON.parse(localStorage.getItem('details'));
    detailsArr.push(pDetails);
    localStorage.setItem('details', JSON.stringify(detailsArr))
  }

  location.replace('login.html');
  e.preventDefault()
}

function login() {
 mail.value;
 password.value;

 let savedData = JSON.parse(localStorage.getItem('details'));

 let filterArr = savedData.filter(function(){
   
 })
 if(){
   location.replace('crud.html')
 }else{
   alert('Your details are not correct')
 }
}