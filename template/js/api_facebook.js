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