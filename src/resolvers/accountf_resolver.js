const accountfResolver = {
    Query: {
        accountsf: async(root, args, { dataSources }) => {
            // verificación token
            return await dataSources.accountfAPI.accountsf();
        },
        accountfByUsername: async(root, { username }, { dataSources }) => {
            // verificación token
            return await dataSources.accountfAPI.accountfByUsername(username);
        }
    },
    Mutation: {
        newAccountf: async(root, args, { dataSources }) => {
            return await dataSources.accountfAPI.newAccountf(args);
        }
    }
}

export default accountfResolver;