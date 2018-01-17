import { MbscDataControlMixin, ElementRef, NgZone, MbscOptionsService } from './frameworks/angular';
import './presets/eventcalendar';
import { MbscDataFrameOptions } from './core/core';
import { MbscCalBase } from './calendar.angular';
export interface MbscEventcalendarOptions extends MbscDataFrameOptions {
    calendarHeight?: number;
    calendarWidth?: number;
    calendarScroll?: 'horizontal' | 'vertical';
    data?: Array<{
        start?: Date;
        end?: Date;
        d?: Date | string | number;
        text?: string;
        color?: string;
    }>;
    labels?: Array<{
        start?: Date;
        end?: Date;
        d?: string | Date;
        text?: string;
        color?: string;
        background?: string;
        cssClass?: string;
    }>;
    marked?: Array<Date | number | string | {
        d: Date | number | string;
        color?: string;
        background?: string;
        cssClass?: string;
    }>;
    colors?: Array<{
        d: Date | number | string;
        background?: string;
        cssClass?: string;
    }>;
    eventBubble?: boolean;
    invalid?: Array<string | {
        start: Date;
        end: Date;
        d?: string;
    } | Date>;
    layout?: 'liquid' | 'fixed';
    max?: Date;
    min?: Date;
    months?: number | 'auto';
    showEventCount?: boolean;
    showOnFocus?: boolean;
    showOnTap?: boolean;
    showOuterDays?: boolean;
    valid?: Array<string | {
        start: Date;
        end: Date;
        d?: string;
    } | Date>;
    weekCounter?: 'year' | 'month';
    weekDays?: 'full' | 'short' | 'min';
    yearChange?: boolean;
    amText?: string;
    dateFormat?: string;
    dayNames?: Array<string>;
    dayNamesMin?: Array<string>;
    dayNamesShort?: Array<string>;
    firstDay?: number;
    monthNames?: Array<string>;
    monthNamesShort?: Array<string>;
    newText?: string;
    pmText?: string;
    timeFormat?: string;
    onDayChange?(event: {
        date: Date;
        marked?: any;
        selected?: 'start' | 'end';
        target: HTMLElement;
    }, inst: any): void;
    onMonthChange?(event: {
        year: number;
        month: number;
    }, inst: any): void;
    onMonthLoading?(event: {
        year: number;
        month: number;
    }, inst: any): void;
    onMonthLoaded?(event: {
        year: number;
        month: number;
    }, inst: any): void;
}
export declare class MbscEventcalendar extends MbscCalBase implements MbscDataControlMixin {
    optionService: MbscOptionsService;
    data: Array<{
        start?: Date;
        end?: Date;
        d?: Date | string | number;
        text?: string;
        color?: string;
    }>;
    layout: 'liquid' | 'fixed';
    showEventCount: boolean;
    eventBubble: boolean;
    inlineOptions(): MbscEventcalendarOptions;
    options: MbscEventcalendarOptions;
    constructor(initialElem: ElementRef, zone: NgZone, optionService: MbscOptionsService);
    refreshData(newData: any): void;
    ngAfterViewInit(): void;
    isMulti: boolean;
    previousData: Array<any>;
    noDataCheck: boolean;
    setNewValue(v: any): void;
    cloneData(): void;
    ngOnInit(): void;
    ngDoCheck(): void;
}
export declare class MbscEventcalendarComponent extends MbscEventcalendar {
    data: Array<{
        start?: Date;
        end?: Date;
        d?: Date | string | number;
        text?: string;
        color?: string;
    }>;
    display: 'top' | 'bottom' | 'bubble' | 'inline' | 'center';
    constructor(initialElem: ElementRef, zone: NgZone, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
