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
        res.status(201).send("OK");  
    } else {
        res.sendStatus(400).send("todos os campos sao obrigatorios!")
    }
    console.log(user);
});

app.post('/tweets', (req, res) => {
    const {username, tweet} = req.body;
    if(username && tweet) {
        let userAvatar = user.find(user => user.username === username)
        tweets.push({ username: username, tweet: tweet, avatar: userAvatar.avatar});
        res.status(201).send("OK");  
    } else {
        res.sendStatus(400).send("todos os campos sao obrigatorios!")
    }
    console.log(tweets);
});

app.get('/tweets', (req, res) => {
    res.send(tweets.slice(tweets.length-10, tweets.length));
});

app.get('/tweets/:username', (req, res) => {

    function filterUserTweets(tweets){
        const name = req.params.username;
        return tweets.username === name;
    }

    const nameTweets = tweets.filter(filterUserTweets)
    res.send(nameTweets)
});

app.listen(5000, ()=> {
    console.log("Back-end funcionando, nao esquece de desligar a cada atualizaçao")
});


/* TEST OBJECTS
let user = [];
let tweets = [];


let user = [
    {
        "username": "carinha",
        "avatar": "aquele avatar"
    },
    {
        "username": "flasco",
        "avatar": "uniao flasco"
    }
];

let tweets = [
    {
        "username": "flasco",
        "tweet": "0",
        "avatar": "uniao flasco"
    },
    {
        "username": "carinha",
        "tweet": "1",
        "avatar": "aquele avatar"
    },
    {
        "username": "flasco",
        "tweet": "2",
        "avatar": "uniao flasco"
    },
    {
        "username": "carinha",
        "tweet": "3",
        "avatar": "aquele avatar"
    },
    {
        "username": "flasco",
        "tweet": "4",
        "avatar": "uniao flasco"
    },
    {
        "username": "carinha",
        "tweet": "5",
        "avatar": "aquele avatar"
    },
    {
        "username": "flasco",
        "tweet": "6",
        "avatar": "uniao flasco"
    },
    {
        "username": "carinha",
        "tweet": "7",
        "avatar": "aquele avatar"
    },
    {
        "username": "flasco",
        "tweet": "8",
        "avatar": "uniao flasco"
    },
    {
        "username": "carinha",
        "tweet": "9",
        "avatar": "aquele avatar"
    },
    {
        "username": "flasco",
        "tweet": "10",
        "avatar": "uniao flasco"
    },
    {
        "username": "flasco",
        "tweet": "11",
        "avatar": "uniao flasco"
    }
]

*/