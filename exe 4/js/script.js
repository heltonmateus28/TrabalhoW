$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		
		var id;
		for(var i in data.noticias) {
			id = data.noticias[i].id;
			for(var j in data.noticias[i].paragrafo){
				$('#not'+id).append('<p><br>' + data.noticias[i].paragrafo[j] + '<br></p>');
			}
		}		
	}
});


$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dadosIMG.json",
	success: function(data) {
		
		var id;
		for(var i in data.imagens) {
			id = data.imagens[i].id;
			for(var j in data.imagens[i].caminho){
				$('#imag'+id).append("<img src="+ data.imagens[i].caminho +">");
			}
		}		
	}
});


