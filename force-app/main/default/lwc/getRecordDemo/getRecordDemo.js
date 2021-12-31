import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name'
import AANUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
export default class GetRecordDemo extends LightningElement {
    @api recordId
    name
    owner 
    AnnualRevenue 
    
    // field type- it only brings to the page indicated fields 
   // @wire(getRecord,{recordId:'$recordId',
 //   fields:[NAME_FIELD,OWNER_NAME_FIELD,AANUAL_REVENUE_FIELD]})

 // layout type brings all the fields
    @wire(getRecord,{recordId:'$recordId',
    layoutTypes:['Full'], modes:['View']})
    ACCOUNThANDLER({data}){
        if(data){
            console.log(data)
            this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
            this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value
            this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value

        }
    }

}  