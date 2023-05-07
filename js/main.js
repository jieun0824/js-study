document.querySelector('.navbar-toggler').addEventListener('click',function(){
    document.querySelector('.list-group').classList.toggle('show');
})

//jquery
$('#login').on('click', function(){
    $('.black-bg').addClass('show-modal');
})

$('#close').on('click', function(){
    $('.black-bg').removeClass('show-modal');
})


//공백 검사, 폼 전송 막기 
$('form').on('submit', function(e){
  let emailValue = $('#first-value').val();
  let passwordValue = $('#second-value').val()

  if(emailValue == ''){
    alert('이메일을 입력해주세요.');
    e.preventDefault();} //폼 전송 막기
  //이메일 형식 검사 (정규식)
  if(/\S+@\S+\.\S+/.test(emailValue)==false){
    alert('이메일 형식 오류')
    e.preventDefault();}

  if(passwordValue == ''){
    alert('비밀번호를 입력해주세요.');
    e.preventDefault(); //폼 전송 막기
  }
  if(/[A-Z]/.test(passwordValue) == false){
    alert('영어 대문자를 포함시켜주세요.');
    e.preventDefault();
  }
  if(passwordValue.length < 6){
    alert('비밀번호를 6자 이상 입력해주세요.');
    e.preventDefault();}
  });

  //다크모드 버튼
  let count = 0;

  $('#mode-btn').on('click', function(){
    count++;
    if (count%2 == 1){
      $('#mode-btn').html('Light 🔄');
      $('#mode-btn').removeClass('bg-dark');
      $('#mode-btn').addClass('bg-light');
      //$('.bg-dark').attr('class', 'bg-light'); -> 오류 발생
      $('#mode-btn').css('color', 'black');

      $('body').removeClass('light-body');
      $('body').addClass('dark-body');

      document.querySelector('#navbar').className = 'navbar navbar-dark bg-dark';

    }else{
      $('#mode-btn').html('Dark 🔄');
      $('#mode-btn').addClass('bg-dark');
      $('#mode-btn').removeClass('bg-light');
      //$('.bg-light').attr('class', 'bg-dark'); -> 오류 발생
      $('#mode-btn').css('color', 'white');

      $('body').removeClass('dark-body');
      $('body').addClass('light-body');

      document.querySelector('#navbar').className = 'navbar navbar-light bg-light';

    }
  });

  //setTimeout

  let timeout = 5;

  setInterval(function(){
    timeout--;
    if(timeout>0){
    $('#present').html(timeout+'초 이내 구매시 사은품 증정!');
    } else{
      $('#present').hide();
    }
  }, 1000)

  //캐러셀
  $(".slide-2").on('click', function(){
    $(".slide-container").css('transform', 'translateX(-100vw)');
  });
  $(".slide-3").on('click', function(){
    $(".slide-container").css('transform', 'translateX(-200vw)');
  });
  $(".slide-1").on('click', function(){
    $(".slide-container").css('transform', 'translateX(0vw)');
  });

  //이전, 이후 버튼 

  let slide = [0, -100, -200];
  let page = 0;

  $('.next-btn').on('click', function(){
    page++;
    $(".slide-container").css('transform', `translateX(${slide[page%3>=0?page%3:-2/(page%3)]}vw)`);
  })
  $('.prev-btn').on('click', function(){
    page--;
    $(".slide-container").css('transform', `translateX(${slide[page%3>=0?page%3:-2/(page%3)]}vw)`);
  })

  //스크롤 이벤트 추가 
  //숙제 1. 스크롤바를 100px 내리면 로고 폰트사이즈를 작게 만들어라.

  window.addEventListener('scroll', function(){
    if (window.scrollY>=100){
      $('.navbar-brand').addClass('after-scroll');
    } else{
      $('.navbar-brand').removeClass('after-scroll');
    }
  })

  
  //진척상황

  window.addEventListener('scroll', function(){
    let scrollAmount = window.scrollY;
    let htmlAmount = document.querySelector('html').scrollHeight-document.querySelector('html').clientHeight;
    document.querySelector('.page-amount').style.width = `${(scrollAmount/htmlAmount)*100}vw`;
  })




  //숙제2. 회원약관 박스를 거의 끝까지 스크롤하면 alert를 띄워주자. 
  document.querySelector('.lorem').addEventListener('scroll', function(){
    let clientScroll = document.querySelector('.lorem').scrollTop + document.querySelector('.lorem').clientHeight;
    console.log(clientScroll);
    let realScroll = document.querySelector('.lorem').scrollHeight;
    console.log(realScroll);
    if(clientScroll>realScroll-10){
      alert('스크롤 다함'); 
    }           
  })