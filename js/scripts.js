$(document).ready(function(){
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }                
    });

    $('#login').click(function(){
        $('#loginModal').modal('show');
        $('#modal').modal('focus');
        if ($('#closeLogin').click(function(){
            $('#loginModal').modal('hide');
        }));
        if ($('#cancelLogin').click(function(){
            $('#loginModal').modal('hide');
        }));                  
    });

    $('#reserveButton').click(function(){
        console.log('Made it to reservations!');
        $('#reserveModal').modal('show');
        $('#modal').modal('focus');
        if ($('#closeReserve').click(function(){
            $('#reserveModal').modal('hide');
        }));
        if ($('#cancelReserve').click(function(e){
            e.preventDefault();                         //Prevents sumbitting the form (Default Action) when clicking 'Cancel'
            $('#reserveModal').modal('hide');
        }));                  
    });
});