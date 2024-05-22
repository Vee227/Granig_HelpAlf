// StringCalculator.js
function HelpAlf() {}
HelpAlf.prototype.add = function(map) {
	
    let rows = map.split('\n');
   
	for (let y = 0; y < rows.length; y++) {
		for (let x = 0; x < rows[y].length; x++) {
			if(rows[y][x] === 'X'){
				let newY = rows.length-1-y;
				return '[' + x + ',' + newY + ']';
			}
        }
    }
	return 'Spaceship lost forever';
};
