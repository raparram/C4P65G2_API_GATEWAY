const exchangeResolver = {
    Query: {
        exchanges: async(root, args, { dataSources }) => {
            // verificación token
            return await dataSources.accountfAPI.exchanges();
        },
        exchangeactual: async(root, { username }, { dataSources }) => {
            // verificación token
            return await dataSources.accountfAPI.exchangeActual();
        }
    },
    Mutation: {
        newExchange: async(root, args, { dataSources }) => {
            return await dataSources.accountfAPI.newExchange(args);
        }
    }
}

export default exchangeResolver;