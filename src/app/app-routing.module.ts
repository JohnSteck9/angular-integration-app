import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactShopEeWrapperComponent } from '../projects-wrappers/components/react-shop-ee-wrapper/react-shop-ee-wrapper.component';
import { ReactShopRrWrapperComponent } from '../projects-wrappers/components/react-shop-rr-wrapper/react-shop-rr-wrapper.component';
import { AngularShopQqWrapperComponent } from '../projects-wrappers/components/angular-shop-qq-wrapper/angular-shop-qq-wrapper.component';
import { AngularShopWwWrapperComponent } from '../projects-wrappers/components/angular-shop-ww-wrapper/angular-shop-ww-wrapper.component';
import { MainWrapperComponent } from '../projects-wrappers/components/main-wrapper/main-wrapper.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
    {
        path: '',
        component: MainWrapperComponent,
    },
    {
        path: 'react1',
        component: ReactShopEeWrapperComponent,
    },
    {
        path: 'react2',
        component: ReactShopRrWrapperComponent,
    },
    {
        path: 'angular1',
        component: AngularShopQqWrapperComponent,
    },
    {
        path: 'angular2',
        component: AngularShopWwWrapperComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
