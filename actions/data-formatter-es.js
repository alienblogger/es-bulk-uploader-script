//Format data into ES Bulk JSON Format

module.exports = function dataFormatterForBulk(data,index,type){
  var x = "";
  //Create Meta Data for the Upload for each item
  for(i in data){
   var a = {
    index:{}
   };
   a.index["_index"]=index;
   a.index["_type"]=type;
   a.index["_id"]=data[i].item_code;
   x+=JSON.stringify(a)+'\n'+JSON.stringify(data[i])+'\n'; //Add data to single string using '/n' as the end point
  }
  return x; //Return the string
}
