import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import {loadScript} from 'lightning/platformResourceLoader'
export default class ThirdPartyFiles extends LightningElement {
    currentDate =""
    isLibLoaded =false
    renderedCallback(){ // we use rendered call back because we want the operation start after the document loaded
        if(this.isLibLoaded){
            return
        } else {
            Promise.all([
                loadScript(this,MOMENT+'/moment/moment.min.js')
            ]).then(()=>{
                //success
                this.setDateOnScreen()
            }).catch(error=>{
                console.log(error)
            })
            this.isLibLoaded=true
        }

    }
        setDateOnScreen(){
            this.currentDate = moment().format('LLLL');
        }
   
}