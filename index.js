import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


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
        //let userAvatar = findUserImage(username)
        let userAvatar = user.find(user => user.username === username)
        tweets.push({ username: username, tweet: tweet, avatar: userAvatar.avatar});
        res.send("OK");  
    } else {
        res.send("todos os campos sao obrigatorios!")
    }
    console.log(tweets);
});




app.listen(5000, ()=> {
    console.log("Back-end funcionando, nao esquece de desligar a cada atualizaçao")
});