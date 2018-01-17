import { ElementRef, MbscBase, MbscOptionsService } from './frameworks/angular';
import { MbscCoreOptions } from './core/core';
import { MbscListviewService } from './listview.angular';
export interface MbscCardOptions extends MbscCoreOptions {
}
export declare class MbscCard extends MbscBase {
    optionsService: MbscOptionsService;
    lvService: MbscListviewService;
    constructor(host: ElementRef, optionsService: MbscOptionsService, lvService: MbscListviewService);
    ngAfterViewInit(): void;
}
export declare class MbscCardComponent extends MbscCard {
    optionsService: MbscOptionsService;
    options: MbscCardOptions;
    constructor(host: ElementRef, optionsService: MbscOptionsService, lvService: MbscListviewService);
}
export declare class MbscCardHeader {
}
export declare class MbscCardContent {
}
export declare class MbscCardFooter {
}
export declare class MbscCardTitle {
}
export declare class MbscCardSubtitle {
}
