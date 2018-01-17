import { MbscBase, ElementRef, OnInit, MbscOptionsService } from './frameworks/angular';
import { MbscCoreOptions } from './core/core';
export interface MbscPageOptions extends MbscCoreOptions {
    context?: string | HTMLElement;
}
export declare class MbscPage extends MbscBase implements OnInit {
    optionsService: MbscOptionsService;
    optionsObj: MbscPageOptions;
    options: MbscPageOptions;
    initElem: ElementRef;
    constructor(hostElement: ElementRef, optionsService: MbscOptionsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export declare class MbscNote {
    initialElem: ElementRef;
    readonly classNames: string;
    color: string;
    constructor(initialElem: ElementRef);
}
export declare class MbscAvatar {
    src: string;
    alt: string;
}
