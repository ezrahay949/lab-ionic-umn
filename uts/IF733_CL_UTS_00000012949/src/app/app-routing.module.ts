import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',
        children: [
            {
                path: '',
                loadChildren: './home/home.module#HomePageModule'
            },
            {
                path: ':albumId',
                loadChildren: './home/detail/detail.module#DetailPageModule'
            }
        ]
    },
    { path: 'favorite', loadChildren: './favorite/favorite.module#FavoritePageModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
