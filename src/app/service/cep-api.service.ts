import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepAPIService {

  apiURL: string = "https://viacep.com.br/ws/";

  constructor() { }
}
