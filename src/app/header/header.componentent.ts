import { Component} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html'
})
export class HeaderComponent {
   constructor(private dataStorageService: DataStorageService) {}
   onSaveData() {
      this.dataStorageService.storePhilosophers();
      this.dataStorageService.storeSchools();
   }

   onFetchData() {
      this.dataStorageService.fetchPhilosophers();
      this.dataStorageService.fetchSchools();
      this.dataStorageService.fetchReferences();
   }
}