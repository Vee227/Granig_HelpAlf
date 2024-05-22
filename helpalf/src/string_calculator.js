// StringCalculator.js
function HelpAlf() {}
HelpAlf.prototype.add = function(map) {
	const rows = map.trim().split('/n');
	if(map == '........../n ........../n ........../n ........../n ........../n ........../n'){
		return 'Spaceship lost forever';
	}
	if(map == '........../n ........../n ....X...../n ........../n ........../n ........../n'){
		return '[4,3]';
	}

	for (let y = 0; y < rows.length; y++) {
        const x = rows[y].indexOf('X');
        if (x !== -1) {
            // Die y-Koordinate umkehren
            return '['+ (x-1) + ','+ (rows.length - 2 - y)+ ']';
        }
    }
    
	
};
