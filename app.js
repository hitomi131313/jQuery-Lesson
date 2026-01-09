//6章
//マウスクリック
$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});



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