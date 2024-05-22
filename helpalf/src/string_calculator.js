// StringCalculator.js
function HelpAlf() {}
HelpAlf.prototype.add = function(map) {
	const rows = map.trim().split('/n');
	
	for (let y = 0; y < rows.length; y++) {
        const x = rows[y].indexOf('X');
        if (x !== -1) {
            // Die y-Koordinate umkehren
            return '['+ (x-1) + ','+ (rows.length - 2 - y)+ ']';
        }
    }
	return 'Spaceship lost forever';
    
	
};
