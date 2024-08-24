const express=require("express");
const path=require("path");
const app=express();

const PORT=5000;

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')))

function loginHandler(request,response) {
    const {user_name, password}=request.body;

    console.log(user_name,password);

    response.status(200).json({message:"log in successfull"});

}

function serveContentHandler(request,response) {
    response.render(path.join(__dirname,'public','index.html'));
}

app.post("/login",loginHandler);
app.get("/",serveContentHandler);


app.listen(PORT,()=>{
    console.log(`server is running on PORT: ${PORT}`);
})