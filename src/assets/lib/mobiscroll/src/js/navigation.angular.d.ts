import { ElementRef, NgZone, QueryList, MbscOptionsService } from './frameworks/angular';
import { MbscNotifyItemService } from './classes/scrollview-base.angular';
import { MbscNavBaseOptions, MbscNavItemBase, MbscNavigationBase } from './classes/navigation-base.angular';
export interface MbscNavOptions extends MbscNavBaseOptions {
    type: 'bottom' | 'hamburger' | 'tab';
    moreText: string;
    moreIcon: string;
    menuText: string;
    menuIcon: string;
}
export declare class MbscNavItem extends MbscNavItemBase {
    badge: string;
    constructor(notifyItemService: MbscNotifyItemService, elem: ElementRef);
}
export declare class MbscNavBaseComponent extends MbscNavigationBase {
    optionService: MbscOptionsService;
    type: 'bottom' | 'hamburger' | 'tab';
    select: 'single';
    moreText: string;
    moreIcon: string;
    menuText: string;
    menuIcon: string;
    inlineOptions(): MbscNavOptions;
    constructor(initialElem: ElementRef, zone: NgZone, notifyItemService: MbscNotifyItemService, optionService: MbscOptionsService);
    items: QueryList<MbscNavItemBase>;
    ngAfterViewInit(): void;
}
export declare class MbscBottomNav extends MbscNavBaseComponent {
    constructor(initialElem: ElementRef, zone: NgZone, navItemService: MbscNotifyItemService, optionService: MbscOptionsService);
}
export declare class MbscHamburgerNav extends MbscNavBaseComponent {
    constructor(initialElem: ElementRef, zone: NgZone, navItemService: MbscNotifyItemService, optionService: MbscOptionsService);
}
export declare class MbscTabNav extends MbscNavBaseComponent {
    constructor(initialElem: ElementRef, zone: NgZone, navItemService: MbscNotifyItemService, optionService: MbscOptionsService);
}
