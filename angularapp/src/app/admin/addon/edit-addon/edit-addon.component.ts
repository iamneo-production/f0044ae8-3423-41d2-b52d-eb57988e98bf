import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AddonsModel } from '../../../shared/AddonModel';
import { AddonService } from 'src/app/services/addon.service';

@Component({
    selector: 'app-edit-addons',
    templateUrl: './edit-addon.component.html',
    styleUrls: ['./edit-addon.component.css']
})
export class EditAddonsComponent implements OnInit {

    constructor(private _addonService: AddonService) { }

    // Stores Selected Editable Value from Addon Service
    AddonValue !: AddonsModel;

    // Reactive Form Control Variable
    EditAddonForm !: FormGroup;
    ngOnInit(): void {

        //Assigning Editable Value In Edit Page
        this.AddonValue = this._addonService.EditId;

        //Reactive From Control Initialization
        this.EditAddonForm = new FormGroup({
            _AddonName: new FormControl(this.AddonValue.addonName, [Validators.required]),
            _AddonPrice: new FormControl(this.AddonValue.addonPrice, [Validators.required ,  Validators.pattern("[0-9]{1,5}")]),
            _AddonDetails: new FormControl(this.AddonValue.addonDetails, [Validators.required]),
            _AddonId: new FormControl(this.AddonValue.addonId, [Validators.required]),
            _AddonValidity: new FormControl(this.AddonValue.addonValidity, [Validators.required ,  Validators.pattern("[0-9]{1,5}")]),
        });
    }


    // *----------------*--------------*-------------

    /**
     * Http Put Request to Change Values in AddonModel
     */
    UpdateAddons() {
        // Gets The value from the Addon Page Fields
        const body: AddonsModel = {
            addonId: this.EditAddonForm?.get('_AddonId')?.value,
            addonName: this.EditAddonForm?.get('_AddonName')?.value,
            addonPrice: this.EditAddonForm?.get('_AddonPrice')?.value,
            addonDetails: this.EditAddonForm?.get('_AddonDetails')?.value,
            addonValidity: this.EditAddonForm?.get('_AddonValidity')?.value
        }
        let params = this.EditAddonForm.get('_AddonId')?.value;

        // Put Request from Admin Service.
        this._addonService.EditAddon(params, body).subscribe();

        // Back to Addons page
        setTimeout(() => {
            this._addonService.router.navigate(["admin/addon/view-addons"]);
        }, 100);
    }
}