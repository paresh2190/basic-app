import { MbscFrameBase, MbscDataControlMixin, ElementRef, NgZone, NgControl, EventEmitter, MbscInputService, MbscOptionsService } from './frameworks/angular';
import { MbscDataFrameOptions } from './core/core';
export interface MbscColorOptions extends MbscDataFrameOptions {
    clear?: boolean;
    data?: Array<string | {
        color: string;
    }>;
    defaultValue?: string;
    enhance?: boolean;
    format?: 'hex' | 'rgb' | 'hsl';
    inputClass?: string;
    mode?: 'preset' | 'refine';
    navigation?: 'horizontal' | 'vertical';
    preview?: boolean;
    previewText?: boolean;
    rows?: number;
    valueText?: string;
    onSet?(event: {
        valueText: string;
    }, inst: any): void;
    onClear?(event: any, inst: any): void;
}
export declare class MbscColor extends MbscFrameBase implements MbscDataControlMixin {
    optionService: MbscOptionsService;
    clear: boolean;
    data: Array<string | {
        color: string;
    }>;
    defaultValue: string;
    enhance: boolean;
    format: 'hex' | 'rgb' | 'hsl';
    inputClass: string;
    mode: 'preset' | 'refine';
    navigation: 'horizontal' | 'vertical';
    preview: boolean;
    previewText: boolean;
    rows: number;
    valueText: string;
    select: 'single' | 'multiple' | number;
    onSet: (event: {
        valueText: string;
    }, inst: any) => void;
    onClear: (event: any, inst: any) => void;
    inlineOptions(): MbscColorOptions;
    options: MbscColorOptions;
    value: any;
    onChangeEmitter: EventEmitter<any>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    refreshData(newData: any): void;
    ngAfterViewInit(): void;
    isMulti: boolean;
    previousData: Array<any>;
    noDataCheck: boolean;
    setNewValue(): void;
    cloneData(): void;
    ngOnInit(): void;
    ngDoCheck(): void;
}
export declare class MbscColorComponent extends MbscColor {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscColorOptions;
    placeholder: string;
    data: Array<string | {
        color: string;
    }>;
    enhance: boolean;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
