const emailSubmit = () => {
    const inputField = document.getElementById('email-field');
    const inputValue = inputField.value;
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regex.test(inputValue)) {
        document.getElementById('success').innerText = `valid`;
        document.getElementById('invalid').innerText = '';
    }
    else {
        document.getElementById('success').innerText = ``;
        document.getElementById('invalid').innerText = 'not valid';
    }
    inputField.value = '';

}