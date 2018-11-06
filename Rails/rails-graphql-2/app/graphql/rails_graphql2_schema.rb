class RailsGraphql2Schema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
