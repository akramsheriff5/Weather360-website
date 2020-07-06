const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYWtyYW1zaGVyaWZmIiwiYSI6ImNrYmkxcHFxMjBheGUyem5yMjVkZW9nYW0ifQ.Z-eyRIKYEcmpFQS2yTpu-g&limit=1'
request({url,json:true},(error,{body})=>{
    if(error){
        callback('unable to connect',undefined)
    }
    else if(body.features.length===0){
         callback('invalid input',undefined)
    }else{
     callback(null,{
          lat:body.features[0].center[1],
          long:body.features[0].center[0],
          loc:body.features[0].place_name
        
          
        })

        
    }
    
})
    }
 module.exports=geocode

// geocode('france',(error,data)=>{
//      console.log('error  ',error)
// console.log('data',data)
// })