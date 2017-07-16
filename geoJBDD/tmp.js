var convertToGeoJson = function (err, db_ResultSet) {
	
 if(err) return res.send(500, "noooo " + err.message);

	var anObject = JSON.stringify(db_ResultSet);
	var jsonObject = JSON.parse(anObject);
	var prePolygon = jsonObject.features[0].geometry;
	var properties = jsonObject.features[0].properties;
	
	var coorArray = prePolygon.coordinates;
	
	var swapArrayElements = function(arr, indexA, indexB) {
		      var temp = arr[indexA];
			          arr[indexA] = arr[indexB];
					            arr[indexB] = temp;
								          return arr;
	};
	
	var newcoors = []; 
	var tempCoor;
	    for (var i =0; i < coorArray.length; i++) {
			        tempCoor = swapArrayElements(coorArray[i], 0, 1) ;
					        console.log(tempCoor);
							        newcoors.push(tempCoor);
									    }
	
	var polygon = gjsonTools.toGeoJSON(newcoors, 'polygon');
	var alldataArr = [];
	var alldata = {};
	alldata = [{ name: properties.name, style: properties.style, geo: polygon }];
	
	var geoJsonObject = GeoJSON.parse(alldata, {GeoJSON: 'geo'});

}
