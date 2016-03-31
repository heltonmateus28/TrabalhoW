	$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/image.json",
	success: function(data) {
		var caminho;

		for(var i in data.imagens){

			$('figure').append("<img src="+ data.imagens[i].caminho +">");
		}
	}

	});