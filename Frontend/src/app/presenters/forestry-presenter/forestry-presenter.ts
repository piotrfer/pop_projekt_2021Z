import { ForestryShower } from 'src/app/interfaces/forestry-shower';
import { ForestryEventHandler } from "src/app/interfaces/forestry-event-handler";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ForestryDto } from 'src/app/data-types/forestry-dto';

export class ForestryPresenter implements ForestryEventHandler {
    private forestryView: ForestryShower|undefined;
    baseURL: string = "http://127.0.0.1:5000/"

    constructor(private http: HttpClient) { }

    init(forestryView: ForestryShower) {
        this.forestryView = forestryView;
    }

    showAllForestriesClicked(): void {
        this.http.get<ForestryDto[]>(environment.apiURL + 'forestry')
            .subscribe((forestries) => {
                this.forestryView!.showForestries(forestries)
            });
    }
    // showCreateForestryForm(){

    // }

     saveForestryClicked(forestry: ForestryDto): void{
       const httpOptions = {
         headers: new HttpHeaders({
           'Content-Type':  'application/json'
         })
       };
       const body=forestry;
       console.log(body)
       this.http.post(this.baseURL + 'forestry', body, httpOptions).subscribe(forestry => console.log(forestry));
    }
}
