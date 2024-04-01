let tg = window.Telegram.WebApp;
tg.expand();

var backgrounds = [
  "background: -webkit-linear-gradient(310deg, #4a19dd,#dcf8f0); background: linear-gradient(310deg, #4a19dd,#dcf8f0);",
];

document.addEventListener('DOMContentLoaded', function() {
  tg.MainButton.show();
});


Telegram.WebApp.onEvent("mainButtonClicked", function () {
  try {
    var filter = "";
    
    var category = document.getElementById('categorySelector');
    var lineopen = document.getElementById('lineopencheckbox');
    var coef = document.getElementById('coefcheckbox');
    
    filter = `${category.value}[SEPARATOR]${lineopen.checked}[SEPARATOR]${coef.checked}`

    tg.sendData(filter);
    
  }
  catch (e) {
    // инструкции для обработки ошибок
    alert(e); // передать объект исключения обработчику ошибок
  }
});

