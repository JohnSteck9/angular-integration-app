import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularShopQqWrapperComponent } from '../projects-wrappers/components/angular-shop-qq-wrapper/angular-shop-qq-wrapper.component';
import { AngularShopWwWrapperComponent } from '../projects-wrappers/components/angular-shop-ww-wrapper/angular-shop-ww-wrapper.component';
import { ReactShopEeWrapperComponent } from '../projects-wrappers/components/react-shop-ee-wrapper/react-shop-ee-wrapper.component';
import { ReactShopRrWrapperComponent } from '../projects-wrappers/components/react-shop-rr-wrapper/react-shop-rr-wrapper.component';
import { MainWrapperComponent } from '../projects-wrappers/components/main-wrapper/main-wrapper.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './components/app/app.component';

@NgModule({
    declarations: [
        MainWrapperComponent,
        AngularShopQqWrapperComponent,
        AngularShopWwWrapperComponent,
        ReactShopEeWrapperComponent,
        ReactShopRrWrapperComponent,
        HeaderComponent,
        PageNotFoundComponent,
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
