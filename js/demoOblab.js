var sv = {
    ten: "Trần Văn Thành",
    tuoi: 3,
    diaChi:"Bôn Ba",
    sdt: "0329226456",
    lopHoc: {
        tenLop: "T2203E",
        phongHoc: "B16",

    },
    nhom: {
        tenNhom:"nhom-3",
        danhSachThanhVien:[
            {
                ten:"Hoàng",
                sdt:"2093402394",
            },
            {
                ten:"Trang",
                sdt:"42034902394",
            }
        ]


    }
}
//console.log(sv.nhom.danhSachThanhVien[0].ten);
console.log("Danh sách thành viên");
for(var i = 0; i<sv.nhom.danhSachThanhVien.length;i++){
    console.log(sv.nhom.danhSachThanhVien[i].ten);
    console.log(sv.nhom.danhSachThanhVien[i].sdt);
}
