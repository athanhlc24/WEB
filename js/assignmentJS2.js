function loadingWeather() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var currenWeather = JSON.parse(xhttp.responseText);
            var list = currenWeather.list;// đây là mảng dữ liệu
            for(var i = 0;i<list.length;i++){
                var ngaygio = list[i].dt_txt;
                var nhietdo = list[i].main.temp;
                var nd = list[i].weather[0].description;
                var im = list[i].weather[0].icon;
                var li_html = "<li>\n" +
                    "        <h2>"+ngaygio+"</h2>\n" +
                    "        <h2>"+nhietdo+"<sup>0</sup>C</h2>\n" +
                    "        <p>"+nd+"</p>\n" +
                    "        <img src=\"https://openweathermap.org/img/wn/"+im+"@2x.png\">\n" +
                    "    </li>";

                document.getElementById("forecast").innerHTML+= li_html;

            }


        }
    }

    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric", true);
    xhttp.send();
}
loadingWeather();