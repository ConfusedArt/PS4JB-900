function payload_finished(payload)
{
	setTimeout(function(){document.getElementById("progress").innerHTML="Load Successful!!";}, 3000);
	if(payload == "goldhen"){
		localStorage.Fail--;
		localStorage.Success++;
		document.getElementById("success").innerHTML="Success: "+localStorage.Success;
	}
}

function triggerFunction(payload){
	preloader();
	if(payload == "goldhen"){
		localStorage.Fail++;
		goldhen();
	}
	loader();
	payload_finished(payload);
}

function load_JB()
{	var spoofed=navigator.userAgent.indexOf("6.72")>=0 ? false : true;
	if (!spoofed){
		exploit(false);	
	}else{
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 HEN Loaded Already ✔"; }, 500);
	}
}

function load_OLDJB()
{	var spoofed=navigator.userAgent.indexOf("6.72")>=0 ? false : true;
	if (!spoofed){
		oldexploit();	
	}else{
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 HEN Loaded Already ✔"; }, 500);
	}
}

function load_Both()
{	var spoofed=navigator.userAgent.indexOf("6.72")>=0 ? false : true;
	if (!spoofed){
		exploit(true);	
	}else{
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 HEN Loaded Already ✔"; }, 500);
	}
}

function exploit(val){
	document.getElementById("progress").innerHTML="Running Jailbreak Exploit!!";
	localStorage.Fail++;
	setTimeout(function(){jb(val);}, 500);
}

function oldexploit(){
	document.getElementById("progress").innerHTML="Running Jailbreak Exploit!!";
	localStorage.Fail++;
	setTimeout(function(){oldjb();}, 500);
}

function load_payload(payload)
{	
	document.getElementById("progress").innerHTML="Loading! Please Wait!!";
	setTimeout(function(){triggerFunction(payload)}, 500);
}
