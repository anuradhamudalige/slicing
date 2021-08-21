import { Injectable } from '@angular/core';
import { HttpConnectionService } from '../../shared/services/http-connection.service';
import { Observable } from 'rxjs';
import { Template } from '../models/template';

@Injectable()
export class HomeService {

  constructor(private connectionService: HttpConnectionService) {
  }

  getData(): Observable<Template[]> {
    return this.connectionService.get<Template[]>('./assets/data/data.json');
  }
}
