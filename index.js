//Back-end Holy

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());


app.listen(5000, ()=> {
    console.log("Back-end funcionando, nao esquece de desligar a cada atualizaçao")
});