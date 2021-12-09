import { gql } from "apollo-server";

const transactionfTypeDefs = gql`
    type Transactionf {
        id: String!
        username: String!
        type: String!
        usdRate: Float!
        originAmount: Float!
        destinationAmount: Float!
        commissionPercentage: Float!
        cop2user: Float!
        cop2bank: Float!
        date: String!
    }

    extend type Query {
        transactionsfByUsername(username: String!): [Transactionf]
        transactionfById(id: String!): Transactionf
    }

    extend type Mutation {
        newTransactionf(
            username: String!
            type: String!
            originAmount: Float!
        ): Transactionf
    }
`;

export default transactionfTypeDefs;