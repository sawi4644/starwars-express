const express= require('express')
const app= express()
const PORT= 3000

//making characters- need properties
const characters= [
    {
        name: 'Yoda',
        roll: 'Jedi Master',
        forcePoints: 100000 , 
        age: 900 ,
        avatar:'https://media1.popsugar-assets.com/files/thumbor/LqE3qC_r02vF9FVXJmzsd7JvQT8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/19/913/n/1922283/tmp_AQUwGI_54edbb98a270c952_MSDEMST_EC017.jpg',
        routeName:'yoda',
    },
    {
        name: 'Luke Skywalker',
        roll: 'Jedi Master',
        forcePoints: 100000 , 
        age: 40 ,
        avatar:'https://static.wikia.nocookie.net/star-wars-extended-universe/images/3/3d/LukeSkywalker.png/revision/latest?cb=20200125105040',
        routeName:'lukeskywalker',
    },
    {
        name: 'Princess Leia',
        roll: 'General Princess',
        forcePoints: 100 , 
        age: 40 ,
        avatar:'https://static.wikia.nocookie.net/fictupedia/images/1/1d/Leia-princess-leia-organa-solo-skywalker-9301321-576-1010.jpg/revision/latest/scale-to-width-down/340?cb=20170120065805',
        routeName:'princessleia',
    }
]



//Set up route for homepage
app.get('/',(req,res)=>{
    res.send('May the force be with you!')
})

// make routes with urls to listen on- show all of the character- /api/characters
app.get('/api/characters', (req,res)=>{
res.json(characters)
})

// /api/characters/:routeName
app.get("/api/characters/:routeName", (req,res) =>{
    const targetCharacters= req.params.routeName

    const character= characters.find(character => {
        return  character.routeName === targetCharacters
    })

    res.json(character)
})


app.listen(PORT, () => {
console.log(`Server listening on http://localhost:${PORT}`)
})