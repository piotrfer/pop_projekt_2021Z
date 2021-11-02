import { ForestryShower } from 'src/app/interfaces/forestry-shower';
import { ForestryEventHandler } from "src/app/interfaces/forestry-event-handler";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ForestryDto } from 'src/app/data-types/forestry-dto';

export class ForestryPresenter implements ForestryEventHandler {
    private forestryView: ForestryShower|undefined;

    constructor(private http: HttpClient) { }

    init(forestryView: ForestryShower) {
        this.forestryView = forestryView;
    }
    
    showAllForestriesClicked(): void {
        // this.http.get<ForestryDto[]>(environment.apiURL + 'forestry')
        //     .subscribe((forestries) => {
        //         this.forestryView!.showForestries(forestries)
        //     });  
        this.http.get<any[]>(environment.apiURL + 'forestry')
            .subscribe((forestries) => {
                this.forestryView!.showForestries(forestries.map(f => ({ id: f[0], location: f[1], name: f[2] })))
            });  
    }
}
