let loremIpsum = require('lorem-ipsum')
let express = require ('express')
let app = express()



app.get('/lorem/:count', function (req, res) {
  let count = req.params.count;
  console.log(count);
  let text = loremIpsum({
  count: count,
  units: 'paragraphs',
  format: "html"
  })
  res.send(text)
});



app.listen(3000, function (){
  console.log('Example app listening on prot 3000!')
})
