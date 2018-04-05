function init() {
  var data = {fromId: undefined, toId: undefined};
  initAutocompletes(data);
  initSearchButton(data);
}

function initAutocompletes(data) {
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
    if (!place || !place.place_id) {
      return;
    }
    data.fromId = place.place_id;
  });
  toAutocomplete.addListener('place_changed', function() {
    var place = toAutocomplete.getPlace();
    if (!place || !place.place_id) {
      return;
    }
    data.toId = place.place_id;
  });
}

function initSearchButton(data) {
  var searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', function() {
    if (!data.fromId || !data.toId) {
      return;
    }
    console.log('redirecting', data);
    window.location.href = '/busqueda?de=' + data.fromId + '&a=' + data.toId;
  });
}

window.onload = init;
