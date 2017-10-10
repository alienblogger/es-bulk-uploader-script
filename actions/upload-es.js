var axios = require('axios');


//Uploads the Data to ES in Bulk

module.exports = function uploadToEs(data,base_url,index,type){
  var url = base_url+'/'+index+'/'+type+'/_bulk';
  //Uses PUT request to send the generated String from dataFormatterForBulk() to the above URL
  axios.put(url,data)
  .then(function(res){
    console.log(res);
  })
  .catch(function(err){
    if(err) throw err;
  })
}
