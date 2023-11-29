// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the comments page
// 4. Create a route for the add comment page
// 5. Create a route for the delete comment page
// 6. Create a route for the edit comment page
// 7. Create a route for the static files
// 8. Create a route for the 404 page
// 9. Start the server

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a route for the home page
app.get('/', (req, res) => {
    res.send('This is the home page');
});

// 3. Create a route for the comments page
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

// 4. Create a route for the add comment page
app.get('/comments/add', (req, res) => {
    res.send('This is the add comment page');
});

// 5. Create a route for the delete comment page
app.get('/comments/delete', (req, res) => {
    res.send('This is the delete comment page');
});

// 6. Create a route for the edit comment page
app.get('/comments/edit', (req, res) => {
    res.send('This is the edit comment page');
});

// 7. Create a route for the static files
app.use(express.static('public'));

// 8. Create a route for the 404 page
app.use((req, res, next) => {
    res.status(404).send('Sorry, page not found');
});

// 9. Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});