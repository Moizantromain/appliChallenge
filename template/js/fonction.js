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
        $('.themes i').toggleClass('arrowOK');
        decaleContainerLeft();
   });
  $('#BuddabtnTop').on('click', function(){
        $('.menuThemes').toggleClass('show');
        $('.imgBuddaTop').hide();
        $('.imgBudda').show();
        containerOrigin();
    });
    
  $('.themes').on('click', function(){
    $('.themes').toggleClass('show');
    $('.themes i').toggleClass('fa-rotate-180');
    $('.facebook, .import, .notifications, .share').slideToggle(500);
    $('.choixTheme').slideToggle(500);
  });
  $('.facebook').on('click', function(){
    $('.facebook i').toggleClass('fa-rotate-180');
    $('.facebookAPI').slideToggle(500);
    $('.themes, .import, .notifications, .share').slideToggle(500);
  });
  $('.import').on('click', function(){
    $('.import i').toggleClass('fa-rotate-180');
    $('.importSelect').slideToggle(500);
    $('.facebook, .themes, .notifications, .share').slideToggle(500);
  });
  $('.notifications').on('click', function(){
    $('.notifications i').toggleClass('fa-rotate-180');
    $('.notifSelect').slideToggle(500);
    $('.facebook, .import, .themes, .share').slideToggle(500);
  });
  $('.share').on('click', function(){
    $('.share i').toggleClass('fa-rotate-180');
    $('.shareSelect').slideToggle(500);
    $('.facebook, .import, .notifications, .themes').slideToggle(500);
  });

});