import { gql } from "apollo-server";

const accountfTypeDefs = gql`
    type Accountf {
        username: String!
        usdAmount: Float!
        lastChange: String!
    }
    extend type Query {
        accountsf: [Accountf]
        accountfByUsername(username: String!): Accountf
    }
    extend type Mutation {
        newAccountf(
            username: String!
        ): Accountf
    }
`;

export default accountfTypeDefs;