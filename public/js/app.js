


const weatherform=document.querySelector('form')
const search=document.querySelector('input')
 const messageone=document.querySelector('#msg1')
 const messagetwo=document.querySelector('#msg2')

//  messageone.textContent='Loading....'
 weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
  const location=search.value

messageone.textContent='Loading....'
messagetwo.textContent=''


// const area=document.getElementById(inputloc).value

  fetch('/weather?address='+location).then((response)=>{

    response.json().then((data)=>{
        if(data.error){
            // console.log(data.error)
           messageone.textContent=data.error
        }
        else{
            // console.log(data.loc)
            // console.log(data.forecast)
   messageone.textContent=data.loc
   messagetwo.textContent=data.forecast
        }
   
    })
   
   })
   
})