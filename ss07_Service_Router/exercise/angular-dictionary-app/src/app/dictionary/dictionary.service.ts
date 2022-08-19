import {Injectable} from '@angular/core';
import {Word} from './word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionaries: Word[] = [{
    id: 1,
    word: 'Hello',
    mean: 'Xin Chào'
  }, {
    id: 2,
    word: 'Goodbye',
    mean: 'Tạm Biệt'
  }];

  constructor() {
  }

  getAll() {
    return this.dictionaries;
  }

  findById(id: number) {
    return this.dictionaries.find(dictionary => dictionary.id === id);
  }
}
