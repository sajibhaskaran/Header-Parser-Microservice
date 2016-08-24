var express = require("express")
var path = require("path")
var app = express()

app.set('port', (process.env.PORT || 3000))

//app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) =>{
   console.log(req.headers)
   res.json({
       ip: req.headers['x-forwarded-for'],
       language: req.headers['accept-language'].split(',')[0],
       software: req.headers['user-agent'].match(/\((.*?)\)/)[1]
   })
})


app.listen(app.get('port'), () => {
    console.log('running on ', app.get('port'))
})