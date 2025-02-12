import express from 'express';
import handlebars from 'express-handlebars';

const app = express();

//Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());//Indicamos que ahora podemos recibir JSON al momento de recibir solicitudes
app.use(express.urlencoded({extended: true})); //Permite ques e pueda enviar información también desde la URL

app.engine('handlebars')
//Inicializar mi servidor
app.listen(8080, () => {
    console.log("El servidor se esta escuchando en el puerto 8080")
})
