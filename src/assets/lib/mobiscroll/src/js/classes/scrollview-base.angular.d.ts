import { MbscBase, ElementRef, NgZone, Observable, AfterViewInit, OnDestroy } from '../frameworks/angular';
import { MbscCoreOptions } from '../core/core';
export interface MbscScrollViewOptions extends MbscCoreOptions {
    context?: string | HTMLElement;
    itemWidth?: number;
    layout?: 'liquid' | 'fixed';
    onItemTap?(event: {
        target: HTMLElement;
    }, inst: any): void;
    onMarkupReady?(event: {
        target: HTMLElement;
    }, inst: any): void;
    onAnimationStart?(event: any, inst: any): void;
    onAnimationEnd?(event: any, inst: any): void;
    onMove?(event: any, inst: any): void;
    onGestureStart?(event: any, inst: any): void;
    onGestureEnd?(event: any, inst: any): void;
}
export declare class MbscNotifyItemService {
    private _instanceSubject;
    private _addRemoveSubject;
    notifyInstanceReady(instance: any): void;
    notifyAddRemove(item: any): void;
    onInstanceReady(): Observable<any>;
    onAddRemove(): Observable<any>;
}
export declare class MbscScrollItemBase implements AfterViewInit, OnDestroy {
    notifyItemService: MbscNotifyItemService;
    _elem: ElementRef;
    id: string;
    _instance: any;
    readonly nativeElement: any;
    constructor(notifyItemService: MbscNotifyItemService, _elem: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare class MbscScrollViewBase extends MbscBase {
    zone: NgZone;
    notifyItemService: MbscNotifyItemService;
    context: string | HTMLElement;
    itemWidth: number;
    layout: 'liquid' | 'fixed';
    snap: boolean;
    threshold: number;
    paging: boolean;
    onItemTap: (event: {
        target: HTMLElement;
    }, inst: any) => void;
    onMarkupReady: (event: {
        target: HTMLElement;
    }, inst: any) => void;
    onAnimationStart: (event: any, inst: any) => void;
    onAnimationEnd: (event: any, inst: any) => void;
    onMove: (event: any, inst: any) => void;
    onGestureStart: (event: any, inst: any) => void;
    onGestureEnd: (event: any, inst: any) => void;
    inlineOptions(): MbscScrollViewOptions;
    constructor(initialElem: ElementRef, zone: NgZone, notifyItemService: MbscNotifyItemService);
}
