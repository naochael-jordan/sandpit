class RailsGraphql7Schema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
