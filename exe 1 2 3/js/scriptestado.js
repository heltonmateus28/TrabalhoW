$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		var id;
	}


		for(var i in data.estados){
			
			
			// $('#content').append('<div id="est' + id + '" class="dados col-md-3"></div>');

			$('select').append('<option>' + data.estados[i].estado + '</option>');


		}




});

