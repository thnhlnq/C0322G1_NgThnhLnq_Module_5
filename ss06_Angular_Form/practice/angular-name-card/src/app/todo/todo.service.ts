import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../todo';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly API_URL = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
  }

  getTodos(count = 10): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL).pipe(
      map(data => data.filter((todo, i) => i < count))
    );
  }

  createTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(this.API_URL, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`${this.API_URL}/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`
    );
  }
}

// getAll(): Observable<Todo[]> {
//   return this.http.get<Todo[]>(API_URL + '/todo');
// }

// saveTodo(category): Observable<Todo> {
//   return this.http.post<Todo>(API_URL + 'todo/create', category);
// }
//
// findById(id: number): Observable<Todo> {
//   return this.http.get<Todo>(`${API_URL}/${id}`);
// }
//
// updateTodo(id: number, category: Todo): Observable<Todo> {
//   return this.http.put<Todo>(`${API_URL}/edit/${id}`, category);
// }
//
// deleteTodo(id: number): Observable<Todo> {
//   return this.http.delete<Todo>(`${API_URL}/${id}`);
// }
