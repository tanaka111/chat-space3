$(function(){
  function buildHTML(message) {
    var html = `<div class="group">
                <div class=group-content>
                <ul>
                <li class="group-content__user-name">
                  ${message.name}
                </li>
                <li class="group-content__date"> ${message.time}
                </li>
                </ul>
                </div>
                <div class="message-content">
                  <p class="message-content__detail"> ${message.content}
                  </p>
                  </div>
                </div>`
    return html;
  }

  $('form').on('submit', function(e){
    e.preventDefault();
    var api_url = window.location.pathname;
    var formData = new FormData($(this).get(0));

    $.ajax({
      url: api_url,
      type: "post",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.group').append(html);
      $('.form__message').val('')
      $(".group").animate({scrollTop:$('.group')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
  });
});


