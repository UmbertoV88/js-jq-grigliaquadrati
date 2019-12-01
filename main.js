$(document).ready(function() {
    // duplichi con un ciclo tanti quadriti,quanti ne ho bisosno
    for (var i = 0; i < 63; i++) {
        $('.container').append('<div class="quadrato"></div>');

    }
    // Al click sulla casella, quella selezionata diventa verde
    // $(".quadrato").click(function(){
    //     $(this).addClass("green");
    // });
    // predisporre la creazione di un numero random nelle  caselle

    // $(".quadrato").each(function(){
    //     $(this).text(randomNumber(1, 64));
    // });


    $(".quadrato").click(function(){
        if (randomNumber(1, 64) % 2 == 1) {
            $(this).addClass("green");
        }else{
            $(this).addClass("red");
            alert("HAI PERSO!!! ")
            location.reload();
        }


    });


});

function randomNumber(min, max){
    return Math.floor(Math.random() * max-min) + min;
}
