class RailsGraphql8Schema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
