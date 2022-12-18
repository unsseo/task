var Links = {
 setColor: function(color){
   var i = 0;
while (i < alist.length) {
  alist[i].style.color = color;
  i = i + 1;}
  }
};

var Body = {
  setColor: function(color){
  document.querySelector('body').style.color = color;
},
  SetBGColor: function(color){
  document.querySelector('body').style.backgroundColor = color;
  }
};
$("p").css("background-color", "yellow");

function nightDayHandler(self){
  var target = document.querySelector('body');

  if(self.value == 'night'){
    Body.SetBGColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('orange');


} else {
    Body.SetBGColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('purple');

  }
}
