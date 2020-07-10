
const request = require('request')

const forecast=(lat,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=6d99b0ecd7cad5348bf5963d4175a336&query='+lat+','+long+''
    request({url,json:true},(error,{body})=>{
        if (error)
        {
            callback('unable to connect')
        }else if(body.error){
        callback('cannot able to find location',undefined)
        }else{
            callback(undefined,'Current Temperature is '+body.current.temperature+'\n.    But it Feels Like '+body.current.feelslike)
        }
    })
}
 module.exports=forecast

// forecast(21.4225,39.82611,(error,data)=>{
//     console.log('error',error)
//     console.log('data',data)
// })








