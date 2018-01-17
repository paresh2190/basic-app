import { ElementRef, QueryList, NgZone, MbscOptionsService } from './frameworks/angular';
import { MbscNotifyItemService } from './classes/scrollview-base.angular';
import { MbscNavBaseOptions, MbscNavItemBase, MbscNavigationBase } from './classes/navigation-base.angular';
export interface MbscOptionlistOptions extends MbscNavBaseOptions {
    paging?: boolean;
    select?: 'single' | 'multiple' | 'off';
    snap?: boolean;
    type?: 'options' | 'tabs' | 'menu';
    variant?: 'a' | 'b';
    threshold?: number;
}
export declare class MbscOptionItem extends MbscNavItemBase {
    constructor(notifyItemService: MbscNotifyItemService, _elem: ElementRef);
}
export declare class MbscOptionlist extends MbscNavigationBase {
    optionService: MbscOptionsService;
    select: 'single' | 'multiple' | 'off';
    inlineOptions(): MbscOptionlistOptions;
    constructor(initialElem: ElementRef, zone: NgZone, notifyItemService: MbscNotifyItemService, optionService: MbscOptionsService);
    items: QueryList<MbscNavItemBase>;
    ngAfterViewInit(): void;
}
