import { LightningElement,api } from 'lwc';
import chartJs from '@salesforce/resourceUrl/chartJs'
import {loadScript} from 'lightning/platformResourceLoader'
export default class Charts extends LightningElement {
    ischartJsInitialized
    chart
    @api chartData
    @api type
    @api chartHeading
    @api chartLabels


renderedCallback(){
    if (this.ischartJsInitialized){
        return;
    }
    loadScript(this,chartJs+'/chartJs/Chart.js').then(()=>{
        console.log('loaded successfully!')
        this.ischartJsInitialized=true
        this.loadCharts()
    } ).catch(error=>{
            console.error(error)
        })
}
    loadCharts(){
        window.Chart.platform.disableCSSInjection =true // this is only for chart lib - no need to do for other libs
        const canvas=document.createElement('canvas')  // it will create a <canvas></canvas> on html
        this.template.querySelector('div.chart').appendChild(canvas)
        const ctx =canvas.getContext('2d')
        this.chart = new window.Chart(ctx, this.config())
            }
    config(){
        return {
            type: this.type,
            data: {
                labels: this.chartLabels?this.chartLabels:[],
                datasets: [{
                    label: this.chartHeading,
                    data: this.chartData? this.chartData:[],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(30, 204, 148, 0.8)',
                        'rgba(130, 204, 148, 0.8)'
                    ],
                   
                    borderWidth: 1
                }]
            },
            options: {
                responsive:true,
                legend:{
                    position:'right'
                },
             animation :{
                 animateScale:true,
                 animateRotate:true
             }  
            }
        }
    }
}