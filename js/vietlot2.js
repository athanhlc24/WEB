

function checkResult(){
    var luckyNumbers = [];
    var ips = document.getElementsByClassName("ip");
    for (var i = 0;i< ips.length;i++){
        var n = parseInt(ips[i].value);
        if (isNaN(n) || n < 0 || n > 45) {
            document.getElementById("msg").style.display = "block";
            return;
        }
        luckyNumbers.push(n);
    }
    // for (var i = 1; i<=6;i++) {
    //     var n = parseInt(document.getElementById("n" + i).value);
    //     if (isNaN(n) || n < 0 || n > 45) {
    //         document.getElementById("msg").style.display = "block";
    //         return;
    //     }
    //     luckyNumbers.push(n);
    //
    //
    // }
   // var n1 = parseInt(document.getElementById("n1").value);
   //
   //  if (isNaN(n1)|| n1<0||n1>45){
   //      document.getElementById("msg").style.display ="block";
   //      return;
   //  }else {
   //      luckyNumbers.push(n1);
   //  }
   //
   //  var n2 = parseInt(document.getElementById("n2").value);
   //  if (isNaN(n2)|| n2<0||n2>45){
   //      document.getElementById("msg").style.display ="block";
   //      return;
   //  }else {
   //      luckyNumbers.push(n2);
   //  }
   //
   //  var n3 = parseInt(document.getElementById("n3").value);
   //  if (isNaN(n3)|| n3<0||n3>45){
   //      document.getElementById("msg").style.display ="block";
   //      return;
   //  }else {
   //      luckyNumbers.push(n3);
   //  }
   //
   //  var n4 = parseInt(document.getElementById("n4").value);
   //  if (isNaN(n4)|| n4<0||n4>45){
   //      document.getElementById("msg").style.display ="block";
   //      return;
   //  }else {
   //      luckyNumbers.push(n4);
   //  }
   //
   //  var n5 = parseInt(document.getElementById("n5").value);
   //  if (isNaN(n5)|| n5<0||n5>45){
   //      document.getElementById("msg").style.display ="block";
   //      return;
   //  }else {
   //      luckyNumbers.push(n5);
   //  }
   //  var n6 = parseInt(document.getElementById("n6").value);
   //  if (isNaN(n6)|| n6<0||n6>45){
   //      document.getElementById("msg").style.display ="block";
   //      return;
   //  }else {
   //      luckyNumbers.push(n6);
   //  }
   //  console.log(luckyNumbers);

    // t???o ng???u nhi??n 6 s??? t??? 0 ->45
    var randomNumbers = [];// m???ng ch???a 6 s??? ng???u nhi??n
    while (randomNumbers.length < 6) {
        var r = Math.random();
        r = r * 45;// mu???n c?? gi?? tr??? 45 ph???i nh??n v???i 46;
        r = parseInt(r);
        if (!randomNumbers.includes(r)) {
            randomNumbers.push(r);
        }
    }


    var dem = 0;
    for (var i = 0; i < randomNumbers.length; i++) {
        if (luckyNumbers.includes(randomNumbers[i])) {
            dem++;
        }
    }

    switch (dem){
        case 6: alert("Ch??c m???ng b???n ???? tr??ng 100 t???");break;
        case 5: alert("Ch??c m???ng b???n ???? tr??ng 10 tri???u");break;
        case 4: alert("Ch??c m???ng b???n ???? tr??ng 300k");break;
        case 3: alert("Ch??c m???ng b???n ???? tr??ng 50k");break;
        default: alert("Ch??c b???n may m???n l???n sau");
    }

}

