import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { subscribe,MessageContext, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
   recievedMessage
    @wire(MessageContext)
    context
    subscription
connectedCallback(){
    this.subscribeMessage()
}

subscribeMessage(){
    this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
}
handleMessage(message){
    this.recievedMessage =message.lmsData.value? message.lmsData.value:"No Message published"
}

unsubscribeMessage(){
    unsubscribe(this.subscription)
    this.subscription =null

}
}