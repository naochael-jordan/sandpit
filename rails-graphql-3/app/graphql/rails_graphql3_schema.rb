class RailsGraphql3Schema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
