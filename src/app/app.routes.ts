import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import {ModuleWithProviders} from'@angular/core';

import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { ProjetosEventosComponent } from './projetos-eventos/projetos-eventos.component';
import { ConhecaGranComponent } from './conheca-gran/conheca-gran.component';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';

export const routes: Routes = [
    {path: 'Home', component: HomeComponent},
    { path: 'Portal', component: PortalComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'Fale', component:FaleConoscoComponent},
    {path: 'projetos', component:ProjetosEventosComponent},
    {path: 'conheca', component:ConhecaGranComponent},
    {path: 'publicacoes', component:PublicacoesComponent},

];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);