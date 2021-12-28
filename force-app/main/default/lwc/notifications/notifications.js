import { LightningElement } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Notifications extends LightningElement {

    ShowToast(title,message,variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'Salesforce',{
                    url:"http://www.salesforce.com",
                    label:"Click here"
                }
            ], 
            mode:'sticky'
        })
        this.dispatchEvent(event)
    }
    toastHandler(){
        this.ShowToast("Success!!","{0} Account Created Succesfully {1}", "success")
    }
    toastHandlerTwo(){
        this.ShowToast("Error!!","Account Creation Failed", "error")
    }
    toastHandlerThree(){
        this.ShowToast("Warning!!","Password should have 12 characters", "warning")
    }
    toastHandlerFour(){
        this.ShowToast("Info!!!","Summer 2022 is available", "info")
    }
}