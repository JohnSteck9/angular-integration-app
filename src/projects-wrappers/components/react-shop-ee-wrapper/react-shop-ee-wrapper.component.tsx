import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactShopEeProject } from '../../../projects/react-shop-ee/ReactShopEe';
import { createRoot, Root } from 'react-dom/client';

const containerElementName = 'customReactComponentContainer';

@Component({
    selector: 'app-react-shop-rr-wrapper',
    template: `<span #${containerElementName}>ReactShopEeWrapperComponent</span>`,
    encapsulation: ViewEncapsulation.None,
})
export class ReactShopEeWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;

    @Input() public counter = 1;
    @Output() public componentClick = new EventEmitter<void>();

    root: Root | undefined;

    constructor() {
        this.handleDivClicked = this.handleDivClicked.bind(this);
    }

    handleDivClicked() {
        if (this.componentClick) {
            this.componentClick.emit();
            this.render();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
      this.render();
    }

    ngAfterViewInit() {
        this.root = createRoot(this.containerRef.nativeElement);
        this.render();
    }

    ngOnDestroy() {
        this.root?.unmount();
    }

    private render() {
        const { counter } = this;

        this.root?.render(
            <React.StrictMode>
                <div>
                    <ReactShopEeProject counter={counter} onClick={this.handleDivClicked}/>
                </div>
            </React.StrictMode>
        );
    }
}
