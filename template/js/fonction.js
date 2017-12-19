$(document).ready(function(){
  $('#Btn-Daily').click(function(event){
    event.preventDefault();
    $('.site').css('display','block');
    decaleContainer();
  })
    $('#Btn-Weekly').click(function(event){
    event.preventDefault();
    $('.site').css('display','block');
    decaleContainer();
  })
    $('#Btn-Monthly').click(function(event){
    event.preventDefault();
    $('.site').css('display','block');
    decaleContainer();
  })
    $('#Btn-All').click(function(event){
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

  $('body').append($('<div>').addClass('menuThemes')),
       $('.menuThemes').append($('<ul>').addClass('listHead')),
       $('.listHead').append(
           $('<li>').text('Thèmes'),
           $('<li>').text('Facebook API'),
           $('<li>').text('Import'),
           $('<li>').text('Notifications'),
           $('<li>').text('Share'),
       );
   $('#Buddabtn').click(function(){
          $('#Buddabtn').toggleClass('imgBuddaTop');
          $('.menuThemes').toggleClass('show');
          decaleContainer();
   });
})
