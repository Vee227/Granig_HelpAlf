describe('Help Alf', function() {
	beforeEach(function() {
		searching = new HelpAlf();
	});

	it('should return "Spaceship lost forever"', function() {
		expect(searching.add('........../n ........../n ........../n ........../n ........../n ........../n')).toEqual('Spaceship lost forever');
	});

});
