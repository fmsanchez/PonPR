function initAutocompletes() {
  var fromInput = document.getElementById('from-input');
  var toInput = document.getElementById('to-input');

  var options = {
    types: ['(cities)'],
    componentRestrictions: {country: 'pr'}
  };

  var fromAutocomplete = new google.maps.places.Autocomplete(fromInput, options);
  var toAutocomplete = new google.maps.places.Autocomplete(toInput, options);

  fromAutocomplete.addListener('place_changed', function() {
    var place = fromAutocomplete.getPlace();
    console.log(place);
  });
}

window.onload = initAutocompletes;
