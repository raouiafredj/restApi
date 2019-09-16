const express=require('express')
const {MongoClient,ObjectID}=require('mongodb')
const bodyParser= require('body-parser')
const assert = require('assert')
const cors = require('cors')

const app= express()


app.use(cors())
app.use(bodyParser.json())
const mongo_url='mongodb://localhost:27017'
const dataBase="first-api"

MongoClient.connect(mongo_url,{ useNewUrlParser: true },
    (err,client)=>{

    assert.equal(err,null,'database cnx failed')
    const db = client.db(dataBase)
   
  //ajouter nouveau contact
    app.post('/new_contact',(req,res)=>{


        let newContact=req.body
        db.collection('contact').insertOne(newContact,(err,data)=>{

            if(err) res.send('can add contact')
            else res.send(data)


        })

    })

        //get contact

app.get('/get_contact',(req,res)=>{


    db.collection('contact').find().toArray((err,data)=>{

        if(err) res.send('cant fetch contact')
        else res.send(data)
    })

})

//get contact par id

app.get('/contact/:id',(req,res)=>{


    let searchContactId=ObjectID(req.params.id)
    db.collection('contact').findOne({_id:searchContactId},(err,data)=>{

        if(err) res.send('cant fetch contact')
        else res.send(data)
    })


})


// modifier contact
app.put('/modify_contact/:id',(req,res)=>{

    let id=ObjectID(req.params.id)
    let modifiedContact=req.body
    db.collection('contact').updateOne({_id:id},
      { $set :{...modifiedContact}}  ,
        (err,data)=>{


        if(err) res.send('cant modify contact')
        else res.send('contact was modified')


    })




})
    


// supprimer contact
app.delete('/delete_contact/:id',(req,res)=>{
let contactToRemoveId=ObjectID(req.params.id)
db.collection('contact').findOneAndDelete({_id:contactToRemoveId},(err,data)=>{

    if(err) res.send('cant delete contact')
        else res.send('contact was deleted')


})



})






















})






app.listen(8000,(err)=>{

    if(err) console.log("server is not running")
    
    else console.log("server is running on port 8000")
    
    })