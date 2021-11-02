import { IForestryList } from 'src/app/interfaces/iforestry-list';
import { IForestryPresenter } from "src/app/interfaces/iforestry-presenter";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ForestryDto } from 'src/app/data-types/forestry-dto';

export class ForestryPresenter implements IForestryPresenter {
    private forestryList: IForestryList|undefined;

    constructor(private http: HttpClient) { }

    init(forestryList: IForestryList) {
        this.forestryList = forestryList;
    }
    
    showAllForestriesClicked(): void {
        // this.http.get<ForestryDto[]>(environment.apiURL + 'forestry')
        //     .subscribe((forestries) => {
        //         this.forestryList!.showForestries(forestries)
        //     });  
        this.http.get<any[]>(environment.apiURL + 'forestry')
            .subscribe((forestries) => {
                this.forestryList!.showForestries(forestries.map(f => ({ id: f[0], location: f[1], name: f[2] })))
            });  
    }
}
