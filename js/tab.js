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



$('.form-select').eq(0).on('input', function(){
    var value = this.value;
    if(value == '셔츠'){
        let shirtsSize = `<option>90</option>
        <option>95</option>`
        $('.form-select').eq(1).html(shirtsSize);
        $('.form-select').eq(1).removeClass('form-hide');
    }else if(value== '모자'){
        $('.form-select').eq(1).addClass('form-hide');
    }else if(value == '바지'){
        let pantsSize = `<option>28</option>
        <option>30</option>`;
        $('.form-select').eq(1).html(pantsSize);
        $('.form-select').eq(1).removeClass('form-hide');
    }
})

