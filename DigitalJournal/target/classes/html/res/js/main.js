$(function(){

    $('#form_login').hide();
    $('#form_regist').hide();

    $('#btn_log').click(function(){
        $('#form_login').show();
        $('#div_btns').hide();
    });

    $('#btn_up').click(function(){
        $('#form_regist').show();
        $('#div_btns').hide();
    });

    $('.journal.entry').hover(function(){
        
    })

    function animate (element, animation){
        $(element).addClass('animated ' + animation);
    }
});
