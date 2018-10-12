function simple(num){
var flag = false;

	for ( var x = 1; x < num; x++){	
		for ( var j = 2; j < x; j++){
			if ( x % j == 0) {
				flag = true;
			} 
		}
		if (!flag) console.log(x + ' Делитель этого числа: 1 ' + x);
		flag = false;
	} 
}

simple(100);