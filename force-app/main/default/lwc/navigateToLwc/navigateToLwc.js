import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToLwc extends NavigationMixin(LightningElement) {

    navigateToLWC(){
        var defination = {
            componentDef:'c:navigationLwcTarget',
            attributes:  {
                recordId: '3543645764' // pass the data to targeted LWC page- record id is the var in the target lwc which is made global by using api on the target lwc
            }
        }
       this[NavigationMixin.Navigate]({
           type:'standard__webPage',
           attributes:{
               url:'/one/one.app#' +btoa(JSON.stringify(defination))
           }
       }) 
    }

}