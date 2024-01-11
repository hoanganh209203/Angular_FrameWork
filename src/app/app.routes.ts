import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './components/admins/products/products.component';
import { NotFoundPageComponent } from './components/clients/not-found-page/not-found-page.component';
import { ProductDetailComponent } from './components/clients/product-detail/product-detail.component';
import { AdminHomepageComponent } from './components/admins/admin-homepage/admin-homepage.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginPageComponent } from './components/clients/login-page/login-page.component';
import { LayoutAdminComponent } from './components/admins/layout-admin/layout-admin.component';
export const routes: Routes = [
    {
        path: "admin",
        component: LayoutAdminComponent,
        children: [
            {
                path: '',
                redirectTo: "/admin/dashboard",
                pathMatch: "full"
            },
            {
                path: 'dashboard',
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
