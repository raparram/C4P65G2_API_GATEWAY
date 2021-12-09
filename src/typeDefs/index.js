import accountTypeDefs from "./account_type_defs.js";
import authTypeDefs from "./auth_type_defs.js";
import transactionTypeDefs from "./transaction_type_defs.js";
import accountfTypeDefs from "./accountf_type_defs.js";
import exchangeTypeDefs from "./exchange_defs.js";
import transactionfTypeDefs from "./transactionf_type_defs.js";

const typeDefs = [accountTypeDefs, transactionTypeDefs, authTypeDefs,
                accountfTypeDefs, transactionfTypeDefs, exchangeTypeDefs];

export default typeDefs;