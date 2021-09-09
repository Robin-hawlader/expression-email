const emailSubmit = () => {
    const inputField = document.getElementById('email-field');
    const inputValue = inputField.value;
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (regex.test(inputValue)) {
        document.getElementById('success').innerText = `valid`;
        document.getElementById('invalid').innerText = '';
        // const p = document.createElement('p');
        // p.classList.add('fst-italic', 'text-success');
        // p.innerText = `your email is valid`;
        // userMessage.appendChild(p);
    }
    else {
        document.getElementById('success').innerText = ``;
        document.getElementById('invalid').innerText = 'not valid';
        // p.classList.add('fst-italic', 'text-danger');
        // p.innerText = `Opps!!! your email is invalid`;
        // userMessage.appendChild(p);
    }
    inputField.value = '';

}