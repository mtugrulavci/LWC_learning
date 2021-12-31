import { LightningElement,wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValuesByRecordType extends LightningElement {
    ratingOptions
    industryOptions
    selectedRating
    selectedIndustry
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT}) // call the  get object the info once recordType is available then we use it
    objectInfo

    @wire (getPicklistValuesByRecordType, {objectApiName:ACCOUNT_OBJECT, 
        recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
        picklistHandler({data, error}){
            if(data){
                console.log(data)
                this.ratingOptions =this.picklistGenerator(data.picklistFieldValues.Rating)
                this.industryOptions=this.picklistGenerator(data.picklistFieldValues.Industry)
            }
            if(error){
                console.error(error)
            }
        }
        picklistGenerator(data){// we are transforming the data the way our combobox uses
            return data.values.map(item=>({'label':item.label,'value':item.value}))
        }
        handleChange(event){
            const {name,value} = event.target
            console.log(name + '==>'+ value)
            if(name==='industry'){
                this.selectedIndustry=value
            }
            if(name==='rating'){
                this.selectedRating=value
            }
            //shorter version is above!!
            //console.log(event.target.name + '==>'+ event.target.value)
            //if(event.target.name === 'industry'){
            //    this.selectedIndustry =event.target.value
            //}
            //if(event.target.name === 'rating'){
             //   this.selectedRating =event.target.value
            }
        
}