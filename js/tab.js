// $('.tab-button').eq(0).on('click', function(){
//     $('.tab-button').removeClass('orange'); //모든 버튼에 붙은 orange 클래스명 제거
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// })

// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// })

// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// })

var tab_button = $('.tab-button');
let box_length = document.querySelectorAll('.tab-content').length;

// for(let i=0; i<box_length; i++){
//     tab_button.eq(i).on('click', function(){
//         open_tab(i)
//     })
// }



function open_tab(num){
    tab_button.removeClass('orange');
    tab_button.eq(num).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(num).addClass('show');
}
//이벤트 버블링 활용해서 eventlistner 하나만 사용해서 위의 코드 짜기

$('.list').click(function(e){
    // console.log(e.target)
    // if (e.target.dataset.id =='0' ){
    //     open_tab(0)
    // } else if(e.target.dataset.id == "1"){
    //     open_tab(1)
    // }else if(e.target.dataset.id == "2"){
    //     open_tab(2)
    // }
    open_tab(e.target.dataset.id);

})



//상세페이지, array, object

var car2 = {name:'소나타', price: [50000, 3000, 4000]}
// document.querySelector('.car-title').innerHTML = car2.name;
document.querySelector('.car-price').innerHTML = car2['price'][0];

// //select 인풋
// const select = document.getElementById('option1');

// select.addEventListener('change', function(){
//     if(select.options[select.selectedIndex].value == 'shirts'){
//         document.querySelector('#option2').classList.remove('form-hide');

//     }else{
//         document.querySelector('#option2').classList.add('form-hide');
//     }
// })

//서버에서 사이즈 데이터 가져온다고 가정 

var pants = [28,30,32]; //서버에서 가져온 데이터라 가정
var shirts = [95, 100, 105];

//pants 데이터갯수만큼 <option></option> 생성해주세요.



$('.form-select').eq(0).on('input', function(){
    var value = this.value;
    if(value == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        shirts.forEach(function(a){
            $('.form-select').eq(1).append(`<option>${a}</option>`);
        })
    }else if(value== '모자'){
        $('.form-select').eq(1).addClass('form-hide');
    }else if(value == '바지'){
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        pants.forEach((a) => {
            $('.form-select').eq(1).append(`<option>${a}</option>`);
        });
    }
})

