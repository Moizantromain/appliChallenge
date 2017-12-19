function recherche(quoi) {
    var url = "https://graph.facebook.com/search?";
    var quoi = "le monde";
    var data_Query = "&q=" + quoi + "&type=page";
    var access_token = "&access_token=437660773298889|371758459896094a60e6c3b878aa947a";
    var url_data = url + data_Query + access_token;

    $.getJSON(url_data, function (result) {

        traiteDonnee(result);
        // $.each(result, function (i, field) {
        //     console.log(field);
        //     $("div").append(field.name + " ");
        // });
    });
}

function traiteDonnee(a) {
    var table = $('<table>').addClass("maClasse");
    for (var i = 0; i < a.data.length; i++) {
        console.log(a);
        var rangee = $('<tr>').addClass("maClasseRangee").text(a.data[i].id);
        var rangee2 = $('<tr>').addClass("maClasseRangee").text(a.data[i].name);
        table.append(rangee);
        table.append(rangee2);
    }
    $("#tableIci").append(table);
}

recherche();