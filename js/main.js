var app = {} ;

$(document).ready(function(){
  app.hookupScrollShadow();
  $('.bigtext').bigtext();
})

function populateBigNumber(id) {
  var csvFile = "data/" + id + "-big.csv";
  d3.csv(csvFile, function(error, data) {
    if(error){
      console.log(error);
    }
    else {
	   $("#" + id + "-number").text(data[0].big);
    }
  });
}