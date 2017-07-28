$.noConflict();
jQuery( document ).ready(function( $ ) {
	
	$('#ocultar').hide();
	$("#boton").on("click",function(e){
		
		$('#ocultar').show();
		var str = $("#buscar").val();
		var res = str.toUpperCase();
		
		url='http://localhost:8080/copia/rest/'+ res;
		alert(url);
		
		$.ajax({
			  url : url,
			//  dataType : "json",
			  success: function (data) {
				//  if (data.length > 0) {
					  txt ="<table data-table='coordenada' id='tablaCoord' class='rwd-table'><thead><tr>"
		                    +"<th>Latitud</th>"
		                    +"<th>Longitud</th>"
		                    +"<th>Acciones</th></tr></thead><tbody>";
		               
		    /*            for (i = 0; i < data.length; i++) {
		                    let punto = data[i];
		                    txt += parsePunto(punto);
		                }
		      */  
			        txt+="</tbody><tfoot><tr><td colspan='3'></td></tr></tfoot></table>";
		     /*       }else{
		                txt ="¡Error!";
		            }
			*/	    
			        $("#ocultar").append(txt); 
				 },

			/*
				 error: function (parsedjson, textStatus, errorThrown) {
					  console.log("parsedJson: " + JSON.stringify(parsedjson));
					  txt ="¡JSON error";
				  } */
		 }); });
	 function parsePunto (punto){
		    let latitud = punto.latitud;
		    let longitud = punto.longitud;
		    let texto = "<tr><td>"+latitud+"</td><td>"+longitud+"</td></tr>";

		    return texto;
		} })
