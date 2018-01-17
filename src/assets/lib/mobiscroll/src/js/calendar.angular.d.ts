import { ElementRef, NgZone, NgControl, EventEmitter, OnInit, MbscInputService, MbscOptionsService } from './frameworks/angular';
import './presets/calendar';
import { MbscCalbaseOptions } from './core/core';
import { MbscDatetimeBase } from './datetime.angular';
export interface MbscCalendarOptions extends MbscCalbaseOptions {
    controls?: 'time' | 'date' | 'calendar';
    firstSelectDay?: number;
    selectType?: 'day' | 'week';
    select?: 'single' | 'multiple' | number;
    setOnDayTap?: boolean;
    onSetDate?(event: {
        date: Date;
        control?: 'calendar' | 'date' | 'time';
    }, inst: any): void;
}
export declare abstract class MbscCalBase extends MbscDatetimeBase {
    calendarHeight: number;
    calendarWidth: number;
    calendarScroll: 'horizontal' | 'vertical';
    colors: Array<{
        d: Date | number | string;
        background?: string;
        cssClass?: string;
    }>;
    counter: boolean;
    defaultValue: Date | Array<Date>;
    events: Array<{
        start?: Date;
        end?: Date;
        d?: string | Date;
        text?: string;
        color?: string;
        background?: string;
        cssClass?: string;
    }>;
    labels: Array<{
        start?: Date;
        end?: Date;
        d?: string | Date;
        text?: string;
        color?: string;
        background?: string;
        cssClass?: string;
    }>;
    marked: Array<Date | number | string | {
        d: Date | number | string;
        color?: string;
        background?: string;
        cssClass?: string;
    }>;
    months: number | 'auto';
    outerMonthChange: boolean;
    showOuterDays: boolean;
    tabs: boolean;
    weekCounter: 'year' | 'month';
    weekDays: 'full' | 'short' | 'min';
    weeks: number;
    yearChange: boolean;
    calendarText: string;
    dateText: string;
    dayNamesMin: Array<string>;
    firstDay: number;
    timeText: string;
    onTabChange: (event: {
        tab: 'calendar' | 'date' | 'time';
    }, inst: any) => void;
    onDayChange: (event: {
        date: Date;
        marked?: any;
        selected?: 'start' | 'end';
        target: HTMLElement;
    }, inst: any) => void;
    onMonthChange: (event: {
        year: number;
        month: number;
    }, inst: any) => void;
    onMonthLoading: (event: {
        year: number;
        month: number;
    }, inst: any) => void;
    onMonthLoaded: (event: {
        year: number;
        month: number;
    }, inst: any) => void;
    inlineOptions(): MbscCalbaseOptions;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
}
export declare class MbscCalendar extends MbscCalBase implements OnInit {
    optionService: MbscOptionsService;
    controls: Array<'time' | 'date' | 'calendar'>;
    firstSelectDay: number;
    selectType: 'day' | 'week';
    select: 'single' | 'multiple' | number;
    setOnDayTap: boolean;
    onSetDate: (event: {
        date: Date;
        control?: 'calendar' | 'date' | 'time';
    }, inst: any) => void;
    inlineOptions(): MbscCalendarOptions;
    options: MbscCalendarOptions;
    private isMulti;
    value: any;
    onChangeEmitter: EventEmitter<any>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    setNewValue(v: any): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
}
export declare class MbscCalendarComponent extends MbscCalendar {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    placeholder: string;
    error: boolean;
    errorMessage: string;
    options: MbscCalendarOptions;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
