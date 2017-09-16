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

  $.get(('https://lit-fortress-6467.herokuapp.com/object'),function(info){

    $(cleartracks).click(function(){

    })

    $(submitbin).click(function(){

    })

  })
})
