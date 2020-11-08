import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs';
import { retry } from 'rxjs/operators';

import { Historico } from '../../../../../common/historico';
import { Pneu } from '../../../../../common/pneu';
import { Veiculo } from '../../../../../common/veiculo';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private servURL = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    getHistoricos(): Observable<Historico[]> {
      return this.http.get<Historico[]>(this.servURL + "/historicos")
                  .pipe(
                    retry(2)
      );

    }

    getVeiculos(): Observable<Veiculo[]> {
      return this.http.get<Veiculo[]>(this.servURL + "/veiculosMock")
                .pipe(
                  retry(2)
              );
    }

    getPneus(): Observable<Pneu[]> {
      return this.http.get<Pneu[]>(this.servURL + "/pneusMock")
                .pipe(
                  retry(2)
              );
    }

}
