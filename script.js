$( document ).ready(function() {
    console.log( "ready!" );
    $( 'p' ).click(function(){
        $(this).hide();
        });
    $('button').click(function(){
        $('p').show();
    });
});

