import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GatewayEcomSharedLibsModule, GatewayEcomSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GatewayEcomSharedLibsModule, GatewayEcomSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GatewayEcomSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayEcomSharedModule {
  static forRoot() {
    return {
      ngModule: GatewayEcomSharedModule
    };
  }
}
