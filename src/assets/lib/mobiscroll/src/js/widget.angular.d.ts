import { ElementRef, MbscBase, MbscOptionsService } from './frameworks/angular';
import { MbscFrameOptions } from './core/core';
export interface MbscWidgetOptions extends MbscFrameOptions {
}
export declare class MbscWidget extends MbscBase {
    optionService: MbscOptionsService;
    options: MbscWidgetOptions;
    constructor(initialElem: ElementRef, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
