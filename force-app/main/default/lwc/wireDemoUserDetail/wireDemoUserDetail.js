import { LightningElement,wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId =Id
    //0050U000007Fe0DQAS
   // @wire(adapter,{adapterConfig})
   // propertyorfunction
   userDetail
   // doing it as function
   @wire(getRecord,{recordId:'0050U000007Fe0DQAS', fields})
    userDetailHandler({data,error}){ 
        if (data){ // CHECKS IF DATA IS THERE
            this.userDetail = data.fields  // ASSIGNS ALL THE FIELDS TO THE userDetail field
        }
        if(error){
            console.log(error)
        }
        //alternative to  userDetailHandler({data,error})
       // let data =response.data 
        //let error =response.error
    }
    // same thing done as property
    @wire(getRecord,{recordId:'0050U000007Fe0DQAS', fields})
    userDetailProperty
}