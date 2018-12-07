
// check off spacific todo by clicking
$("li").click(function(){
  // if li is gray we will turn it black
  if($(this).css('color') === 'rgb(128, 128, 128)'){
    $(this).css({
      color: 'black',
      textDecoration: 'none'
    })
  } else {
    $(this).css({
      color: 'gray',
      textDecoration: 'line-through'
    });
  }
});
