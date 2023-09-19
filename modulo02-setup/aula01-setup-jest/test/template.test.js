import { it } from '@jest/globals'

function sum(a, b) {
  return a + b
}

it('sums two values', () => {
  expect(sum(2, 3)).toBe(5)
})