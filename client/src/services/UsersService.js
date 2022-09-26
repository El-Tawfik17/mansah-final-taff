import axios from 'axios';

export class UsersService {
    static serverUrl = "http://localhost:";


    static createUser(user){
        let dataUrl = '$ {this.serverUrl} ';
        return axios.post(dataUrl, user);
    }

    static createPartner(partner){
        let dataUrl = '$ {this.serverUrl} ';
        return axios.post(dataUrl, partner)
    }

    static createSubscriber(subscriber){
        let dataUrl = '$ {this.serverUrl} ';
        return axios.post(dataUrl, subscriber )
    }
} 

