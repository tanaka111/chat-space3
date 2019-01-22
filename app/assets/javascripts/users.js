$(function(){

 var user_list = $("#user-search-result");

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
  "<p class="chat-group-user__name">${user.name}</p>"
  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
</div>`
  user_list.append(html);
  }

function appendNoUser(user) {
  var html = `<li>
                  <div class='#user-search-result'>${ user }</div>
                </li>`
  user_list.append(html);
}

  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
  // console.log(input)

  if (input.length !== 0){
    $.ajax({
      type: 'GET',
      url: "/users",
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      $("#user-search-result").empty();
     // {
        users.forEach(function(user){
          appendUser(user);
        });
      })
      // else {
      //   appendNoUser("該当なし");
      //   console.log(users)
      // }

    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  }
  });

    var user_add = $("#add");
    function appendAdd(add_id,add_name) {
      var html = `<div class= "chat-group-form__field--right">
      <div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
  <input name='group[user_ids][]' type='hidden' value="${add_id}">
  "<p class='chat-group-user__name'>${add_name}</p>"
  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
</div>
</div>`
  user_add.append(html);
  console.log(user_add);
    }


   $("#user-search-result").on("click",".user-search-add",function(){
       var add_id = $(this).attr("data-user-id");
       var add_name = $(this).attr("data-user-name");
       console.log(add_id);
       console.log(add_name);
       appendAdd(add_id,add_name);
       $(this).parent().remove();


   })

   $("#add").on("click",".user-search-remove",function(){
      $(this).parent().remove();
      console.log(this);
   })
});


