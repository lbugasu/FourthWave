import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'wordcount'
})
export class WordcountPipe implements PipeTransform {
  transform (value: string): string {
    if (!value) return ''
    const words = value.split(' ')

    if (words.length > 70) {
      const newWords = []
      let stops = 0
      for (let i = 0; i < words.length; i++) {
        if (stops < 3) {
          if (words[i] == '.' || words[i][words[i].length - 1] == '.') {
            stops++
          }
          newWords.push(words[i])
        }
      }
      return newWords.join(' ')
    }
    return value
  }
}
