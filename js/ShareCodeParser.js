var url= "https://sharecode.io/users/profile/1127/";
var oReq = null;

if (window.XMLHttpRequest){
  oReq = new XMLHttpRequest();
}else{
  oReq = new ActiveXObject("Microsoft.XMLHTTP");
}
oReq.onreadystatechange=function(){
	var my_default = "Ranked under 25 among more than 5000 users.";
	var element = document.getElementById('SC_ranking');
	var html = '<h4>';
	if (oReq.readyState==4 && oReq.status==200){
		var idx1 = oReq.responseText.search('Ranked');
		var idx2 = oReq.responseText.lastIndexOf('users.');
		if(idx1<0){
			html += my_default;
		}else{
			var my_size = idx2 - idx1 + 'users.'.length;
			html += oReq.responseText.substr(idx1, my_size);
		}
	}else{
		html += my_default;
	}
	html += '</h4>'
	element.innerHTML = html;
}
oReq.open("GET", url, true);
oReq.send(null);