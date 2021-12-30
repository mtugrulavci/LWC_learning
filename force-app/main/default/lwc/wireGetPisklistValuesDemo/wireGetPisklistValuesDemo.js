import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry"
import TYPE_FIELD from "@salesforce/schema/Account.Type"
import ACCOUNT_OBJECT from "@salesforce/schema/Account"
export default class WireGetPisklistValuesDemo extends LightningElement {
    selectedIndustry = ''
    industryOptions =[] // it is used in the combobox on html as oprions
    selectedType=""
    typeOptions =[]
    //get the account object to be able to use recordTypeId dynamically
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo

    //get the data for picklist
    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data,error}){
        if (data){
            console.log(data)
           this.industryOptions= [...this.generatePicklist(data)] // create a compy array
        }
        if(error){
            console.error(error)
        }
    }


    generatePicklist(data){ //creates an exact same format like in the combo box on html
        return data.values.map(item=>({label:item.label,value:item.value}))
    }
    handleChange(event) { // gets the selected industry
        this.selectedIndustry = event.detail.value;
    }

//second picklist for type
    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:TYPE_FIELD})
    typePicklist({data,error}){
        if (data){
            console.log(data)
           this.typeOptions= [...this.generatePicklist(data)] // create a compy array
        }
        if(error){
            console.error(error)
        }
    }
    handleTypeChange(event) { // gets the selected industry
        this.selectedType = event.detail.value;
    }

}