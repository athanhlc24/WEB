function jackpot(){
    var randomNumbers = [];
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
}
