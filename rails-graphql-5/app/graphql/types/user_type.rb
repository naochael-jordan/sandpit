module Types
  class UserType < Types::BaseObject
    # field :id, Int, required: true
    # field :email, String, required: true
    field :test_field, String, null: false,
      description: "An example field added by the generator"
  end
end
