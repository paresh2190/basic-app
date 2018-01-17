import { ElementRef, NgZone, MbscBase, AfterViewInit, OnDestroy, Observable, MbscOptionsService } from './frameworks/angular';
import { MbscCoreOptions } from './core/core';
export interface MbscListviewOptions extends MbscCoreOptions {
    actions?: Array<any> | {
        left?: any;
        right?: any;
    };
    actionsWidth?: number;
    context?: string | HTMLElement;
    striped?: boolean;
    animateIcons?: boolean;
    enhance?: boolean;
    fillAnimation?: boolean;
    fixedHeader?: boolean;
    hover?: 'left' | 'right' | {
        direction?: 'left' | 'right';
        time?: number;
        timeout?: number;
    };
    iconSlide?: boolean;
    itemGroups?: any;
    navigateOnDrop?: boolean;
    quickSwipe?: boolean;
    sortable?: boolean | {
        group?: boolean;
        handle?: boolean | 'left' | 'right';
        multilevel?: boolean;
    };
    sortDelay?: number;
    stages?: Array<any> | {
        left?: Array<any>;
        right?: Array<any>;
    };
    swipe?: boolean | 'left' | 'right' | ((args: {
        target: HTMLElement;
        index: number;
        direction: 'left' | 'right';
    }, inst: any) => (boolean | 'left' | 'right'));
    swipeLeft?(): void;
    swipeRight?(): void;
    vibrate?: boolean;
    undoText?: string;
    backText?: string;
    onItemTap?(event: {
        target: HTMLElement;
        domEvent: any;
        index: number;
    }, inst: any): void;
    onItemAdd?(event: {
        target: HTMLElement;
    }, inst: any): void;
    onItemRemove?(event: {
        target: HTMLElement;
    }, inst: any): void;
    onNavEnd?(event: {
        level: number;
        direction: 'left' | 'right';
        list: HTMLElement;
    }, inst: any): void;
    onNavStart?(event: {
        level: number;
        direction: 'left' | 'right';
        list: HTMLElement;
    }, inst: any): void;
    onSlideEnd?(event: {
        target: HTMLElement;
        index: number;
    }, inst: any): void;
    onSlideStart?(event: {
        target: HTMLElement;
        index: number;
    }, inst: any): void;
    onSort?(event: {
        target: HTMLElement;
        index: number;
    }, inst: any): void;
    onSortChange?(event: {
        target: HTMLElement;
        index: number;
    }, inst: any): void;
    onSortStart?(event: {
        target: HTMLElement;
        index: number;
    }, inst: any): void;
    onSortEnd?(event: {
        target: HTMLElement;
        index: number;
    }, inst: any): void;
    onSortUpdate?(event: {
        target: HTMLElement;
        index: number;
    }, inst: any): void;
    onStageChange?(event: {
        target: HTMLElement;
        index: number;
        stage: any;
    }): void;
}
export declare class MbscListviewService {
    private addSubject;
    private removeSubject;
    private cardSubject;
    notifyAdded(item: any): void;
    notifyRemoved(item: any): void;
    notifyCardPresence(isCard: boolean): void;
    onCardContent(): Observable<boolean>;
    onItemAdded(): Observable<any>;
    onItemRemoved(): Observable<any>;
}
export declare class MbscListviewItem implements AfterViewInit, OnDestroy {
    private elem;
    private lvService;
    id: number;
    icon: string;
    iconAlign: string;
    type: string;
    clone: any;
    readonly Index: any;
    readonly Element: any;
    constructor(elem: ElementRef, lvService: MbscListviewService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare class MbscListviewHeader extends MbscListviewItem {
    constructor(elem: ElementRef, lvService: MbscListviewService);
}
export declare class MbscListview extends MbscBase {
    private elem;
    zone: NgZone;
    private lvService;
    optionService: MbscOptionsService;
    actions: Array<any> | {
        left?: any;
        right?: any;
    };
    actionsWidth: number;
    context: string | HTMLElement;
    striped: boolean;
    animateIcons: boolean;
    enhance: boolean;
    fillAnimation: boolean;
    fixedHeader: boolean;
    hover: 'left' | 'right' | {
        direction?: 'left' | 'right';
        time?: number;
        timeout?: number;
    };
    iconSlide: boolean;
    itemGroups: any;
    navigateOnDrop: boolean;
    quickSwipe: boolean;
    sortable: boolean | {
        group?: boolean;
        handle?: boolean | 'left' | 'right';
        multilevel?: boolean;
    };
    sortDelay: number;
    stages: Array<any> | {
        left?: Array<any>;
        right?: Array<any>;
    };
    swipe: boolean | 'left' | 'right' | ((args: {
        target: HTMLElement;
        index: number;
        direction: 'left' | 'right';
    }, inst: any) => (boolean | 'left' | 'right'));
    swipeLeft: () => void;
    swipeRight: () => void;
    vibrate: boolean;
    undoText: string;
    backText: string;
    onItemTap: (event: {
        target: HTMLElement;
        domEvent: any;
        index: number;
    }, inst: any) => void;
    onItemAdd: (event: {
        target: HTMLElement;
    }, inst: any) => void;
    onItemRemove: (event: {
        target: HTMLElement;
    }, inst: any) => void;
    onNavEnd: (event: {
        level: number;
        direction: 'left' | 'right';
        list: HTMLElement;
    }, inst: any) => void;
    onNavStart: (event: {
        level: number;
        direction: 'left' | 'right';
        list: HTMLElement;
    }, inst: any) => void;
    onSlideEnd: (event: {
        target: HTMLElement;
        index: number;
    }, inst: any) => void;
    onSlideStart: (event: {
        target: HTMLElement;
        index: number;
    }, inst: any) => void;
    onSort: (event: {
        target: HTMLElement;
        index: number;
    }, inst: any) => void;
    onSortChange: (event: {
        target: HTMLElement;
        index: number;
    }, inst: any) => void;
    onSortStart: (event: {
        target: HTMLElement;
        index: number;
    }, inst: any) => void;
    onSortEnd: (event: {
        target: HTMLElement;
        index: number;
    }, inst: any) => void;
    onSortUpdate: (event: {
        target: HTMLElement;
        index: number;
    }, inst: any) => void;
    onStageChange: (event: {
        target: HTMLElement;
        index: number;
        stage: any;
    }) => void;
    options: MbscListviewOptions;
    inlineOptions(): MbscListviewOptions;
    cardContent: boolean;
    constructor(elem: ElementRef, zone: NgZone, lvService: MbscListviewService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
