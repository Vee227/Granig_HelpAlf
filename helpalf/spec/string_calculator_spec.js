describe('Help Alf', function() {
	beforeEach(function() {
		searching = new HelpAlf();
	});

	it('should return "Spaceship lost forever"', function() {
		expect(searching.add('........../n ........../n ........../n ........../n ........../n ........../n')).toEqual('Spaceship lost forever');
	});

	it('should return "[4,3]"', function() {
		expect(searching.add('........../n ........../n ....X...../n ........../n ........../n ........../n')).toEqual('[4,3]');
	});

	it('should return "[5,1]"', function() {
		expect(searching.add('........../n ........../n ........../n ........../n .....X..../n ........../n')).toEqual('[5,1]');
	});

	it('should return "[0,0]"', function() {
		expect(searching.add('........../n ........../n ........../n ........../n ........../n X........./n')).toEqual('[0,0]');
	});

	it('should return "[3,5]"', function() {
		expect(searching.add('..X......./n ........../n ........../n ........../n ........../n ........../n')).toEqual('[3,5]');
	});

	

});
