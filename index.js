const express = require('express');
const app = express();

const data = [
    {id:1, name:"jack"},
    {id:2, name:"jack"},
    {id:3, name:"jack"},
    {id:4, name:"jack"},
    {id:5, name:"jack"},
    {id:6, name:"jack"},
    {id:7, name:"jack"},
    {id:8, name:"jack"},
    {id:9, name:"jack"},
    {id:10, name:"jack"}
]

app.get('/user', function (req, res) {
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    res.send({ data: data.slice(offset, offset + count), count: data.length });
  });

app.get('/user/:id', function (req, res) {
    res.send(JSON.stringify(data.find((user) => user.id == req.params.id)));
    res.json({ id: req.params.id, success: true });
    

  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
