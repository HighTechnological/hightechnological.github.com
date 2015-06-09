$('.keyboard li').on('click',function(){
  var input = $('input'),
      key = $(this).text();
  input.val(input.val() + key);
});
$('.delete').on('click',function(){
  $('input').val('');
});
$('.space').on('click',function(){
  $('input').val($('input').val() + ' ');
});