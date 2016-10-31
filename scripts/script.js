// placeholder
console.log('debug');
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "It was 94 farenheit outside, \
so :insertx: went for a walk. When they got to :inserty:, \
they stared in horror for a few moments, then :insertz:. \
Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  
  while (newStory.indexOf(':insert' !== -1)) {
    console.log('DEBUG: replacing story items...');
    newStory = newStory.replace(':insertx:', xItem);
    console.log('DEBUG: replaced x');
    newStory = newStory.replace(':inserty:', yItem);
    console.log('DEBUG: replaced y');
    newStory = newStory.replace(':insertz:', zItem);
    console.log('DEBUG: replaced z');
    console.log('DEBUG: index of next :insert : ' + newStory.indexOf(':insert'));
  }
  
  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714285714) + ' stone';
    var temperature =  Math.round((94 -32) * (5 / 9)) + ' centigrade';
    
    while ((newStory.indexOf('94 fahrenheit') !== -1) && (newStory.indexOf('300 pounds') !== -1)) {
      console.log('Converting to UK...');
      newStory = newStory.replace('94 fahrenheit', temperature);
      newStory = newStory.replace('300 pounds', weight);
    }
    
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
