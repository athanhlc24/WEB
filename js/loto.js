var chiphi = 0;
var doanhthu = 0;
for(var i = 0; i<30;i++){
    // tạo random 27 số nguyên
    var ds = [];
    for(var j= 0 ;j<27;j++) {
        var r = Math.random();
        r= r*100;
        r = parseInt(r);
        ds.push(r);
    }
    // chọn số và đặt tiền
        var luckynumber ;
        do {
       luckynumber = prompt("Ngày"+(i+1)+ "số muốn chơi từ 0->9: ");
       luckynumber = parseInt(luckynumber);
        }while(isNaN(luckynumber) || luckynumber<0 ||luckynumber>99);

        var money ;
        do {
            money = prompt("Nhập số tiền cược: ");
            money = parseInt(money);
        }while(isNaN(money) || money<0 ||money%1000!=0);
    // soi giải thưởng
        var dem =0 ;
        for(var k = 0;k<ds.length;k++){
            if(ds[k] == luckynumber){
                dem++;
            }
        }
        console.log("Hôm nay trúng"+dem+"giải thưởng");
    // thống kê tiền
    chiphi+=money;
    doanhthu +=(dem*(80/23)*money);
}
    // tổng lợi nhuận sau 30 ngày đầu tư
    console.log("Chi phí: "+chiphi+"Doanh thu: "+doanhthu+"lợi nhuận: "+(doanhthu-chiphi));