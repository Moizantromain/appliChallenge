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
    $('#Logo').attr('src', 'img/budda.png');
    $('.multimg').remove();
  })
    $('#Btn-Weekly').on('click',function(event){
    event.preventDefault();
    $('.site').css('display','block');
    weeklyOk = 1;
    decaleContainer();
    $('#Logo').attr('src', 'img/budda.png');
    $('.multimg').remove();
  })
    $('#Btn-Monthly').on('click',function(event){
    event.preventDefault();
    $('.site').css('display','block');
    monthlyOk = 1;
    decaleContainer();
    $('#Logo').attr('src', 'img/budda.png');
    $('.multimg').remove();
  })
    $('#Btn-All').on('click',function(event){
    event.preventDefault();
    $('.site').css('display','block');
    allOk = 1;
    decaleContainer();
    $('#Logo').attr('src', 'img/budda.png');
    $('.multimg').remove();
  })
  //------------------------------------------------------
  //------------------------------------------------------

  function recherche(quoi) {
    console.log(quoi);
    var url = "https://graph.facebook.com/search?";
    var quoi = "";
    quoi = document.getElementById('quoi').value;
    var data_Query = "&q=" + quoi + "&type=page";
    var access_token = "&access_token=437660773298889|371758459896094a60e6c3b878aa947a";
    var url_data = url + data_Query + access_token;

    $.getJSON(url_data, function (result) {
      traiteDonnee(result);
    });
  }

  function traiteDonnee(a) {
    var table = $('<table>').addClass("maClasse");
    var Multimg = $('#Imgli').addClass("Multimg");
    var multimg = $('#imgli').addClass("multimg");
    for (var i = 0; i < a.data.length; i++) {
      console.log(a);
      var li = ($('<li>').addClass("Multimg")).append($('<img>').addClass("multimg").attr('src', 'https://graph.facebook.com/' + a.data[i].id + '/picture/?width=80'));
      var image = $('#Logo').attr('src', 'https://graph.facebook.com/' + a.data[0].id + '/picture/?width=80');
      console.log(image);
      var rangee2 = $('<tr>').addClass("maClasseRangee").text(a.data[i].name);
      Multimg.append(li);
      table.append(rangee2);
    }
    $("#tableIci").append(table);
  }



  $("#AA1").click(function () {
    $('#More').css("display", "block");


  });
  //------------------------------------------------------
  //------------------------------------------------------
  
  $('.A3').on('click',function(event){
    var time = $.now();
    A3Ok = 1;
    event.preventDefault();
    if (dailyOk == 1 && A3Ok == 1){
      $('#Daily div:last-child').before($('<div>').addClass('blockD'+ time));
      $('div.blockD'+time).append('<img id="page-'+time+'">');
      var id = $('#page-' + time);
      id.attr('src', $('#Logo').attr('src')); 
      $('.site').hide();
      reviensContainer();
      dailyOk = 0;
      
    }
  })  
  $('.A3').on('click',function(event){
    var time = $.now();
    A3Ok = 1;
    event.preventDefault();
    if (weeklyOk == 1 && A3Ok == 1){
      $('#Weekly div:last-child').before($('<div>').addClass('blockW' + time));
      $('div.blockW' + time).append('<img id="page-' + time + '">');
      var id = $('#page-' + time);
      id.attr('src', $('#Logo').attr('src'));
      $('.site').hide();
      reviensContainer();
      weeklyOk = 0;
    }
  })
  $('.A3').on('click',function(event){
    var time = $.now();
    A3Ok = 1;
    event.preventDefault();
    if (monthlyOk == 1 && A3Ok == 1){
      $('#Monthly div:last-child').before($('<div>').addClass('blockM' + time));
      $('div.blockM' + time).append('<img id="page-' + time + '">');
      var id = $('#page-' + time);
      id.attr('src', $('#Logo').attr('src'));
      $('.site').hide();
      reviensContainer();
      monthlyOk = 0;
    }
  })
  $('.A3').on('click',function(event){
    var time = $.now();
    A3Ok = 1;
    event.preventDefault();
    if (allOk == 1 && A3Ok == 1){
      $('#Bottom div:last-child').before($('<div>').addClass('blockA' + time));
      $('div.blockA' + time).append('<img id="page-' + time + '">');
      var id = $('#page-' + time);
      id.attr('src', $('#Logo').attr('src'));
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
