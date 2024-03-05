const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./static'));
//Setting the view engine to look for ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/fortnite', (req, res) => {
    res.render('fortnite.ejs')
})

app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}.`);
  });