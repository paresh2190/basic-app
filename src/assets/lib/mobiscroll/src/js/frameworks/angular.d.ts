import mobiscroll from '../core/dom';
import { $, extend, MbscCoreOptions, MbscFrameOptions, MbscScrollerOptions, MbscDataControlOptions } from '../core/core';
import { Directive, Component, Input, Output, EventEmitter, Optional, AfterViewInit, OnDestroy, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild, ViewChildren, NgZone, NgModule, Injectable, ContentChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgControl, ControlValueAccessor, FormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { MbscFormValueBase } from '../forms.angular';
export declare class MbscOptionsService {
    private _options;
    options: any;
}
export declare class MbscInputService {
    private _controlSet;
    isControlSet: boolean;
    private _componentRef;
    input: MbscFormValueBase;
}
export declare class MbscListService {
    private addRemoveSubject;
    notifyAddRemove(item: any): void;
    onAddRemove(): Observable<any>;
}
declare class MbscBase implements AfterViewInit, OnDestroy {
    protected initialElem: ElementRef;
    options: MbscCoreOptions;
    theme: string;
    lang: string;
    rtl: boolean;
    onInit: (event: any, inst: any) => void;
    onDestroy: (event: any, inst: any) => void;
    inlineOptions(): MbscCoreOptions;
    setThemeClasses(): void;
    _instance: any;
    element: any;
    readonly instance: any;
    protected setElement(): void;
    constructor(initialElem: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
declare abstract class MbscValueBase extends MbscBase {
    protected zone: NgZone;
    abstract setNewValue(v: any): void;
    constructor(initialElem: ElementRef, zone: NgZone);
    protected initialValue: any;
    protected setNewValueProxy(v: any): void;
}
declare abstract class MbscControlBase extends MbscValueBase implements ControlValueAccessor {
    protected control: NgControl;
    _inputService: MbscInputService;
    readonly optionExtensions: any;
    _needsTimeout: boolean;
    onChange: any;
    onTouch: any;
    onChangeEmitter: EventEmitter<any>;
    protected handleChange(element?: any): void;
    protected oldAccessor: any;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, _inputService: MbscInputService);
    overwriteAccessor(): void;
    ngAfterViewInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(v: any): void;
}
declare abstract class MbscDataControlMixin implements OnInit {
    options: MbscCoreOptions & MbscDataControlOptions;
    isMulti: boolean;
    previousData: Array<any>;
    noDataCheck: boolean;
    data: Array<any>;
    _instance: any;
    _inputService: any;
    setNewValue(v: any): void;
    cloneData(): void;
    ngOnInit(): void;
    abstract refreshData(newData: any): void;
    ngDoCheck(): void;
}
declare abstract class MbscDataControlBase extends MbscControlBase implements OnInit {
    options: MbscCoreOptions & MbscDataControlOptions;
    protected isMulti: boolean;
    private previousData;
    noDataCheck: boolean;
    data: Array<any>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService);
    setNewValue(v: any): void;
    cloneData(): void;
    ngOnInit(): void;
    abstract refreshData(newData: any): void;
    ngDoCheck(): void;
}
declare abstract class MbscFrameBase extends MbscControlBase {
    options: MbscFrameOptions;
    dropdown: boolean;
    anchor: string | HTMLElement;
    animate: boolean | 'fade' | 'flip' | 'pop' | 'swing' | 'slidevertical' | 'slidehorizontal' | 'slidedown' | 'slideup';
    buttons: Array<any>;
    closeOnOverlayTap: boolean;
    context: string | HTMLElement;
    disabled: boolean;
    display: 'top' | 'bottom' | 'bubble' | 'inline' | 'center';
    focusOnClose: boolean | string | HTMLElement;
    focusTrap: boolean;
    headerText: string | boolean | ((formattedValue: string) => string);
    showOnFocus: boolean;
    showOnTap: boolean;
    onBeforeClose: (event: {
        valueText: string;
        button: string;
    }, inst: any) => void;
    onBeforeShow: (event: any, inst: any) => void;
    onCancel: (event: {
        valuteText: string;
    }, inst: any) => void;
    onClose: (event: {
        valueText: string;
    }, inst: any) => void;
    onDestroy: (event: any, inst: any) => void;
    onFill: (event: any, inst: any) => void;
    onMarkupReady: (event: {
        target: HTMLElement;
    }, inst: any) => void;
    onPosition: (event: {
        target: HTMLElement;
        windowWidth: number;
        windowHeight: number;
    }, inst: any) => void;
    onShow: (event: {
        target: HTMLElement;
        valueText: string;
    }, inst: any) => void;
    inlineOptions(): MbscFrameOptions;
    readonly inline: boolean;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, _inputService: MbscInputService);
}
declare abstract class MbscScrollerBase extends MbscFrameBase {
    circular: boolean | Array<boolean>;
    height: number;
    layout: 'liquid' | 'fixed';
    maxWidth: number | Array<number>;
    minWidth: number | Array<number>;
    multiline: number;
    readOnly: boolean | Array<boolean>;
    rows: number;
    showLabel: boolean;
    showScrollArrows: boolean;
    wheels: Array<any>;
    width: number;
    cancelText: string;
    clearText: string;
    selectedText: string;
    setText: string;
    onWheelChange: (event: {
        valueText?: string;
    }, inst: any) => void;
    validate: (data: {
        values: Array<any>;
        index: number;
        direction: number;
    }, inst: any) => (void | {
        disabled?: Array<any>;
        valid?: Array<any>;
    });
    onSet: (event: {
        valueText?: string;
    }, inst: any) => void;
    onItemTap: (event: any, inst: any) => void;
    onClear: (event: any, inst: any) => void;
    inlineOptions(): MbscScrollerOptions;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, _inputService: MbscInputService);
}
declare function applyMixins(derivedCtor: any, baseCtors: any[]): void;
declare function deepEqualsArray(a1: Array<any>, a2: Array<any>): boolean;
declare const INPUT_TEMPLATE: string;
export { $, extend, mobiscroll, MbscBase, MbscValueBase, MbscControlBase, MbscDataControlBase, MbscFrameBase, MbscScrollerBase, MbscDataControlMixin, applyMixins, deepEqualsArray, INPUT_TEMPLATE, Directive, Component, Input, Output, EventEmitter, Optional, AfterViewInit, OnDestroy, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild, ViewChildren, ContentChildren, QueryList, NgZone, NgControl, ControlValueAccessor, FormsModule, NgModule, CommonModule, Injectable, Observable, Subject };
