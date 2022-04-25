import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

let user = [];
let tweets = [];

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

app.post('/tweets', (req, res) => {
    const {username, tweet} = req.body;
    if(username && tweet) {
        tweets.push({ username: username, tweet: tweet});
        res.send("OK");  
    } else {
        res.send("todos os campos sao obrigatorios!")
    }
    console.log(tweets);
});





app.listen(5000, ()=> {
    console.log("Back-end funcionando, nao esquece de desligar a cada atualizaçao")
});