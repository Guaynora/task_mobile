import {getList} from '../src/helpers/getList';

describe('Test in List Screen', () => {
  it('Return data from api', async () => {
    const lists = await getList();
    expect(lists.length).toBeGreaterThan(0);
    expect(lists[0]).toEqual({
      createdAt: expect.any(String),
      id: expect.any(String),
      name: expect.any(String),
      avatar: expect.any(String),
    });
  });
});
