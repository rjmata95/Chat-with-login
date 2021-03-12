alert('hello world')

function load (){
    var submitBtn = document.getElementById("submit-btn");
    var usernameInput = document.getElementById('username')
    var usernameDisplay = document.getElementById('display-username')
    if(submitBtn){
        submitBtn.addEventListener('click', ()=>{
            console.log(usernameInput.value)
         
            // usernameDisplay.innerHTML = usernameInput.value
        })

    }
}




document.addEventListener("DOMContentLoaded", load, false);