$(document).ready(function(){

  $('#Btn-Daily').on('click', function(event){
    event.preventDefault();
    $('.site').css('display','block');
    decaleContainer();
  })
    $('#Btn-Weekly').on('click', function(event){
    event.preventDefault();
    $('.site').css('display','block');
    decaleContainer();
  })
    $('#Btn-Monthly').on('click', function(event){
    event.preventDefault();
    $('.site').css('display','block');
    decaleContainer();
  })
    $('#Btn-All').on('click', function(event){
    event.preventDefault();
    $('.site').css('display','block');
    decaleContainer();
  })

  function decaleContainer(){
  $('#Container').animate({
    'left': '+=93',
    'top': '+=50',
  }, 200, 'linear')
  } 
  function decaleContainerLeft(){
    $('#Container').animate({
      'left': '+=93',
    }, 200, 'linear')
    }
  function containerOrigin(){
        $('#Container').animate({
          'left': '-=93',
         }, 200, 'linear')
  }   
  $('#Buddabtn').on('click', function(){
        $('.menuThemes').toggleClass('show');
        $('.imgBuddaTop').show();
        $('.imgBudda').hide();
        decaleContainerLeft();
   });
  $('#BuddabtnTop').on('click', function(){
        $('.menuThemes').toggleClass('show');
        $('.imgBuddaTop').hide();
        $('.imgBudda').show();
        containerOrigin();
    });
    
  $('.themes').on('click', function(){
        menu();
});


        function menu(){
        $('.facebook, .import, .notifications, .share').hide();
        }

});