import { LightningElement } from 'lwc';
import findAccount from "@salesforce/apex/AccountControler.findAccount"
export default class ApexImperativeWithParamsDemo extends LightningElement {
    searchKey='';
    accounts
    timer
    searchHandler(event){
        window.clearTimeout(this.timer)
        this.searchKey = event.target.value
        this.timer =  setTimeout(()=>{
        this.callApex() 
        },1000)
        
    }
    callApex(){
    findAccount({searchKey:this.searchKey
    }).then(result=>{
        this.accounts = result
        console.log(result)
    }).catch(error=>{
        console.error(error)
    })}
}