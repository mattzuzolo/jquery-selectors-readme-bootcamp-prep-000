// declare your functions here...

function paragraphSelector () {
  
  return $('p');
}

function lastImageSelector() {
  
  return $('p:last');
}

function ninjaBabySelector() {

  //# before baby-ninja because it works the same was asa a class selector
  return $('#baby-ninja');  
}

function divSelector(){
  
  //period before pics because it'll return entire class
  return $('.pics');
}

function firstListItem(){
  
  return $('div img:first-child');
}