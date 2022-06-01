//Biến và kiểu dữ liệu
// biến là 1 kí hiệu đại diện cho 1 ô nhớ
var x;// x là 1 giá trị có thể số thành string thành array
x = 10;
var y;
y = "Hello world";


x = "T2203E";

y = 20;
// giả sử làm 1 loạt thao tác
console.log(x);// kiểm tra  giá trị x là gì?
console.log(y);
var z = x+y;
var t = y+x;
y = y+10;
console.log(z);
console.log(t);
console.log(y);

console.log("y= "+y);// đây là biểu thức cộng chuỗi vs 1 số
var k = "15";
console.log(k+10);// log k có tác dụng vs ng dùng

for(var i = 0;i<10;i++){
    console.log("i = "+i);
}


var arr = [];// là giá của biến ở trong mảng
arr[0] = 20;
arr[1] = "hello";
arr[2] = true;


arr[3] = [1,2,3,4];
arr[3] [4] = [5,3,1];


var arr2 = [];// mảng k giới hạn kích thước
for(var i = 0;i<20;i++){
    arr2[i] = i*i+1;
}
arr2[arr2.length] = 1001;


for(var i =0;i<10;i++){
    arr2.push(1001*i+1001);// push thêm phần tử vào mảng
}


//tiếp đến hàm
tinhTong(5,7);
tinhTong("xin chao",8)
function  tinhTong(a,b){
    //return a+b;
    console.log(a+b);
}
var giaiThua = function(n){ // biến giai thừa có giá trị là 1 hàm
    var gt = 1;
    for(var i = 1; i<n;i++){
        gt = gt*1;
    }
     return gt;
    //console.log("GT: "+gt);

}
//giaiThua(7)
var g = giaiThua(7) +100;

//cách viết mới Arrone Function
var nhapMang = (n)=>{// xử lí mảng liên hoàn
    var arr = [];
    for(var i = 0; i<n;i++){
        arr.push(i*i+1);
    }
    return arr;
}
var arr3 = nhapMang(10);
console.log(arr3);

///// các hàm tiếp
//alert("Thông điệp cảnh báo");//void
//confirm("Hỏi người dùng 1 câu hỏi");// boolean
//var k = confirm("ádasdsad");
//console.log("k = "+k);
//prompt("Bạn bao nhiêu tuổi");// string
// var year = prompt("Bạn bao nhiêu tuổi: ");
// console.log(year);
// year = parseInt(year);// chuyển string -> number one
// console.log("Sau khi thêm 2 tuổi: "+(year+2));

//kiểm tra xem hàm trên có phải NaN k

 var p = "abc15";
 var q = "15abc";
 p = parseInt(p);// NaN
 q = parseInt(q);//15
// isNaN -> true/false (x==NaN)
console.log("Kiểm tra NaN của p:" +isNaN(p));
 console.log("Kiểm tra NaN của q:" +isNaN(q));

// bắt ng dùng nhập 1 số nguyên dương
// do {
//     var sn ;
//     sn = prompt("Nhập 1 số nguyên dương: ");
//     sn = parseInt(sn);
// }while(isNaN(sn) || sn<0 || r !=sn);
// console.log(sn);
// // sinh ra 1 số ngẫu nhiên
// var r = Math.random();// sinh ra số ngẫu nhiên 0<r<1
// r = r*100;// 0<r<100;
// r = parseInt(r);

