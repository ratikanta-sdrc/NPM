var express = require('express');
var url = require('url');
var unirest = require('unirest');
var md5 = require('md5');
var SimpleFileWriter = require('simple-file-writer');
var app = express();

app.get('/', function (req, res) {
	// var name = req.	

// GET a resource
	// unirest.get('http://opendatakit.appspot.com/formList')
	// var Request = unirest.get('http://180.87.230.91:8089/ODKAggregate/formList')
	var url_parts = url.parse(req.url, true);
	// var query = url_parts.query;
	// var username = query.u;
	// var password = query.p;
	// var url = query.ur;
	// var digestURI = query.uri;
	// console.log(username + password + digestURI + url);

	// var Request = unirest.get('http://180.87.230.91:8089/ODKAggregate/formXml?formId=MSTA_HtoH_08072015_V3')
	// 	.end(function(res) {
 //  			// console.log(res.statusCode);
 //  			// console.log(res.headers);
  			 					


	//     	if (res.error) {
	//     		console.log('GET error', res.error);
	//     		if(res.statusCode === 401){
	//     			// var username = 'superadmin';
	//     			// var password = 'aggregate';
	//     			// var digestURI = '/ODKAggregate/formList';
	//     			var method = 'GET';

	// 	    		var headerString = JSON.stringify(res.headers);
	// 	  			var realm = headerString.split('realm=')[1];
	// 	  			realm = realm.split('"')[1];
	// 	  			realm = realm.substring(0, realm.length -1);

	// 	  			var qop = headerString.split('qop=')[1];

	// 	  			qop = qop.split('"')[1];
	// 	  			qop = qop.substring(0, qop.length -1);

	// 	  			var nonce = headerString.split('nonce=')[1];

	// 	  			nonce = nonce.split('"')[1];
	// 	  			nonce = nonce.substring(0, nonce.length -1);

	// 	  			function makeid(vHere){

	// 				      var text = "";
	// 				      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	// 				      for( var i=0; i < vHere; i++ )
	// 				          text += possible.charAt(Math.floor(Math.random() * possible.length));
	// 				      return text;

	// 				  }


	// 				  var HA1 = md5(username + ":" + realm + ":" + password);
	// 				  var HA2 = md5(method + ":" + digestURI);    
	// 				  var nc = '0000000' + makeid(1);  
	// 				  var cnonce = makeid(8);
	// 				  var response = md5(HA1 + ":" + nonce + ":" + nc + ":"+ cnonce + ":" + "auth" + ":" + HA2);
	// 				  // console.log (response);

	// 	  			  var auth = 'Digest username="'+username+'", realm="'+realm+'", nonce="'+nonce+'", uri="'+digestURI+'", response="'+response+'", qop=auth, nc='+nc+', cnonce="'+cnonce+'"';	
	// 	  			  // console.log (auth);


		  			
	// 	  			// unirest.get('http://180.87.230.91:8089/ODKAggregate/formList')
	// 	  			unirest.get('http://180.87.230.91:8089/ODKAggregate/formXml?formId=MSTA_HtoH_08072015_V3')
	// 	  			.header('Authorization', auth)		
	// 	  			.end(function(resp) {
	// 	  				console.log(resp.statusCode);
	// 	  				if (resp.error) {
	// 			    		console.log('GET error', res.error)
	// 			    	} else {
	// 			      		// console.log('GET response', resp.body);
	// 			      		var writer = new SimpleFileWriter('D:/Ratikanta/TempDn/temp.xml');
	// 			      		writer.write(resp.body);
	// 			    	}
	// 	  			});
	// 	  		}
	//     	} else {
	//       		console.log('GET response', res.body)
	//     	}
 //  });





  res.send('Hello World!');

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});