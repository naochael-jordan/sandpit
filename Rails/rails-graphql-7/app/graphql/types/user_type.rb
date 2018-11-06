module Types
  class UserType < Types::BaseObject
    field :id, Integer, null: false
    field :email, String, null: false

    # こんな書き方も出来る
    # field :email_address, String, null: false, hash_key: :email
  end
end
