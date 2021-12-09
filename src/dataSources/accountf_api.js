import { RESTDataSource } from "apollo-datasource-rest";
import servers from "../server.js";

class AccountfAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = servers.accountf_api_url
    }

    async accountsf() {
        return await this.get("/api/forex/accounts/all");
    }

    async accountfByUsername(username) {
        return await this.get(`/api/forex/accounts/${username}`);
    }

    async newAccountf(body) {
        return await this.post('/api/forex/accounts/new', body);
    }

    async exchanges() {
        return await this.get("/api/forex/all");
    }

    async exchangeActual() {
        return await this.get(`/api/forex/actual`);
    }

    async newExchange(body) {
        return await this.post('/api/forex/', body);
    }    

    async newTransactionf(body) {
        return await this.post('/api/forex/transactions', body);
    }

    async transactionsfByUsername(username) {
        return await this.get(`api/forex/transactions/user/${username}`);
    }

    async transactionfById(id) {
        return await this.get(`api/forex/transactions/id/${id}`);
    }
}

export default AccountfAPI; 