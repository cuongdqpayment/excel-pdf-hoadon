import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiStorageService } from './apiStorageService';
import { RequestInterceptor } from '../interceptors/requestInterceptor';

@Injectable()
export class ApiResourceService {

    resourceServer = ApiStorageService.resourceServer;
    token:any;

    constructor(private httpClient: HttpClient,
                private reqInterceptor: RequestInterceptor //muon thay doi token gui kem thi ghi token moi
                ) {}


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
        this.reqInterceptor.setRequestToken(token); //neu thanh cong thi cac phien sau se gan them bear
        return this.httpClient.post(this.resourceServer + '/auth/authorize-token', JSON.stringify({check: true}))
            .toPromise()
            .then(data => {
                this.token = token;
                return data; 
            })
            .catch(err=>{
                this.token = null;
                this.reqInterceptor.setRequestToken(null); 
                throw err;
            });
    }

}