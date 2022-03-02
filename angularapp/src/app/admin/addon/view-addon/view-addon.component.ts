import { Component, OnInit } from '@angular/core';
import { AddonsModel } from '../../../shared/AddonModel';
import { AddonService } from 'src/app/services/addon.service';

@Component({
      selector: 'app-view-addon',
      templateUrl: './view-addon.component.html',
      styleUrls: ['./view-addon.component.css'],
})
export class ViewAddonComponent implements OnInit {

      /**
       * @param _addonService 
       */
      constructor(private _addonService: AddonService) { }

      public query: any = '';

      // Storage For Addon Plans
      Plans!: AddonsModel[];

      public ngOnInit(): void {
            this.GetAddons();
      }

      /**
       * @Action Gets all the Addons
       * Assign in Plans Variable
       */
      GetAddons() {
            this._addonService.GetAddons().subscribe(
                  (data) => { this.Plans = data; }
            );
      }


      /**
       * @Action Get the Addon Of Specific Item
       * @param index 
       */
      SelectedAddon !: AddonsModel;
      GetAddon(index: number) {
            this._addonService.GetAddon(this.Plans[index].addonId)
                  .subscribe(data => {
                        this.SelectedAddon = data;
                  }, error => {
                        console.log(error);
                        this._addonService.toast.error({ detail: "An Error Occured!", duration: 4000 })
                  });
      }


      /**
       * @Action Assigns the Value in Service 
       * @param index 
       */
      EditSelectAddon(index: number) {
            this._addonService.EditId = this.Plans[index];
      }


      /**
       * Delete the Specific Item from view and DB
       * @param index 
       */
      OnDelete(index: number) {
            this._addonService.OnDelete(this.Plans[index].addonId).subscribe();
            this.Plans.splice(index, 1);
      }


      /**
       * Navigating to Add Addon
       */
      AddAddon() {
            this._addonService.router.navigate(['/admin/addon/add-addon']);
      }
}