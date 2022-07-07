const button = document.querySelector('button');
button.disabled = true;
button.style.background = 'rgba(255, 0, 46, 0.21)';

document.querySelector('#password-user').addEventListener('input', function(event){
    let myPassword  = document.querySelector('#password-user').value;
    let myUser = document.querySelector('#input-user').value
    if( myPassword.length >= 3 && myUser){
        document.querySelector('button').disabled = false;
        button.style.background = '#FF002E';
        button.style.cursor = 'pointer';
        
        

    }else{
        document.querySelector('button').disabled = true;
        button.style.background = 'rgba(255, 0, 46, 0.21)';
        

    }
})

