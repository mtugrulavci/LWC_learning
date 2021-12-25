({
    handleMessage:function(component, message){
        if(message!= null && message.getParam("lmsData")!=null){
            component.set("v.messageRecieved",message.getParam("lmsData").value)
        }
    },
    inputHandler:function (component, event){
        console.log(event.target.value)
        component.set("v.messageValue",event.target.value) // it stores in to messageValue what ever we put into input section
    },
    publishMessage:function(component){ //
        let msg =component.get("v.messageValue") // fetch the value we stored
        let message = { //construct the message structure
            lmsData : { // lmsData is described in the message Channel
                value:msg
            }
        }
        component.find("SampleMessageChannel").publish (message)// pass that message by publish method whgich is available in the message Service
    }
})
