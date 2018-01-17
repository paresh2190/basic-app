import { ElementRef, NgZone, MbscOptionsService } from './frameworks/angular';
import { MbscScrollViewOptions, MbscScrollViewBase, MbscNotifyItemService, MbscScrollItemBase } from './classes/scrollview-base.angular';
export declare class MbscScrollView extends MbscScrollViewBase {
    optionService: MbscOptionsService;
    options: MbscScrollViewOptions;
    constructor(initialElem: ElementRef, zone: NgZone, notifyItemService: MbscNotifyItemService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
export declare class MbscScrollViewItem extends MbscScrollItemBase {
    constructor(initialElem: ElementRef, notifyItemService: MbscNotifyItemService);
}
export declare class MbscScrollViewComponent extends MbscScrollView {
    options: MbscScrollViewOptions;
    constructor(initialElem: ElementRef, zone: NgZone, notifyItemService: MbscNotifyItemService, optionService: MbscOptionsService);
}
export declare class MbscScrollViewItemComponent extends MbscScrollViewItem {
    constructor(initialElem: ElementRef, notifyItemService: MbscNotifyItemService);
}
