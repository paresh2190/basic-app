import { MbscScrollerBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService, MbscOptionsService } from './frameworks/angular';
import './presets/timespan';
import { MbscScrollerOptions } from './core/core';
export interface MbscTimespanOptions extends MbscScrollerOptions {
    defaultValue?: number;
    max?: number;
    min?: number;
    steps?: Array<number>;
    useShortLabels?: boolean;
    wheelOrder?: string;
    labels?: Array<string>;
    labelsShort?: Array<string>;
}
export declare class MbscTimespan extends MbscScrollerBase {
    optionService: MbscOptionsService;
    defaultValue: number;
    max: number;
    min: number;
    steps: Array<number>;
    useShortLabels: boolean;
    wheelOrder: string;
    labels: Array<string>;
    labelsShort: Array<string>;
    inlineOptions(): MbscTimespanOptions;
    options: MbscTimespanOptions;
    value: number;
    onChangeEmitter: EventEmitter<number>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    setNewValue(v: number): void;
    ngAfterViewInit(): void;
}
export declare class MbscTimespanComponent extends MbscTimespan {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscTimespanOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
