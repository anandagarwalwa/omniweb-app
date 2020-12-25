import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/pages/omni-web/omni-web/components/main/main.component';
import { AboutusComponent } from './omni-web/components/aboutus/aboutus.component';
import { BlogComponent } from './omni-web/components/blog/blog.component';
import { ContactusComponent } from './omni-web/components/contactus/contactus.component';
import { CreateaccountComponent } from './omni-web/components/createaccount/createaccount.component';
import { CreateteamComponent } from './omni-web/components/createteam/createteam.component';
import { ContentComponent } from './omni-web/components/feature/feature.component';
import { IntegrationsComponent } from './omni-web/components/integrations/integrations.component';
import { PricingComponent } from './omni-web/components/pricing/pricing.component';
import { PrivacyComponent } from './omni-web/components/privacy/privacy.component';
import { RoadmapComponent } from './omni-web/components/roadmap/roadmap.component';
import { SecurityComponent } from './omni-web/components/security/security.component';
import { SetupteamComponent } from './omni-web/components/setupteam/setupteam.component';
import { TermsofuseComponent } from './omni-web/components/termsofuse/termsofuse.component';
import { WhatsnewComponent } from './omni-web/components/whatsnew/whatsnew.component';
import { OmniWebComponent } from './omni-web/omni-web.component';


const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  { path: '', component: OmniWebComponent, 
children:[
  {path:'main' , component: MainComponent},
  {path:'feature', component: ContentComponent},
  {path:'integrations', component: IntegrationsComponent},
  {path:'roadmap', component: RoadmapComponent},
  {path:'whatsnew', component: WhatsnewComponent},
  {path:'pricing', component: PricingComponent},
  {path:'createteam', component: CreateteamComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'blog', component: BlogComponent},
  {path:'privacy', component: PrivacyComponent},
  {path:'security', component: SecurityComponent},
  {path:'termsofuse', component: TermsofuseComponent},
  {path:'createaccount', component: CreateaccountComponent},
  {path:'setupteam', component: SetupteamComponent},
] },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmniWebRoutingModule { }
