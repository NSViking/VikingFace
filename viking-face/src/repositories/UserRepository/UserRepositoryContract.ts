import {Observable} from "rxjs/Rx";
import {CurriculumData} from "../DataModels/CurriculumData";


export abstract class UserRepositoryContract {
  abstract getCV(): Observable<CurriculumData>;
}
