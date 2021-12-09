import lodash from "lodash";
import accountResolver from "./account_resolver.js";
import authResolver from "./auth_resolver.js";
import transactionResolver from "./transaction_resolver.js";
import accountfResolver from "./accountf_resolver.js";
import exchangeResolver from "./exchange_resolver.js";
import transactionfResolver from "./transactionf_resolver.js";

const resolvers = lodash.merge(accountResolver, transactionResolver, authResolver,
                accountfResolver, transactionfResolver, exchangeResolver);

export default resolvers;