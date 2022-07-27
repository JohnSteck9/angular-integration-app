import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { ReactShopRrProject } from '../../../projects/react-shop-rr/ReactShopRr';

const containerElementName = 'reactProject2';

@Component({
    selector: 'app-react-shop-rr-wrapper',
    template: `<div #${containerElementName}></div>`,
})
export class ReactShopRrWrapperComponent implements OnDestroy, AfterViewInit {
    @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;

    root: Root | undefined;

    ngAfterViewInit() {
        this.root = createRoot(this.containerRef.nativeElement);
        this.render();
    }

    ngOnDestroy() {
        this.root?.unmount();
    }

    private render() {
        this.root?.render(
            <React.StrictMode>
                <ReactShopRrProject/>
            </React.StrictMode>
        );
    }
}
