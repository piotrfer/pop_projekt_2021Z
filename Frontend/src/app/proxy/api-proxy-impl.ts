import { ForestryShower } from 'src/app/interfaces/forestry-shower';
import { ApiProxy } from "src/app/proxy/api-proxy";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import {Observable} from 'rxjs/Rx';

export class ApiProxyImpl implements ApiProxy{
    private forestryView: ForestryShower|undefined;
    constructor(private http: HttpClient) { }
    getForestries(): Promise<ForestryDto[]> {
        throw new Error('Method not implemented.');
    }
    postForestry(forestry: ForestryDto): Observable<ForestryDto> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
          const body=forestry;
        console.log(body)
        console.log("INSIDE POST")
        return this.http.post<ForestryDto>(environment.apiURL + 'forestry', body, httpOptions);
     
    }   
}
