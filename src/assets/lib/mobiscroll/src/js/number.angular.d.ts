import { MbscScrollerBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService, MbscOptionsService } from './frameworks/angular';
import './presets/number';
import { MbscScrollerOptions } from './core/core';
export interface MbscNumberOptions extends MbscScrollerOptions {
    defaultValue?: string;
    invalid?: Array<any>;
    max?: number;
    min?: number;
    scale?: number;
    step?: number;
    wholeText?: string;
    fractionText?: string;
    signText?: string;
}
export declare class MbscNumber extends MbscScrollerBase {
    optionService: MbscOptionsService;
    defaultValue: string;
    invalid: Array<any>;
    max: number;
    min: number;
    scale: number;
    step: number;
    wholeText: string;
    fractionText: string;
    signText: string;
    inlineOptions(): MbscNumberOptions;
    options: MbscNumberOptions;
    value: any;
    onChangeEmitter: EventEmitter<number>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    setNewValue(v: any): void;
    ngAfterViewInit(): void;
}
export declare class MbscNumberComponent extends MbscNumber {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscNumberOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
