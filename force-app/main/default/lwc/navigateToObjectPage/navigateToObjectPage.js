import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {

    navigateToNewContactRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:"Contact",
                actionName:'new'
            }
        })
    }
    navigateToNewAccountRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:"Account",
                actionName:'new'
            }
        })
    }

    navigateToNewRecordWithDefaultValue(){
       const defaultValue =  encodeDefaultFieldValues({
            FirstName:'Zero',
            LastName: 'Hero',
            LeadSource:'Other'
        })
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:"Contact",
                actionName:'new'
            }, 
            state:{
                defaultFieldValues: defaultValue
            }
        })

    }
    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:"Contact",
                actionName:'list'
            },
            state:{
                filterName:'Recent' // it is going to show only recently viewed contacts
            }
        })

    }
    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:"ContentDocument",
                actionName:'home'
            }
        })

    }
}