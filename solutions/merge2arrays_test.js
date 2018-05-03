describe('merge2arrays', function()
{
	it('returns index of 2 values that equal limit', () =>
	{
		const input = [5, 10, 16, 4, 15];
		const limit = 21;
		const answer = getIndicesofItemWeights(input, limit);

		expect(answer).toEqual(21);
	})
})