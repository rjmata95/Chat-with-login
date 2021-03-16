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
        
        let username = $form.find('#username').val()
        let comment = $form.find('#comment').val()
        
        $displayUsername.text(username)
        $displayComment.text(comment)

    
    })

    
})


