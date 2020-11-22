var xmlHttp=  createXmlHttpRequest();

function createXmlHttpRequest() {
    var xmlHttp;

    if (window.ActiveXObject) {
        
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            xmlHttp = false;
        }
    }else{

        try {
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            xmlHttp = false;
        }
    }

    if (!xmlHttp) {
        alert("Error creating xmlRequest object");
    }else{
        return xmlHttp;
    }


}

function process() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState ==0 ) {
        name = encodeURIComponent(document.getElementById("name").value);
        xmlHttp.open("GET" , "ajax.php?name="+name, true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
    }else{
        setTimeout('process()' , 1000);
    }
}

function handleServerResponse() {
    if (xmlHttp.readyState == 4 ) {
        if (xmlHttp.status == 200) {
            var xmlResponse = xmlHttp.responseXML;
            var xmlDocumentElement = xmlResponse.documentElement;
            var helloMessage = xmlDocumentElement.firstChild.data;

            document.getElementById("message").innerHTML = '<strong>'+helloMessage+'</strong>';
            setTimeout('process()' , 1000);
        }else{
            alert("alert in server"+ xmlHttp.statusText);
        }
    }
}