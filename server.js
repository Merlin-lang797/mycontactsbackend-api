import express from "express";
const app=express();
const port=6969;
app.listen(port,()=>console.log(`server is running on port:${port}`));
app.get("/",(req,res)=>{
  res.json({msg:"hello guyss!"});
});
//crud functionalities of movies
//c for creating
app.post('/movies',()=>{});
//r for reading
app.get('/movies',()=>{});
//u for updating
app.put('/movies/:id',()=>{});
//d for deleting
app.post('/movies/:id',()=>{});