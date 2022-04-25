import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

let user = [];

app.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body;
    if(username && avatar) {
        user.push({ username: username, avatar: avatar});
        res.send("OK");  
    } else {
        res.send("todos os campos sao obrigatorios!")
    }
    console.log(user);
});


app.listen(5000, ()=> {
    console.log("Back-end funcionando, nao esquece de desligar a cada atualizaçao")
});