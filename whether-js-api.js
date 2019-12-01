function getImage(icon) {
  switch (icon) {
    case 'snow':
      return 'https://www.telegraph.co.uk/content/dam/Travel/ski/snowy-trees.jpg?imwidth=1400';
    case 'partly-cloudy-day':
      return 'https://www.thenews.com.pk//assets/uploads/updates/2019-05-15/471743_7167140_Cloudy-weather_updates.jpg';
      case 'cloudy':
      return 'http://www.alanbatnews.net/assets/2019-01-07/images/45d91249584661e8966fdd42d8f86f22.jpg';
    case 'rain':
      return 'https://www.irishtimes.com/polopoly_fs/1.2379417.1444048421!/image/image.jpg_gen/derivatives/box_620_330/image.jpg';
    default:
      return 'https://1.bp.blogspot.com/-5ZBsXSPfG6E/W7E4BD5Y7HI/AAAAAAAAG1A/-Qd7vT1sjnoV5V1kV4p4WwTTt6bX3XyjwCLcBGAs/s640/DSC_8971.JPG';
  }
}

function getSelectedCity() {
  const selectedCityValue = $('#city-list').val();
  const selectedCityLabel = $("#city-list option:selected").text();

  return [selectedCityValue, selectedCityLabel];
}

function getCityWeather() {
  // 1. get selected city name
  const selectedCity = getSelectedCity();


  // 2. send selected city to API to get weather forecast
  const url = "http://cloud.hypbox.com/weather/" + selectedCity[0];

  $.ajax({
    url: url,
    method: 'GET',
    crossDomain: true,
    success: function (data) {
      // 3. update view based on received info form API
      $('#city-name').text(selectedCity[1]);
      $('#city-temp').text(data.temperature + ' F');
      $('#city-humid').text(data.humidity + ' %');
      const imageUrl = getImage(data.icon);
      $("#weather-icon").attr('src', imageUrl);
    }
  });
}