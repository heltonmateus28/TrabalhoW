$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		

		for(var i in data.estados){	

				$('select').append('<option>' + data.estados[i].est + '</option>');

		}
	}


});


	$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/image.json",
	success: function(data) {
		
		for(var i in data.imagens){

			$('figure').append("<img src="+ data.imagens[i].caminho +">");
		}
	}

	});


var game;
$("button").on('click', function() {
	document.getElementById('info').innerHTML = "";
	document.getElementById('text').innerHTML = ""; 
	

	if ($(this).attr("id") == "pri") {
		game = 0;
	}
	else if ($(this).attr("id") == "seg") {
		game = 1;
	}
	else if ($(this).attr("id") == "ter") {
		game = 2;
	}
	console.log(game);


$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/botao.json",
	success: function(data){

			$('#info').append('<h1>' + data.botaoo[game].nome + '</h1>');
			$('#info').append('<h3>Data de Lançamento: ' + data.botaoo[game].lanc + '</h3>');
			$('#info').append('<img id="imgJogo" src="' + data.botaoo[game].imag + '">');
			$('#text').append('<h3>' + data.botaoo[game].nota + '</h3>');
			$('#text').append('<p>' + data.botaoo[game].descricao + '</p>');	

		
	}
});
});
	
	


