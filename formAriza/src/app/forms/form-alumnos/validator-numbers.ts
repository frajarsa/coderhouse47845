import { FormControl, AbstractControl } from '@angular/forms';


export function ValidateNumbers(control: AbstractControl): boolean {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(control.value);
}