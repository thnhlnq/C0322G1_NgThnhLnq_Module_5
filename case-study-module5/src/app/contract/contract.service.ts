import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/contract');
  }

  saveContract(contract): Observable<Contract> {
    return this.http.post<Contract>(API_URL + '/contract', contract);
  }

  searchContract(keySearch: string): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${API_URL}/contract?q=` + keySearch);
  }
}
