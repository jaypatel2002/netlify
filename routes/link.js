const router = require('express').Router();
var url = require('url');
const download = require('download-git-repo')

router.post('/', (req, res) => {
  console.log(req.body.id)
  const url2 =  req.body.id 
  var result = url.parse(url2).pathname.substring(1)




  download(result, 'uploads/'+result, function (err) {
    //   console.log(err ? 'Error' : 'Succesis')
if(err){
    res.render('error', {error:"Link is not valid"})

}
else{
    let link = 'your link is '+"http://localhost:3000/"+result || 'error'
    res.render('afterlink',{link:link})
    // send('your link is'+"http://localhost:3000/"+result)

}
    })





try {
    
} catch (error) {
    
}





 });
 
 
 module.exports = router;