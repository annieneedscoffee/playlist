console.log("This one too!")

$(document).ready(function(){
  let box1 = document.getElementById('box1');
  let box2 = document.getElementById('box2');
  let box3 = document.getElementById('box3');
  let choosetracks = document.getElementById('choosetracks');
  let boxlist = [box1, box2, box3];
  let imagelist = ['<img src="./21.jpg"/>', '<img src="./ghost_in_the_machine.jpg"/>', '<img src="./red.jpg"/>', '<img src="./the_division_bell.jpg"/>', '<img src="./thriller.jpg"/>'];
  var used = [];

    for(i=0;i<boxlist.length;i++){
      var num = Math.floor(Math.random()*5);
      console.log(num);
      $(boxlist[i]).prepend(imagelist[num]);
      used.push(num);
    }

})
