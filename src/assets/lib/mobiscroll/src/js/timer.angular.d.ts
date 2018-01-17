import { MbscScrollerBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService, MbscOptionsService } from './frameworks/angular';
import './presets/timer';
import { MbscScrollerOptions } from './core/core';
export interface MbscTimerOptions extends MbscScrollerOptions {
    autostart?: boolean;
    maxWheel?: 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds' | 'fract';
    mode?: 'countdown' | 'stopwatch';
    step?: number;
    targetTime?: number;
    useShortLabels?: boolean;
    hideText?: string;
    labels?: Array<string>;
    labelsShort?: Array<string>;
    lapText?: string;
    resetText?: string;
    startText?: string;
    stopText?: string;
    lap?(event: {
        ellapsed: number;
        lap: number;
        laps: Array<number>;
    }, inst: any): void;
    onFinish?(event: {
        time: number;
    }, inst: any): void;
    onReset?(event: any, inst: any): void;
    onStart?(event: any, inst: any): void;
    onStop?(event: {
        ellapsed: number;
    }, inst: any): void;
}
export declare class MbscTimer extends MbscScrollerBase {
    optionService: MbscOptionsService;
    autostart: boolean;
    maxWheel: 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds' | 'fract';
    mode: 'countdown' | 'stopwatch';
    step: number;
    targetTime: number;
    useShortLabels: boolean;
    hideText: string;
    labels: Array<string>;
    labelsShort: Array<string>;
    lapText: string;
    resetText: string;
    startText: string;
    stopText: string;
    lap: (event: {
        ellapsed: number;
        lap: number;
        laps: Array<number>;
    }, inst: any) => void;
    onFinish: (event: {
        time: number;
    }, inst: any) => void;
    onReset: (event: any, inst: any) => void;
    onStart: (event: any, inst: any) => void;
    onStop: (event: {
        ellapsed: number;
    }, inst: any) => void;
    inlineOptions(): MbscTimerOptions;
    options: MbscTimerOptions;
    value: any;
    onChangeEmitter: EventEmitter<any>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    setNewValue(v: any): void;
    protected handleChange(): void;
    ngAfterViewInit(): void;
}
export declare class MbscTimerComponent extends MbscTimer {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscTimerOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
