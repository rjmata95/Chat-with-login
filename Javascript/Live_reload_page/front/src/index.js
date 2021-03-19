$(() => {
    var $main = $('main')
    var $form = $('form')
    var $displayUsername = $('#display-username')
    var $displayComment = $('#display-comment')
    // var a = $( '<h1>', {
    //     style: 'background-color:rgb(0,0,255)',
    //     html: 'Prueba de jQuery'
    // })

    // $main.append(a)
    
    $form.on('submit', (ev) => {
        
        ev.preventDefault()
        
        var $username = $form.find('#username')
        var $password = $form.find('#password')
        var $comment = $form.find('#comment') 

        let username = $username.val().trim()
        let password = $password.val().trim()
        let comment = $comment.val().trim()
        
        if (username === '') {
            $username.attr('class','sign-in-element error')

        } else if (!isEmail(username)) {
            $username.attr('class','sign-in-element error')

        } else {
            $username.attr('class','sign-in-element success')
            $displayUsername.text(username)

        }

        if (password === '') {
            $password.attr('class','sign-in-element error')

        } else {
            $password.attr('class','sign-in-element success')
        }

        if (comment === '') {
            $comment.addClass('error')

        } else {
            $comment.addClass('success')
            $displayComment.text(comment)

        }


    
    })

    // $form.on('click', (ev)=>{
    //     $form.toggleClass('success')
    // })

    
})

const isEmail = function(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


