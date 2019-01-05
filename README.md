## usersテーブル

|column        |Type      |Options|
|--------------|----------|-------|
|name          |string    |null: false|
|group_id      |integer   |foreign_key: true|

### Association
- has_many :messages
- has_many :groups, through: :group_users


## groupsテーブル

|column        |Type      |Options|
|--------------|----------|-------|
|name          |string    |null: false|
|user_id       |integer   |foreign_key: true|
|message_id    |integer   |foreign_key: true|

### Association
-has_many :messages
-has_many :users, through: :group_users

## messagesテーブル

|column        |Type      |Options|
|--------------|----------|-------|
|body          |text      |null: false|
|image         |string    |null: false|
|user_id       |integer   |foreign_key: true|
|group_id      |integer   |foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group

## group_userテーブル

|column        |Type      |Options|
|--------------|----------|-------|
|user_id       |integer   |foreign_key: true|
|group_id      |integer   |foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group
