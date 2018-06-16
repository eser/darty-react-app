import DummyService from '../dummyService';

test('getSummary', async () => {
    const dummy = new DummyService();

    const result = await dummy.getSummary(1, 2);

    expect(result).toEqual(3);
});
