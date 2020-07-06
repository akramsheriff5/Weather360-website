const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/gcode')
const forecast=require('./utils/forecast')


// define lfor express conf
const pathway=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../template/views')
const partialspath=path.join(__dirname,'../template/partials')

const app=express()
const port=process.env.PORT||8000
// setup handelbar engine and view location
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialspath)
// setup static directory to serve
app.use(express.static(pathway))

app.get('',(req,res)=>{
    res.render('index',{
        title:'WEATHER 360',
        name:'akram sheriff'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'akram sheriff'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'complaints'
        
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send({
            error:'Address is empty please provide an address'
        })
    }
    geocode(req.query.address,(error,{lat,long,loc}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(lat,long,(error,forecastdata)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastdata,
                loc,
                address:req.query.address
            })

            
        })
    })
})
//     res.send([{
//         currect:32
//     },{
//         feels_like:37
//     },{
//         address:req.query.address
//     }])
// })

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'Error',
        name:'Akram',
        errmsg:'help artical not found'
             })
             })
 app.get('*',(req,res)=>{
     res.render('404',{
title:'Error',
name:'Akram',
errmsg:'page not found!'
     })
     })
app.listen(port,()=>{
    console.log('server is up port on '+port)
})
