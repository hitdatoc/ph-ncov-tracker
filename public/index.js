var caseData;

function getData() {
  
  var database = firebase.database();

  return firebase.database().ref('/cases').once('value').then(
  	function(snapshot) {
  	  console.log(snapshot.val());
  	}
  )
}

function initMap() {

  getData();

  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}