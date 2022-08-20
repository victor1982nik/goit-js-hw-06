const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', OnFormSubmit)

function OnFormSubmit(event) {
    event.preventDefault();

    const { currentTarget } = event;
    const { email, password } = currentTarget;

    if (email.value === '' || password.value === '') {
        return alert("Логин, пароль не может быть пустой строкой");
    }
        
    const user = {
        email: email.value,
        password: password.value,
    };
        
    currentTarget.reset();
    console.log(user);
   // return user;
}


