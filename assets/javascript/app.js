//When document finishes loading
$(document).ready(function(){
	//When user starts to type, we catch that using 'keyup'
	$('#searchUser').on('keyup', function(event){
		console.log('keypressed');
		//Get what user types in
		console.log(event.target.value);
		var userName = event.target.value;

		//Make request to Github API
		$.ajax({
			url: "https://api.github.com/users/" + userName,
			data:{
				client_id: '46e9a037672cca81d3da',
				client_secret: '2ed4aaa00b415311599d0038b59533f08a05f838'
			}
		}).done(function(){});
	});
});