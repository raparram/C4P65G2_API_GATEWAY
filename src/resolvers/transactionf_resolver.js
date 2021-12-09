import { ApolloError } from "apollo-server-errors";

const transactionfResolver = {
    Query: {
        transactionsfByUsername: async(root, { username }, { dataSources }) => {
            //verificación token
            return await dataSources.accountfAPI.transactionsfByUsername(username);

        },
        transactionfById: async(root, { id }, { dataSources }) => {
            //verificación token
            return await dataSources.accountfAPI.transactionfById(id);

        }
    },
    Mutation: {
        newTransactionf: async(root, args, { dataSources }) => {

            //return await dataSources.accountfAPI.newTransactionf(args);
            if(args.type != "compra" && args.type != "venta"){
                throw new ApolloError("El tipo de la transacción Forex no es ni compra, ni venta", 409);
            }

            const balance_username = await dataSources.accountAPI.accountByUsername(args.username);
            //console.log(balance_username.balance);

            if(args.type == "compra"){
                if (balance_username.balance >= args.originAmount) {
                    console.log("Hay dinero")
                    const nuevosaldo = balance_username.balance - args.originAmount;
                    console.log(nuevosaldo);
                    const accountupdatebyuser = await dataSources.accountAPI.updateAccount({
                        username: args.username, 
                        balance: nuevosaldo
                    });
                    return await dataSources.accountfAPI.newTransactionf(args);
                } else {
                    console.log("NO Hay dinero")
                    throw new ApolloError("Dinero insuficiente en la cuenta", 409);
                }
            }

            if(args.type == "venta"){

                const balance_username = await dataSources.accountAPI.accountByUsername(args.username);

                const transacf_v = await dataSources.accountfAPI.newTransactionf(args);
                console.log(transacf_v.cop2user);

                const nuevosaldo = balance_username.balance + transacf_v.cop2user;
                const accountupdatebyuser = await dataSources.accountAPI.updateAccount({
                        username: args.username, 
                        balance: nuevosaldo
                    });
                return transacf_v;
            }            
        }
    }    
}

export default transactionfResolver;