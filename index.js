import { ApolloServer } from "apollo-server"; 
import AccountfAPI from "./src/dataSources/accountf_api.js";
import AccountAPI from "./src/dataSources/account_api.js";
import AuthAPI from "./src/dataSources/auth_api.js";
import resolvers from "./src/resolvers/index.js";
import typeDefs from "./src/typeDefs/index.js";
import authentication from "./src/utils/authentication.js";

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        accountfAPI: new AccountfAPI(),
        accountAPI: new AccountAPI(),
        authAPI: new AuthAPI()
    })
});

server.listen().then(({url}) => {
    console.log(`Servidor corriendo en ${url}`);
});

