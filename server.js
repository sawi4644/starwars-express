const express= require('express')
const app= express()
const PORT= 3000

//Set up route for homepage
app.get('/',(req,res)=>{
    res.send('May the force be with you!')
})

app.listen(PORT, () => {
console.log(`Server listening on http://localhost:${PORT}`)
})