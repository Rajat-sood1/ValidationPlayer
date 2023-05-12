let user = {
    name: 'John Doe',
    email: 'john@test.com',
    password: '123456'
}


const toaster = document.getElementById('toaster');
const submitButton = document.querySelector('input[type="submit"]');
let state = true;
const email = document.getElementById('email');
const password = document.getElementById('password');
const stateEl = document.getElementById('state');



const check = () => {
    console.log(email.value, password.value)
    if (email.value === user.email && password.value.toString() === user.password) {
        state = false;
        submitButton.style.transform = 'translateX(0)'
        submitButton.style.zIndex = '1122';
    }
    else {
        state = true;
    }
    return true
}

const submit = (e) => {
    e.preventDefault();

    if (!(email.value.includes('@'))) {
        toaster.style.display = 'flex'
        toaster.children[0].children[1].innerHTML = 'Invalid Credentials here';
        stateEl.style.color = 'red';

        return false
    }
    else if (!(email.value === user.email)) {
        toaster.style.display = 'flex'
        stateEl.style.color = 'red';
        toaster.children[0].children[1].innerHTML = `User Name or given Password is not correct!`;

    }
    else if (!(password.value === user.password)) {
        toaster.style.display = 'flex'
        stateEl.style.color = 'red';
        toaster.children[0].children[1].innerHTML = "Password was not correct!";

    }
    else {
        toaster.style.display = 'flex'
        toaster.children[0].children[1].innerHTML = `Welcome ${user.name}`;
        stateEl.style.color = 'green';

    }
    setTimeout(() => toaster.style.display = 'none', 4000);
    return false

}

let form = document.querySelector('form')
form.addEventListener('submit', submit);



function moveSubmit(direction) {

    if (direction === 'right' && state) {
        submitButton.style.transform = 'translateX(100px)';
    } else if (direction === 'left' && state) {
        submitButton.style.transform = 'translateX(-100px)';
    } else {
        submitButton.style.zIndex = '1122';
        submitButton.style.transform = 'translateX(0)'
    }
}

