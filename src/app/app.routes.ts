import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AdminsComponent } from './components/admins/admins.component';
import { ProductsComponent } from './components/admins/products/products.component';
import { NotFoundPageComponent } from './components/clients/not-found-page/not-found-page.component';
import { ProductDetailComponent } from './components/clients/product-detail/product-detail.component';
import { AdminHomepageComponent } from './components/admins/admin-homepage/admin-homepage.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginPageComponent } from './components/clients/login-page/login-page.component';
export const routes: Routes = [
    {
        path: "admin",
        component: AdminsComponent,
        children: [
            {
                path: '',
                component:AdminHomepageComponent ,
            },
            {
                path: 'products',
                component: ProductsComponent ,
            }
        ]
    },
    {
        path: "",
        component:LayoutComponent,
        children: [
            {
                    path: "",
                    redirectTo: "/home",
                    pathMatch: "full",
                },
                {
                    path: 'home',
                    component: HomeComponent,
            
                },
                {
                    path: "products",
                    component: HomeComponent,
                },
                {
                    path: "login",
                    component:LoginPageComponent ,
                },
                {
                    path: "product_detail/:idPr",
                    component:ProductDetailComponent,
                },
                {
                    path: "**",
                    component: NotFoundPageComponent,
                }
        ]
    },
];
