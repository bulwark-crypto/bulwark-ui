/* global describe, it */
import expect from 'must'
import { pickRest } from '../lib/utils'

describe('utils.js', () => {
  describe('pickRest()', () => {
    const input = {
      foo: 1,
      bar: 2,
      baz: 3
    }

    it('picks elements out of the object', () => {
      const [out] = pickRest(input, ['foo', 'bar', 'baz'])
      expect(out).to.match(input)
    })

    it('returns the rest', () => {
      const [, rest] = pickRest(input, ['foo'])
      expect(rest).to.match({bar: 2, baz: 3})
    })

    it('returns an empty rest when all elements are consumed', () => {
      const [, rest] = pickRest(input, ['foo', 'bar', 'baz'])
      expect(rest).to.match({})
    })
  })
})
