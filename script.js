document.getElementById('submit-button').addEventListener('click',function() 
{
    // console.log('button clicked');
    let userEmail = document.getElementById('user-email').value;
    // console.log(userEmail);
    let userPassword = document.getElementById('user-password').value;
    // if (userEmail == 'mahmudulhasanw3b@gmail.com' & userPassword == 'admin123')
    if(userEmail == 'mahmudulhasanw3b@gmail.com' & userPassword == 'admin123')
    {
        console.log('Valid User');
    }
    else
    {
        console.log('Invalid User');
    }


})