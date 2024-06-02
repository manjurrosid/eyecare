
if(!$('#mapCustom1, #mapCustom2, #mapCustom3').length == 0){
	function initialize() {
		var latlng  = new google.maps.LatLng(38.927070, -77.375040);
		var latlng2 = new google.maps.LatLng();
		var latlng3 = new google.maps.LatLng();
		
		var myOptions = {
			zoom: 15,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var myOptions2 =  {
			zoom: 15,
			center: latlng2,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		
		var myOptions3 =  {
			zoom: 15,
			center: latlng3,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map =  new google.maps.Map(document.getElementById("mapCustom1"), myOptions);

		var map2 = new google.maps.Map(document.getElementById("mapCustom2"), myOptions2);
		
		var map3 = new google.maps.Map(document.getElementById("mapCustom3"), myOptions3);

		var myMarker = new google.maps.Marker(
			{
				position: latlng,
				map: map,
				title:"Pune"
			});

		var myMarker2 = new google.maps.Marker(
			{
				position: latlng2,
				map: map2,
				title:"Noida"
			});
		
		var myMarker3 = new google.maps.Marker(
			{
				position: latlng3,
				map: map3,
				title:"Noida"
			});
	}

	google.maps.event.addDomListener(window, 'load', initialize);
}

if(!$('#mapCustomstyle1').length == 0){
	function initMap() {
		var latlng = new google.maps.LatLng(38.927070, -77.375040);
		/*var default_view = {
			     
			lat: 32.89030007828348,
			lng: -117.17989177801535
		};*/
		var imageCustom = "static.organiclead.com/Site-c8e4fab6-5aee-4aad-9f84-614c78b3ba35/InnerContactAssets/marker.png";
		var stylesArray = [
			{
				featureType: 'poi.medical',
				elementType: '',
				stylers: [
					{visibility: 'off'},
				]
			}
		]
		var mapCustom = new google.maps.Map(document.getElementById('mapCustomstyle1'), {
			zoom: 14,
			disableDefaultUI: true,
			center: latlng,
			styles: stylesArray
		});

		var Location_1 = new google.maps.Marker({
			position: latlng,
			map: mapCustom,
			icon: imageCustom,
			title: 'Location Name'
		});

	}

	google.maps.event.addDomListener(window, 'load', initMap);
}

if(!$('#mapCustomstyle2').length == 0){
	function initMap2() {
		var latlng = new google.maps.LatLng();
		/*var default_view = {
			lat: 35.826810,
			lng: -78.617500
		};*/
		var imageCustom = "static.organiclead.com/Site-c8e4fab6-5aee-4aad-9f84-614c78b3ba35/InnerContactAssets/style2_icon.png";
		var stylesArray = [
			{
				featureType: 'poi.medical',
				elementType: '',
				stylers: [
					{visibility: 'off'},
				]
			}
		]
		var mapCustom = new google.maps.Map(document.getElementById('mapCustomstyle2'), {
			zoom: 14,
			disableDefaultUI: true,
			center: latlng,
			styles: stylesArray
		});

		var Location_1 = new google.maps.Marker({
			position: latlng,
			map: mapCustom,
			icon: imageCustom,
			title: 'Location Name'
		});

	}
	google.maps.event.addDomListener(window, 'load', initMap2);
}

if(!$('#mapCustomstyle3').length == 0){
	function initMap3() {
		var latlng = new google.maps.LatLng();
		/*var default_view = {
			lat: 35.826810,
			lng: -78.617500
		};*/
		var imageCustom = "static.organiclead.com/Site-c8e4fab6-5aee-4aad-9f84-614c78b3ba35/InnerContactAssets/style2_icon.png";
		var stylesArray = [
			{
				featureType: 'poi.medical',
				elementType: '',
				stylers: [
					{visibility: 'off'},
				]
			}
		]
		var mapCustom = new google.maps.Map(document.getElementById('mapCustomstyle3'), {
			zoom: 14,
			disableDefaultUI: true,
			center: latlng,
			styles: stylesArray
		});

		var Location_1 = new google.maps.Marker({
			position: latlng,
			map: mapCustom,
			icon: imageCustom,
			title: 'Location Name'
		});

	}
	google.maps.event.addDomListener(window, 'load', initMap3);
}


$(function($) {
	var templateBackground = $('.contact-template.style-1').attr('data-background-header-display');

	if (templateBackground == 'No' || templateBackground == 'no' ) {
		$('#ry-pg-banner').hide();
	}


});


$(window).resize(function () {
	var div = $('.style-2 .custom-social-wrapper .social-inner-wrap li');
	var width = div.width();
	setTimeout(function() {
		div.css('height', width);
	}, 100);
	

	var div2 = $('.style-3 .custom-social-wrapper .social-inner-wrap li');
	var width = div.width();
	setTimeout(function() {
		div2.css('height', width);
	}, 100);

});