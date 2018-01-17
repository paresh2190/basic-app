import { MbscScrollerBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService, MbscOptionsService } from './frameworks/angular';
import './presets/temperature';
import './presets/distance';
import './presets/speed';
import './presets/force';
import './presets/mass';
import { MbscScrollerOptions } from './core/core';
export interface MbscMeasurementBaseOptions extends MbscScrollerOptions {
    max?: number;
    min?: number;
    defaultValue?: string;
    invalid?: Array<any>;
    scale?: number;
    step?: number;
    wholeText?: string;
    fractionText?: string;
    signText?: string;
}
export interface MbscMeasurementOptions extends MbscMeasurementBaseOptions {
    convert(val: number, unit1: string, unit2: string): number;
}
export interface MbscTemperatureOptions extends MbscMeasurementBaseOptions {
    convert?: boolean;
    defaultUnit?: string;
    unitNames?: any;
    units?: Array<string>;
}
export interface MbscSpeedOptions extends MbscTemperatureOptions {
}
export interface MbscMassOptions extends MbscTemperatureOptions {
}
export interface MbscDistanceOptions extends MbscTemperatureOptions {
}
export interface MbscForceOptions extends MbscTemperatureOptions {
}
export declare class MbscMeasurementBase extends MbscScrollerBase {
    optionService: MbscOptionsService;
    max: number;
    min: number;
    defaultValue: string;
    invalid: Array<any>;
    scale: number;
    step: number;
    defaultUnit: string;
    unitNames: any;
    units: Array<string>;
    wholeText: string;
    fractionText: string;
    signText: string;
    inlineOptions(): MbscMeasurementBaseOptions;
    protected preset: string;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    setNewValue(v: string): void;
    ngAfterViewInit(): void;
}
export declare class MbscMeasurementChild extends MbscMeasurementBase {
    convert: boolean;
    inlineOptions(): MbscTemperatureOptions;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
}
export declare class MbscMeasurement extends MbscMeasurementBase {
    convert: (val: number, unit1: string, unit2: string) => number;
    inlineOptions(): MbscMeasurementOptions;
    options: MbscMeasurementOptions;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
}
export declare class MbscMeasurementComponent extends MbscMeasurement {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscMeasurementOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscTemperature extends MbscMeasurementChild {
    options: MbscTemperatureOptions;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
}
export declare class MbscTemperatureComponent extends MbscTemperature {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscTemperatureOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscDistance extends MbscMeasurementBase {
    options: MbscDistanceOptions;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
}
export declare class MbscDistanceComponent extends MbscDistance {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscDistanceOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscSpeed extends MbscMeasurementBase {
    options: MbscSpeedOptions;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
}
export declare class MbscSpeedComponent extends MbscSpeed {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscSpeedOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscForce extends MbscMeasurementBase {
    options: MbscForceOptions;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
}
export declare class MbscForceComponent extends MbscForce {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscForceOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscMass extends MbscMeasurementBase {
    options: MbscMassOptions;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
}
export declare class MbscMassComponent extends MbscMass {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscMassOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
