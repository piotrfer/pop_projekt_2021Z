import { IForestryListView } from 'src/app/interfaces/iforestry-list-view';
import { IForestryListEventHandler } from "src/app/interfaces/iforestry-list-event-handler";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ForestryDto } from 'src/app/data-types/forestry-dto';

export class ForestryListEventHandler implements IForestryListEventHandler {
    private forestryView: IForestryListView|undefined;

    constructor(private http: HttpClient) { }

    init(forestryView: IForestryListView) {
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

    //  saveForestryClicked(forestry: ForestryDto): void{
    //    const httpOptions = {
    //      headers: new HttpHeaders({
    //        'Content-Type':  'application/json'
    //      })
    //    };
    //    const body=forestry;
    //    console.log(body)
    //    this.http.post(environment.apiURL + 'forestry', body, httpOptions).subscribe(forestry => this.showAllForestriesClicked());
    // }
}
