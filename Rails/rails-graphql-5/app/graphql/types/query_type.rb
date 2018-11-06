module Types
  class QueryType < Types::BaseObject
    graphql_name 'Query'
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    # field :test_field, String, null: false,
    #   description: "An example field added by the generator"
    # def test_field
    #   "Hello World!"
    # end

    field :me, Types::UserType do
      description "the current user"
      resolve ->(obj, args, ctx) { User.first }
    end
  end
end
