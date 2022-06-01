var sv = {
    fullname:"",
    age:0,
    address:"",
    gender:"",

}
function inputName(e){
    sv.fullname = e.value;
}
function  inputTuoi(e){
    sv.age = e.value;
}
function inputDiachi(e){
    sv.address = e.value;
}
function inputGender(e){
    sv.gender = e.value;
}

function submit(){
    console.log(sv);
}