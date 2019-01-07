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
        return this.httpClient.get(this.resourceServer+'/excel/customers')
        .toPromise()
        .then(results=>{
            let resultsReturn;
            resultsReturn = results;
            if (resultsReturn&&resultsReturn.success&&resultsReturn.data) {
                return resultsReturn.data;
            }else{
                throw 'No customer!';
            }
        })
        .catch(err=>{
            throw err;
        })
    }



}