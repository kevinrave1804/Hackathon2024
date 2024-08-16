const express = require('express');
const cors = require('cors');
const routes = require('./routes/Exampleroutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});