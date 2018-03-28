import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { FUSE_CONFIG, FuseConfigService } from '@fuse/services/config.service';
import { FuseCopierService } from '@fuse/services/copier.service';
import { AuthInterceptor } from '@fuse/services/auth.interceptor';
import { AuthService } from '@fuse/services/auth.service';
import { FuseMatchMediaService } from '@fuse/services/match-media.service';
import { FuseMatSidenavHelperService } from '@fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

@NgModule({
    entryComponents: [],
    providers      : [
        AuthService,
        FuseConfigService,
        FuseCopierService,
        FuseMatchMediaService,
        FuseMatSidenavHelperService,
        FuseNavigationService,
        FuseSidebarService,
        FuseSplashScreenService,
        FuseTranslationLoaderService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class FuseModule
{
    constructor(@Optional() @SkipSelf() parentModule: FuseModule)
    {
        if ( parentModule )
        {
            throw new Error('FuseModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : FuseModule,
            providers: [
                {
                    provide : FUSE_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
