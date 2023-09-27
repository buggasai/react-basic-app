const { default: axios } = require("axios");


export class ServerCall {
     static fnGet(url) {
        return axios.get(url);
     }
}