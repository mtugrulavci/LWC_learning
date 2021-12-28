import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {

    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0030U00001MI55xQAD',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    recordEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0030U00001MI55xQAD',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }
}