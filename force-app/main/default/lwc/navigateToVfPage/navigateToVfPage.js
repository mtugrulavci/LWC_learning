import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToVfPage extends NavigationMixin(LightningElement) {
    navigateToVf(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/navigateVfPage'
            }
        }).then(generatedUrl=>{
            console.log(generatedUrl)
            window.open(generatedUrl)
        })
    }
}