let getDataButton = document.querySelector('#getData');
//http://swapi.co/api/people/1/
let dynamicDataContainer = document.querySelector('#dynamicDataContainer');
let displayPicture = document.getElementById('displayPicture');

//var dataDiv = getElementById('dataDiv');


getDataButton.addEventListener('click', function(event){
  var oReq = new XMLHttpRequest();
  // creates new request onject
  var inputData = document.getElementById("inputData");
  inputData.className = 'inputData';
  console.log('inputData',data);

  //attach events on requests

  //progress event triggers while data is being downloaded
  oReq.addEventListener('progress', function(){
    console.log('progress tick');
  });

    //load event triggers when all data is complete
  oReq.addEventListener('load', function(){
    for(var i = 1; i < 80; i++){
    var paresedDAta = JSON.parse(this.responseText);
    var imageDiv = document.createElement('img');
      imageDiv.src = paresedDAta.images[i].display_sizes[0].uri;
      displayPicture.appendChild(imageDiv);
    }
  });

  //error event triggers when there is a connection error
  //e.g. cant find server no server response no internet connection etc.
  oReq.addEventListener('error', function(){
    console.log('There was an error');
  });
  var data = inputData.value;
  //where to go?
  oReq.open("GET", "https://api.gettyimages.com/v3/search/images?phrase="+data);
  console.log('data',data);

  oReq.setRequestHeader(
    'Api-Key',
    'wv8afuwfysxfyqdkezhsypb6'
  );

  console.log('inputData',inputData.value);
  // SET HEADERS AFTER req.open but BEFORE oReq.send()
  // required when POSTing data

  // send off the REQUEST
oReq.send();
});