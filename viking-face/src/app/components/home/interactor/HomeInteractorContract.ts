import {Observable} from "rxjs/Rx";
import {CurriculumData} from "../../../../repositories/DataModels/CurriculumData";

export abstract class HomeInteractorContract {
  abstract getCV(): Observable<CurriculumData>;
}
