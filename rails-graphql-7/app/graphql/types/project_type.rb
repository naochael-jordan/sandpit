module Types
  class ProjectType < Types::BaseObject
    field :id, Integer, null: false
    field :title, String, null: false, resolve: ->(obj, args, ctx) { obj.user.email.split('@')[0] + '-' + obj.title }

    field :user, Types::UserType, null: false
  end
end
