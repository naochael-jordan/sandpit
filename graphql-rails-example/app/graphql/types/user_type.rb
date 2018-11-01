module Types
  class UserType < Types::BaseObject
    field :id, Integer, null: false
    field :email, String, null: true
  end
end
