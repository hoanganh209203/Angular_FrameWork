import { Routes } from '@angular/router';
// import { ProductsComponent } from './components/products/products.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HomeComponent } from './page/home/home.component';
export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomePageComponent,

    },
    // {
    //     path: "products",
    //     component: ProductsComponent,
    // },
    {
        path: "**",
        component: NotFoundPageComponent,
    }
];
