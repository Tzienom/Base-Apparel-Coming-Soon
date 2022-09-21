function screenSize() {
    if (window.matchMedia("(max-width: 1099px)").matches) {
        const colText = document.querySelector('.col-1-text');
        const col2 = document.querySelector('.col-2');

        colText.before(col2);
    }
}

screenSize();

const form = document.getElementById('subscribe');
const input = document.getElementById('user-email');
const submitBtn = document.getElementById('submit');

const error = document.querySelector('.error');
const errorImg = document.querySelector('.error-img');

submitBtn.addEventListener('click', () => {
    
    
    if (!input.value.includes('@gmail.com')) {
        
        input.style.border = '2px solid var(--Soft-Red)';
        errorImg.style.visibility = "visible";
                
        error.classList.add('error');
        error.innerHTML = 'Please, provide a valid email.';
        
        form.preventDefault();
    }

    form.submit();
    
});

input.addEventListener('focus', () => {
    
    if (error.classList.contains('error')) {
        input.style.border = "";
        errorImg.style.visibility = "hidden";
        error.classList.remove('error');
        error.innerHTML = "";
    }
});