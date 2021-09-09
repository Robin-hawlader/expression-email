const emailSubmit = () => {
    const inputField = document.getElementById('email-field');
    const inputValue = inputField.value;
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regex.test(inputValue)) {
        document.getElementById('success').innerText = `your email is valid.`;
        document.getElementById('invalid').innerText = '';
        document.getElementById('empty-input').innerText = '';
    }
    else if (inputValue === '') {
        const emptyInput = document.getElementById('empty-input');
        emptyInput.innerText = `Please put an email`;
        document.getElementById('success').innerText = ``;
        document.getElementById('invalid').innerText = '';
    }
    else {
        document.getElementById('success').innerText = ``;
        document.getElementById('empty-input').innerText = '';
        document.getElementById('invalid').innerText = 'Opss!! your email is notvalid';
    }
    inputField.value = '';

}