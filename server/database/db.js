

 import mongoose from 'mongoose';





const Connection = () => {
    //connecting of the database 
const database_link = 'mongodb+srv://admin:adityasoni1017@cluster0.4mitqeh.mongodb.net/?retryWrites=true&w=majority' ;


mongoose.connect(database_link)
  .then(function(db){
    console.log("db connected ") ;
    

})
.catch(function(err){
    console.log(err) ;

});



   
    
}

export default Connection;