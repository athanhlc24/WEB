function jackpot() {
    var randomNumbers = [];// mảng chứa 6 số ngẫu nhiên
    var ticketNumbers = [];// mảng chứa 6 số ng dùng mua vé
// tạo ngẫu nhiên 6 số từ 0 ->45
    while (randomNumbers.length < 6) {
        var r = Math.random();
        r = r * 45;// muốn có giá trị 45 phải nhân với 46;
        r = parseInt(r);
        if (!randomNumbers.includes(r)) {
            randomNumbers.push(r);
        }
    }
    console.log(randomNumbers);
// yêu cầu nhập 6 số khác nhau từ 0 ->45
    while (ticketNumbers.length < 6) {
        var n = prompt("Nhập số từ 0 -> 45: ");
        n = parseInt(n);
        if (!isNaN(n) && !ticketNumbers.includes(n) && n >= 0 && n <= 45) {
            ticketNumbers.push(n);
        }
    }

    var dem = 0;
    for (var i = 0; i < randomNumbers.length; i++) {
        if (ticketNumbers.includes(randomNumbers[i])) {
            dem++;
        }
    }
//     setTimeout(function (){// gọi là hàm colback đì lây kết quả
// switch (dem){
//     case 6: alert("Chúc mừng bạn đã trúng 100 tỷ");break;
//     case 5: alert("Chúc mừng bạn đã trúng 10 triệu");break;
//     case 4: alert("Chúc mừng bạn đã trúng 300k");break;
//     case 3: alert("Chúc mừng bạn đã trúng 50k");break;
//     default: alert("Chúc bạn may mắn lần sau");
//             }
// },5000);
    var x = 0;
    var xyz = setInterval(function () {// gọi là hàm colback sau 1 giây và chạy vĩnh viễn
        switch (dem) {
            case 6:
                alert("Chúc mừng bạn đã trúng 100 tỷ");
                break;
            case 5:
                alert("Chúc mừng bạn đã trúng 10 triệu");
                break;
            case 4:
                alert("Chúc mừng bạn đã trúng 300k");
                break;
            case 3:
                alert("Chúc mừng bạn đã trúng 50k");
                break;
            default:
                alert("Chúc bạn may mắn lần sau");
        }
        x++;
        if (x == 3) {
            clearInterval(xyz);
        }
    }, 3000);
}
