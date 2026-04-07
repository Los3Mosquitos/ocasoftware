import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home.component';
import {BlogComponent} from './pages/blog.component';
import {CarreirasComponent} from './pages/carreiras.component';
import {WebDevComponent} from './pages/web-dev.component';
import {MobileDevComponent} from './pages/mobile-dev.component';
import {CloudComponent} from './pages/cloud.component';
import {AiMlComponent} from './pages/ai-ml.component';
import {PrivacyComponent} from './pages/privacy.component';
import {TermsComponent} from './pages/terms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'carreiras', component: CarreirasComponent },
  { path: 'servicos/desenvolvimento-web', component: WebDevComponent },
  { path: 'servicos/aplicativos-moveis', component: MobileDevComponent },
  { path: 'servicos/arquitetura-nuvem', component: CloudComponent },
  { path: 'servicos/ia-ml', component: AiMlComponent },
  { path: 'privacidade', component: PrivacyComponent },
  { path: 'termos', component: TermsComponent },
  { path: '**', redirectTo: '' }
];
