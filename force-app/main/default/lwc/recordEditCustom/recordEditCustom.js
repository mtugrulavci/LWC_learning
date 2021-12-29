import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from  '@salesforce/schema/Account'
export default class RecordEditCustom extends LightningElement {
    objectName= ACCOUNT_OBJECT
    inputValue=''
    handleChange(event){
        this.inputValue = event.target.value

    }
    handleSubmit(event){
        event.preventDefault()
        const inputCmp=this.template.querySelector('lightning-input') //if there would be more than 1 fields on the html then we would use quesrySelectoAll
        const value = inputCmp.value
        if(!value.includes('Australia')){
            inputCmp.setCustomValidity('Account Name must incluce Australia')
        }else{
            inputCmp.setCustomValidity("")
            const fields =event.detail.fields
            fields.Name = value
            //fields.Email =mta@skhdkjsa.ca etc for adding more fields
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity() // error pops up if there is an error which was set on the if stage by setCustomValidity
    }
    successHandler(event){
       const toastEvent = new ShowToastEvent({
            title: 'Account Created',
            message : "Record ID " + event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(toastEvent)

    }
}