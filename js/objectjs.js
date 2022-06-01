var obj =  {
    name:"Nguyễn Văn An",// thuộc tính
    age:18,
    telephone: ["129390","01239012"],
    girlFriend:{// một obj khác
        name: "Nguyễn thị hường",
        age: 16,
        eat: function (){
            console.log("Eat...");
        }
    },
    run: function (){// hành vi
        console.log(this.name+" running...");// this là đối tượng ngầm định bên trong của obj
    }

}
obj.name = "Nguyễn Thị Hà";//1 ngày nào đó ông này đổi tên
console.log(obj.name);
obj.run();
obj.name = "Trần Văn Thành";
obj.run();
obj.girlFriend.eat();
console.log(obj.girlFriend.name);
console.log(obj.telephone[0]);
