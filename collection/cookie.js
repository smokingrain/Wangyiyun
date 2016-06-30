$(document).ready(function () {
  //ruguo cookie中获取到了值   就是记住状态
  if($.cookie('username') != ''){
    $('#uname').val($.cookie('username'))
    $('.frm_checkbox_label').addClass('selected')
    $('#rememberCheck').attr('checked',"checked")
  }else{
    $('#uname').val('')
    $('.frm_checkbox_label').removeClass('selected')
  }
  $(document).on('change', '#rememberCheck', function () {
    if($(this).is(':checked')){
      $.cookie("username", $("#uname").val(), {expires: 7})
      $('.frm_checkbox_label').addClass('selected')
    }else{
      $.cookie("username", '')
      $('.frm_checkbox_label').removeClass('selected')
    }
    
  })
})