 json.array! @new_messages do |message|
   json.id          message.id
   json.user_id     message.user.id
   json.image       message.image.url
   json.user_name   message.user.name
   json.time        message.created_at
   json.content     message.content
 end
