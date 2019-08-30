var twitterFetcher=function(){
	var d=null;
	return{fetch:function(a,b){
		d=b;
		var c=document.createElement("script");
		c.type="text/javascript";
		c.src="http://cdn.syndication.twimg.com/widgets/timelines/"+a+"?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random();
		document.getElementsByTagName("head")[0].appendChild(c)},callback:function(a){
			var b=document.createElement("div");
			b.innerHTML=a.body;a=b.getElementsByClassName("e-entry-title");
			d(a)
			}
		}
}();
	var amin_twit = 3;
	twitterFetcher.fetch('573507625805082627', function(tweets){
	var x = tweets.length;
	var element = document.getElementById('tweets');
	var html = '<ul>';
	
	for(var n=0; n<amin_twit; n++){
		if (tweets[n].innerHTML) {
			html += '<li>' + tweets[n].innerHTML + '</li>';
		} else {
			html += '<li>' + tweets[n].textContent + '</li>';
		}
	}
	 html += '</ul>';
	element.innerHTML = html;	
});