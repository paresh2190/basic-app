import { MbscScrollerBase, MbscDataControlMixin, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService, MbscOptionsService } from './frameworks/angular';
import './presets/treelist';
import { MbscScrollerOptions } from './core/core';
export interface MbscTreelistOptions extends MbscScrollerOptions {
    defaultValue?: Array<number>;
    inputClass?: string;
    invalid?: Array<any>;
    labels?: Array<string>;
    placeholder?: string;
    showInput?: boolean;
}
export declare class MbscTreelist extends MbscScrollerBase implements MbscDataControlMixin {
    optionService: MbscOptionsService;
    defaultValue: Array<number>;
    inputClass: string;
    invalid: Array<any>;
    labels: Array<string>;
    placeholder: string;
    showInput: boolean;
    data: Array<any>;
    inlineOptions(): MbscTreelistOptions;
    options: MbscTreelistOptions;
    target: any;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
    refreshData(newData: any): void;
    isMulti: boolean;
    previousData: Array<any>;
    noDataCheck: boolean;
    setNewValue(v: string): void;
    cloneData(): void;
    ngOnInit(): void;
    ngDoCheck(): void;
}
export declare class MbscTreelistComponent extends MbscTreelist {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscTreelistOptions;
    data: Array<any>;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
