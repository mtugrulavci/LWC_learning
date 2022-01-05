import { LightningElement,wire } from 'lwc';
import getOpportunities from "@salesforce/apex/OpportunityControler.getOpportunities"
export default class ChartWrapper extends LightningElement {
    pieChartLabels=[]
    pieChartData=[]

@wire(getOpportunities)
opportunityHandler({data, error}){
    if(data){
        console.log(data)
        const result = data.reduce((json,val)=>({...json, [val.StageName]:(json[val.StageName]|0)+1}),{})// it will group the stage and sum the numbers for eash stage
        if(Object.keys(result).length){
            this.pieChartLabels= Object.keys(result)
            this.pieChartData = Object.values(result)
        }

    }
    if(error){
        console.error(error)
    }
}
}