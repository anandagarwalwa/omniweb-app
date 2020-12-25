import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { OmniWebComponent } from './omni-web/omni-web.component';
import { OmniWebRoutingModule } from './omni-web-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


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

import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './omni-web/components/main/main.component';
import { FooterComponent } from './omni-web/layout/footer/footer.component';
import { BannerComponent } from './omni-web/layout/banner/banner.component';
import { HeaderComponent } from './omni-web/layout/header/header.component';
import { ContentFilterComponent } from './omni-web/layout/content-filter/content-filter.component';
import { NewsblogcontentComponent } from './omni-web/layout/newsblogcontent/newsblogcontent.component';
import { TitlecontentComponent } from './omni-web/layout/titlecontent/titlecontent.component';

const COMPONENTS = [
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  ContentFilterComponent,
  NewsblogcontentComponent,
  TitlecontentComponent,
    ContentComponent,
    IntegrationsComponent,
    RoadmapComponent,
    WhatsnewComponent,
    PricingComponent,
    CreateteamComponent,
    AboutusComponent,
    ContactusComponent,
    BlogComponent,
    PrivacyComponent,
    SecurityComponent,
    TermsofuseComponent,
    CreateaccountComponent,
    SetupteamComponent,
    MainComponent
]

@NgModule({
  declarations: [OmniWebComponent, ...COMPONENTS],
  exports: [OmniWebComponent, ...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    OmniWebRoutingModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
  ]
})
export class OmniWebModule { }
