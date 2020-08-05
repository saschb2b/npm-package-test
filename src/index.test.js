const helloWorld = require('../src')

describe('test hello world', () => {
  it('returns string hello world', () => {
    expect(helloWorld()).toEqual('Hello world!')
  })
})
