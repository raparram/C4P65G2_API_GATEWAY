import { gql } from "apollo-server";

const exchangeTypeDefs = gql`
    type Exchange {
        id: String!
        dateCreation: String!
        commissionPercentage: Float!
        usdRate: Float!
        usernameCreator: String!
    }
    extend type Query {
        exchanges: [Exchange]
        exchangeactual: Exchange
    }
    extend type Mutation {
        newExchange(
            commissionPercentage: Float!
            usdRate: Float!
            usernameCreator: String!
        ): Exchange
    }
`;

export default exchangeTypeDefs;