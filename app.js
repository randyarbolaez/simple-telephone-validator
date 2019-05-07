let input = document.getElementById('input');
let numberValidText = document.getElementById('number-valid-text');
let whyNumberIsntValid = document.getElementById('why-number-isnt-valid');

function checkIfPhoneIsValid(e) {
  e.preventDefault();
  fetch(
    `http://apilayer.net/api/validate?access_key=31144d09b5c116f6aac8f061733e5001&number=${
      input.value
    }`
  )
    .then(res => res.json())
    .then(res => {
      let { valid } = res;
      console.log(valid);
      if (valid) {
        numberValidText.innerHTML = 'Number is Valid!';
        whyNumberIsntValid.innerHTML = null;
      } else {
        numberValidText.innerHTML = "Number isn't Valid!";
        whyNumberIsntValid.innerHTML =
          'Maybe the format is wrong? | Try This Format - <b>(International Code)(Telephone Number)</b>';
      }
    });
}
