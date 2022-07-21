import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},    
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'filmes', component: FilmesComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)},
    { path: 'admin', 
            loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
            canLoad: [AuthGuard], canActivate: [AuthGuard]},

    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig, { enableTracing: true })
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}