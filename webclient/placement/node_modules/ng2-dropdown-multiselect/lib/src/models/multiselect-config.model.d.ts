import { IMultiselectConfig } from '../interfaces/multiselect-config.interface';
export declare class MultiselectConfig implements IMultiselectConfig {
    buttonLabel: string;
    allSelected: boolean;
    maxInline: number;
    showCheckAll: boolean;
    showUncheckAll: boolean;
    buttonClasses: string[];
    checkClasses: string[];
    uncheckClasses: string[];
    scrollingHeight: number;
    constructor();
}
