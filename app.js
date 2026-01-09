//7章
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});

 //thisを使用した場合(this不使用の場合と同じ動作)
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

 //this不使用の場合(thisを使用した場合と同じ動作)
// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });
//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });
//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });
//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });







//6章
//マウスクリック
// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });



 //cssによるマウスオーバー、マウスアウトの操作
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });



 //マウスオーバー、マウスアウト基本的な書き方
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });







//5章
//$(function (){
  //確認問題
//  $('.box1').slideDown(2500, function (){
//    $('.box1').css({
//      'background-color': '#0000FF',
//      'width': '200px',
//      'height': '100px'
//    }).slideUp(2500);
//  });
//  $('.box1').hide();

//  $('.box1').show();
//  $('.box1').css({'background-color': '#0000FF'});

//  $('.box1').slideUp(2500);

//  $('.box1').slideDown(2500);

//  $('.box1').css({
//    'background-color': '#0000FF',
//    'height': '100px'
//  });
//});







//4章
//$(document).ready(function(){
//  $('body').html('<h1>Hello jQuery!!</h1>');
//});