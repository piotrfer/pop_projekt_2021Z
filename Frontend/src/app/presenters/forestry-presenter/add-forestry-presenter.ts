import { ForestryShower } from 'src/app/interfaces/forestry-shower';
import { AddForestryEventHandler } from "src/app/interfaces/add-forestry-event-handler";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import {ApiProxy} from 'src/app/proxy/api-proxy';

export class AddForestryPresenter implements AddForestryEventHandler {
    private forestryView: ForestryShower|undefined;
    private apiProxy: ApiProxy|undefined;

    constructor(private api: ApiProxy) { 
        this.apiProxy = api;
    }

    init(forestryView: ForestryShower) {
        this.forestryView = forestryView;
        

    }
     saveForestryClicked(forestry: ForestryDto): void{
        this.apiProxy!.postForestry(forestry).subscribe((response)=>{
            console.log(response); 
        });
        
    }
}
