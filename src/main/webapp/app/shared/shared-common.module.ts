import { NgModule } from '@angular/core';

import { GatewayEcomSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GatewayEcomSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GatewayEcomSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GatewayEcomSharedCommonModule {}
