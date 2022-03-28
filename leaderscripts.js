function displayXML() {
    var txt, parser, xmlDoc;
    txt = "<leaderboard><member><name>Naween Galuge</name><points>10</points></member>"+
    "<member><name>Oshada Ravindu</name><points>8</points></member>"+
    "<member><name>Dinitha Perera</name><points>7</points></member>"+
    "<member><name>Sasindu Madushan</name><points>6</points></member>"+
    "<member><name>Imasha Geemal</name><points>5</points></member>"+
    "<member><name>Kalana Janana</name><points>4</points></member>"+
    "<member><name>Dinuka Gimhana</name><points>3</points></member>"+
    "<member><name>Bajitha Hansaja</name><points>2</points></member>"+
    "<member><name>Janith Nilukshan</name><points>1</points></member>"+
    "<member><name>Janith Kaushan</name><points>0</points></member></leaderboard>";

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(txt,"text/xml");
    for(var i = 0; i < 10; i++){
        document.getElementsByTagName("li")[i+1].innerHTML = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
        document.getElementsByTagName("li")[i+12].innerHTML = xmlDoc.getElementsByTagName("points")[i].childNodes[0].nodeValue;
    }
}

function changeBgColor(getBgColor){
    let body = document.querySelector('body');
    let selectBgColor = getBgColor.value;
    body.style.background = selectBgColor;
}

function changeFontColor(getFontColor){
    let leaderboard = document.querySelector('#Leaderboard');
    let selectFontColor = getFontColor.value;
    leaderboard.style.color = selectFontColor;
}