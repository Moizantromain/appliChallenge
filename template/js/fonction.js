$(document).ready(function(){
  var dailyOk
  var weeklyOk
  var monthlyOk
  var allOk


  $('#Btn-Daily').on('click',function(event){
    event.preventDefault();
    $('.site').css('display','block');
    dailyOk = 1;
    decaleContainer();
  })
    $('#Btn-Weekly').on('click',function(event){
    event.preventDefault();
    $('.site').css('display','block');
    weeklyOk = 1;
    decaleContainer();
  })
    $('#Btn-Monthly').on('click',function(event){
    event.preventDefault();
    $('.site').css('display','block');
    monthlyOk = 1;
    decaleContainer();
  })
    $('#Btn-All').on('click',function(event){
    event.preventDefault();
    $('.site').css('display','block');
    allOk = 1;
    decaleContainer();
  })
    
  $('.A3').on('click',function(event){
    A3Ok = 1;
    event.preventDefault();
    if (dailyOk == 1 && A3Ok == 1){
      $('#Daily div:last-child').before($('<div>').addClass('block').append('<img><p>'));
      $('.site').hide();
      reviensContainer();
      dailyOk = 0;
    }
  })  
  $('.A3').on('click',function(event){
    A3Ok = 1;
    event.preventDefault();
    if (weeklyOk == 1 && A3Ok == 1){
      $('#Weekly div:last-child').before($('<div>').addClass('block').append('<img><p>'));
      $('.site').hide();
      reviensContainer();
      weeklyOk = 0;
    }
  })
  $('.A3').on('click',function(event){
    A3Ok = 1;
    event.preventDefault();
    if (monthlyOk == 1 && A3Ok == 1){
      $('#Monthly div:last-child').before($('<div>').addClass('block').append('<img><p>'));
      $('.site').hide();
      reviensContainer();
      monthlyOk = 0;
    }
  })
  $('.A3').on('click',function(event){
    A3Ok = 1;
    event.preventDefault();
    if (allOk == 1 && A3Ok == 1){
      $('#Bottom div:last-child').before($('<div>').addClass('block').append('<img><p>'));
      $('.site').hide();
      reviensContainer();
      allOk = 0;
    }
  })
 
  function decaleContainer(){
    $('#Container').animate({
      'left': '+=93',
      'top': '+=50',
    }, 200, 'linear')
  }
  function reviensContainer(){
    $('#Container').animate({
      'left': '-=93',
      'top': '-=50',
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
   $('#Buddabtn').on('click',function(){
          $('#Buddabtn').toggleClass('imgBuddaTop');
          $('.menuThemes').toggleClass('show');
          decaleContainer();
   });




})
