import { MbscScrollerBase, MbscDataControlMixin, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService, MbscListService, OnInit, OnDestroy, AfterViewInit, MbscOptionsService } from './frameworks/angular';
import './presets/image';
import { MbscScrollerOptions } from './core/core';
export interface MbscImageOptions extends MbscScrollerOptions {
    defaultValue?: Array<number>;
    enhance?: boolean;
    inputClass?: string;
    invalid?: Array<any>;
    labels?: Array<string>;
    placeholder?: string;
    showInput?: boolean;
}
export declare class MbscImage extends MbscScrollerBase implements MbscDataControlMixin {
    optionService: MbscOptionsService;
    defaultValue: Array<number>;
    enhance: boolean;
    inputClass: string;
    invalid: Array<any>;
    labels: Array<string>;
    placeholder: string;
    showInput: boolean;
    data: Array<any>;
    inlineOptions(): MbscImageOptions;
    options: MbscImageOptions;
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
export declare class MbscImageComponent extends MbscImage implements OnInit {
    listService: MbscListService;
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscImageOptions;
    data: Array<any>;
    label: string;
    placeholder: string;
    itemWrapper: ElementRef;
    inlineOptions(): MbscImageOptions;
    setElement(): void;
    constructor(initialElem: ElementRef, zone: NgZone, listService: MbscListService, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export declare class MbscImageItem implements AfterViewInit, OnDestroy {
    listService: MbscListService;
    value: string | number;
    icon: string;
    constructor(listService: MbscListService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
