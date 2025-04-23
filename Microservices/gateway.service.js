const express = require('express');
const app = express();
const proxy = require('express-http-proxy')
// Route to handle the root URL

app.use('/stress-test',proxy('http://localhost:3002'))
app.use('/',proxy('http://localhost:3002'))

app.get('/', (req, res) => {
    res.send('Hello, World!');
    
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});