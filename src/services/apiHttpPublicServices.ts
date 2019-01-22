import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiStorageService } from './apiStorageService';
import { RequestInterceptor } from '../interceptors/requestInterceptor';

@Injectable()
export class ApiHttpPublicService {

    resourceServer = ApiStorageService.resourceServer;

    constructor(private httpClient: HttpClient,
                private reqInterceptor: RequestInterceptor //muon thay doi token gui kem thi ghi token moi
                ) {}

    /**
     * Lay danh sach cac quoc gia ve Ma so dien thoai, co, ten, ngon ngu, tien...
     */
    getAllCoutries(){
        return this.httpClient.get('https://restcountries.eu/rest/v2/all')
        .toPromise()                 //kieu chuyen ve promise
        .then(countries=>{
            return countries;
        })
        .catch(err=>{
            throw err;
        })
    }

    /**
     * Lay danh sach user demo phuc vu so lieu demo
     */
    getRandomUser(nRecord: number){
        return this.httpClient.get('https://randomuser.me/api/?results=' + nRecord)
            .map(res => res['results']) //kieu chuyen ve observable
    }

    

    getAllCutomers(){
        return this.httpClient.get(this.resourceServer+'/db/json-customers')
        .toPromise()
        .then(results=>{
            if (results) {
                return results;
            }else{
                throw 'No customer!';
            }
        })
        .catch(err=>{
            throw err;
        })
    }

    getParamters(){
        return this.httpClient.get(this.resourceServer+'/db/json-parameters')
        .toPromise()
        .then(results=>{
            if (results) {
                return results;
            }else{
                throw 'No paramter!';
            }
        })
        .catch(err=>{
            throw err;
        })
    }


    /**
     * truyen len {token:'...'}
     * @param jsonString 
     */
    authorizeFromResource(token){
        this.reqInterceptor.setRequestToken(token); 
        return this.httpClient.post(this.resourceServer + '/auth/authorize-token', JSON.stringify({token: token}))
            .toPromise()
            .then(data => {
                return data; 
            });
    }

}