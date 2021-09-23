import { dateFormatted } from 'src/utils/dateFormatted';

test('test', () => {
  expect(dateFormatted({ date: new Date(0) })).toBe('1970/01/01 09:00');
});
