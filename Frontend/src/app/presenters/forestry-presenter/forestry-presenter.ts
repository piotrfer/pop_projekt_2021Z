import { IForestryShower } from 'src/app/interfaces/iforestry-shower';
import { IForestryPresenter } from "src/app/interfaces/iforestry-presenter";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ForestryDto } from 'src/app/data-types/forestry-dto';

export class ForestryPresenter implements IForestryPresenter {
    private forestryView: IForestryShower|undefined;

    constructor(private http: HttpClient) { }

    init(forestryView: IForestryShower) {
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
