import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiStorageService } from './apiStorageService';
import { RequestInterceptor } from '../interceptors/requestInterceptor';

@Injectable()
export class ApiHttpPublicService {

    public resourceServer = ApiStorageService.apiServer;

    constructor(private httpClient: HttpClient,
                private reqInterceptor: RequestInterceptor) {}

    /**
     * Lay danh sach cac quoc gia ve Ma so dien thoai, co, ten, ngon ngu, tien...
     */
    getAllCoutries(){
        return this.httpClient.get('https://restcountries.eu/rest/v2/all')
        .toPromise()
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
    getRandomUser(){

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
        return this.httpClient.get(this.resourceServer+'/db/json-paramters')
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



}