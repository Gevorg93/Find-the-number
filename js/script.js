var a= +prompt("Քանի քայլով գտնեմ ձեր մտապահած թիվը?");
if(a>=1 && typeof(a) == "number"){
	alert("Պահիր մտքումդ 1-ից մինչև " + Math.pow(2, a) + " թիվը");
	var b=Math.pow(2, a - 1);
	var x= 0;
	for(var d=0; d<a; d++){
		var con =confirm("Քո մտապահած թիվը մեծ է կամ հավասար " + b + "-ից");
		if(con==true){
			 x=1;
		}
		else{
			x=-1;
		}
		b = b + x * Math.pow(2, a-2-d); // 5.2
	}
	alert("Քո մտապահած թիվը " + Math.floor(b) + " է!!!");
}
else{
	alert("Կխաղանք հաջորդ անգամ!");
}