
import { Component, Optional } from '@angular/core';
import {UserRepositoryContract} from "../../../../repositories/UserRepository/UserRepositoryContract";
import {Observable} from "rxjs/Rx";
import {CurriculumData} from "../../../../repositories/DataModels/CurriculumData";
import {HomeInteractorContract} from "./HomeInteractorContract";
import {UserRepository} from "../../../../repositories/UserRepository/UserRepository";

export class HomeInteractor implements HomeInteractorContract{

    userRepository: UserRepositoryContract

    constructor(@Optional() userRepository: UserRepositoryContract) {
      this.userRepository = userRepository;
    }

    getCV(): Observable<CurriculumData> {
      return this.userRepository.getCV();
    }
}
