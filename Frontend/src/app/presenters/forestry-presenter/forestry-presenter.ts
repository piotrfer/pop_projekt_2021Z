import { IForestryList } from 'src/app/interfaces/iforestry-list';
import { IForestryPresenter } from "src/app/interfaces/iforestry-presenter";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class ForestryPresenter implements IForestryPresenter {
    private forestryList: IForestryList|undefined;

    constructor(private http: HttpClient) { }

    init(forestryList: IForestryList) {
        this.forestryList = forestryList;
    }
    
    handleShowAllForestries(): void {}
}
