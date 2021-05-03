import { DatePipe } from './date.pipe'

describe('DatePipe', () => {
  it('should convert a date to a date string', () => {
    // new instance of the pipe
    const pipe = new DatePipe()

    // create a new instance of a date
    const date = new Date()

    expect(pipe.transform(date)).toBe(date.toDateString())
  })
})
