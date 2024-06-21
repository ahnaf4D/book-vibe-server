const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
const books = require('./books.json');
const blogs = require('./blogs.json');
app.get('/', (req, res) => {
  res.send(books);
});
app.get('/blogs', (req, res) => {
  res.send(blogs);
});

app.get('/blog/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find((item) => item.id === id);
  res.send(blog);
});
app.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((item) => item.bookId === id);
  res.send(book);
});

app.listen(port, () => {
  console.log(`server listening on ${port}...`);
});
