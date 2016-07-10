// document.getElementById("demo").innerHTML = "Hello World!";
// document.getElementsByTagName("h1")[0].innerHTML = "xxxxxx!";


function parseXML(xml)// xml parser
{
	if (window.DOMParser)
	{
		// Firefox, Chrome, Opera, etc.
	    parser=new DOMParser();
	    xmlDoc=parser.parseFromString(xml,"text/xml");
	    console.log(xmlDoc)
	}
	else // Internet Explorer
	{
	    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	    xmlDoc.async=false;
	    xmlDoc.loadXML(xml); 
	} 
}

function getxmlFile()
{
	var xhttp = new window.XMLHttpRequest();
	xhttp.open("GET", "books.xml", true);
	xhttp.responseType = 'text';
	// must not used from native code
	// xhttp.onreadystatechange  = function() {
	// 	console.log(xhttp.status)
	//     if (xhttp.readyState == xhttp.DONE && xhttp.status == 200) {
	//     }
	// };
	xhttp.onload  = function() {
	    if (xhttp.readyState == xhttp.DONE) {
	    	parseXML(xhttp.response);
	    }
	};
	
	xhttp.send();
	return;
}

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    document.getElementById("demo").innerHTML =
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
}
