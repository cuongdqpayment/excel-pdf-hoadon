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


    /**
     * billCycle = 
     * {
     * bill_cycle:
     * bill_date:
     * invoice_no: 
     * cust_id: 
     * }
     */
    createInvoices(billCycle){
        return this.httpClient.post(this.resourceServer+'/db/create-invoices'
        ,JSON.stringify({
            bill_cycle: billCycle.bill_cycle,
            bill_date: billCycle.bill_date,
            invoice_no: billCycle.invoice_no,
            cust_id: billCycle.cust_id
        }))
        .toPromise()
    }

    /**
     * billCycle = 201901 hoac 201901/R000000001
     */
    getInvoices(billCycle){
        return this.httpClient.get(this.resourceServer+'/db/json-invoices/'+billCycle)
        .toPromise()
        .then(results=>{
            if (results) {
                return results;
            }else{
                throw [];
            }
        })
    }

    /**
     * lay ky cuoc da tao trong csdl
     */
    getBillCycle(){
        return this.httpClient.get(this.resourceServer+'/db/json-bill-cycles')
        .toPromise()
        .then(results=>{
            if (results) {
                return results;
            }else{
                throw [];
            }
        })
    }

    getAllCutomers(){
        return this.httpClient.get(this.resourceServer+'/db/json-customers')
        .toPromise()
        .then(results=>{
            if (results) {
                return results;
            }else{
                throw [];
            }
        })
    }

    getParamters(){
        return this.httpClient.get(this.resourceServer+'/db/json-parameters')
        .toPromise()
        .then(results=>{
            if (results) {
                return results;
            }else{
                throw [];
            }
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