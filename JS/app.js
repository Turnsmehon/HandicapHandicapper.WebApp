let tg = window.Telegram.WebApp;
tg.expand();



let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function () {

    var filter = "";
    
    var category = document.getElementById('categorySelector');
    var lineopen = document.getElementById('lineopencheckbox');
    var coef = document.getElementById('coefcheckbox')

    tg.sendData(filter);
});

var backgrounds = [
  "background: -webkit-linear-gradient(310deg, #4a19dd,#dcf8f0); background: linear-gradient(310deg, #4a19dd,#dcf8f0);",
];

// Выбор случайного значения из массива backgrounds

//var randomIndex = Math.floor(Math.random() * (backgrounds.length + 1));
//var randomBackground = backgrounds[randomIndex];
//document.body.style = randomBackground;

//$(document).ready(function() {
//    $('.js-example-basic-single').select2();
//});

