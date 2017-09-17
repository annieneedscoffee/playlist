console.log('Its linked!')

$(document).ready(function(){
  let cleartracks = document.getElementById('cleartracks');
  let submitbin = document.getElementById('submitbin');
  let boxofselections = document.getElementById('boxofselections');
  let album1 = document.getElementById('album1');
  let album2 = document.getElementById('album2');
  let album3 = document.getElementById('album3');
  let album4 = document.getElementById('album4');
  let album5 = document.getElementById('album5');
  let albumlist =[album1, album2, album3, album4, album5];

  $.get(('https://lit-fortress-6467.herokuapp.com/object'),function(info){
    var x = info.results;
    var y = [];
    var z = [];
    console.log(x);
    for(i=0;i<x.length;i++){
      y.push(x[i].title);
      z.push(x[i].artist);
      console.log(z);
    }
    //need foreach statement here. Only hardcode as last result. Or see solution in slack with a get request for each one.
for(i=0;i<albumlist.length; i++){
  $(albumlist[i]).on('click', function(){
    $(boxofselections).text(z[0] + ": " + y[0]);
  })
}


    $(cleartracks).on('click',function(){
      $(boxofselections).empty();
    })

    $(submitbin).click(function(){
     $.post('https://lit-fortress-6467.herokuapp.com/post', function(stuff){
       $(boxofselections).html(stuff);
     })
    })

  })
})
