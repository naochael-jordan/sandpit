class RailsGraphql9Schema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
