import {Injectable} from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionaries: Word[] = [{
    word: 'Hello',
    mean: 'Xin Chào'
  }, {
    word: 'Goodbye',
    mean: 'Tạm Biệt'
  }];

  constructor() {
  }

  getAll() {
    return this.dictionaries;
  }

  findByMean(mean: string) {
    return this.dictionaries.find(dictionary => dictionary.mean === mean);
  }
}
