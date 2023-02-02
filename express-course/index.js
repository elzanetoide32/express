///con http////
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   const read = fs.createReadStream("./static/index.html");
//   read.pipe(res);
// });
// server.listen(3000);
// console.log("server on port 3000");

///con express////
const express = require("express");
const morgan=require('morgan')///un middleware como otros
const app = express();
const path=require('path')
require('ejs')

const userRoute=require('./routes/user.js')
const homeRoute=require('./routes/index.js')
app.use(homeRoute)
userRoute(app)

///settings
app.set('appName','express course')
app.set('case sensitive routing',true)////respeta las mayusculas en la ruta
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


/////middleware
app.use(express.text())
app.use(express.json())////middleware
app.use(express.urlencoded({extended:false}))


///middlewares//////
// app.use((req,res,next)=>{
//     console.log(`ruta: ${req.url} metodo: ${req.method}`)

//     next()
// })

// app.use((req,res,next)=>{
//    if(req.query.login === 'fazt@faztweb.com'){
//     next()
//     }else{
//         res.send('no autorizado')
//     }
    
// })

//app.use(morgan('dev'))

app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('nuevo usuario creado')
})

app.get('/dashboard',(req,res)=>{
     res.send('dashboard page')///importante el orden porque sino pide el login para todas las rutas
})

// app.all('/info',(req,res)=>{
//     res.send('server info')///todos los metodos
// })

// app.get('/search',(req,res)=>{
//     if(req.query.q==="javascript"){
//         res.send("lista de libros de js")
//     }else{
//         res.send("pagina normal")
//     }
// })

// app.get('/hello/:user',(req,res)=>{
//     res.send(`hola ${req.params.user}`)
// })

// app.get('/add/:x/:y',(req,res)=>{
//     const result= parseInt(req.params.x) + parseInt(req.params.y)
//     res.send(`result: ${result}`)
// })

// app.get('/user/:username/photo',(req,res)=>{
//     if(req.params.username==="fazt"){
//         return res.sendFile('./pantera amarilla v2.gif',{
//             root:__dirname
//         })
//     }
//     res.send('el usuario no tiene acceso')
// })

// app.get('/nombre/:nombre/age/:age',(req,res)=>{
//     res.send(`el usuario es ${req.params.nombre} tiene ${req.params.age}`)
// })

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/miarchivo", (req, res) => {
//   res.sendFile("./pantera amarilla v2.gif", {
//     root: __dirname,
//   }); ////cualquier tipo de datos
// });

// app.get("/user", (req, res) => {
//   res.json({
//     name: "fast",
//     lastname: "ray",
//     age: 40,
//     points: [1, 2, 3],
//     address: { city: "new york", street: "123456" },
//   });
// });

// app.get("/isAlive", (req, res) => {
//     res.sendStatus(204)
// });

// app.get('/product',(req,res)=>{
//     res.send('lista de productos')
// })

// app.post('/product',(req,res)=>{
//     res.send('creando productos')
// })

// app.put('/product',(req,res)=>{
//     res.send('actualizando productos')
// })

// app.delete('/product',(req,res)=>{
//     res.send('eliminando de productos')
// })

// app.patch('/product',(req,res)=>{
//     res.send('actualizando una parte productos')
// })

// app.get('/',(req,res)=>{
//     res.sendFile('./static/index.html',{
//         root: __dirname
//     })
// })

// app.get('/2',(req,res)=>{
//     res.send('hello world')
// })

// app.get('/about',(req,res)=>{
//     res.send('About')
// })

// app.get('/weather',(req,res)=>{
//     res.send('el clima esta bueno')
// })

// app.use((req,res)=>{
//     res.status(404).send('no se encontro tu pagina')
// })

app.use('/public',express.static('./static'))////la ruta es para dividir lo que seri asi tiene el mismo nombre, alo ultimo como ultima opcion

app.listen(3000);
console.log(`server ${app.get('appName')} on port 3000`);
