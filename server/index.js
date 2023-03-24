import express from 'express';

const PORT = process.env.PORT || 3000
const app = express();

app.get('/api/artem', (req, res) => {
    res.send('<h1>Artem pidoras</h1>')
})

app.listen(3000, () => {
    console.log('server has been started. artem pidoras')
})