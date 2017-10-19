/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './luncher.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../../node_modules/@angular/material/button/typings/index.ngfactory';
import * as i3 from '@angular/material/core';
import * as i4 from '@angular/material/button';
import * as i5 from '@angular/cdk/platform';
import * as i6 from '@angular/cdk/a11y';
import * as i7 from '@angular/flex-layout/flexbox/api/layout';
import * as i8 from '@angular/flex-layout/media-query/media-monitor';
import * as i9 from '@angular/flex-layout/flexbox/api/layout-align';
import * as i10 from '@angular/common';
import * as i11 from '../../../../../../src/app/apm/apm-exercice/luncher/luncher.component';
import * as i12 from '../../../../../../src/app/core/apm-test/apm-test.service';
const styles_LuncherComponent:any[] = [i0.styles];
export const RenderType_LuncherComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_LuncherComponent,data:{}});
function View_LuncherComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),4,'button',[['class',
      'mat-raised-button'],['color','primary'],['mat-raised-button','']],[[8,'disabled',
      0]],[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.lunchKeyboardEngine()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },i2.View_MatButton_0,i2.RenderType_MatButton)),i1.ɵdid(1,16384,(null as any),0,
      i3.MatPrefixRejector,([] as any[]),(null as any),(null as any)),i1.ɵdid(2,180224,
      (null as any),0,i4.MatButton,[i1.Renderer2,i1.ElementRef,i5.Platform,i6.FocusMonitor],
      {color:[0,'color']},(null as any)),i1.ɵdid(3,16384,(null as any),0,i4.MatRaisedButtonCssMatStyler,
      ([] as any[]),(null as any),(null as any)),(_l()(),i1.ɵted(-1,0,['Lunch Keyboard Core']))],
      (_ck,_v) => {
        const currVal_1:any = 'primary';
        _ck(_v,2,0,currVal_1);
      },(_ck,_v) => {
        const currVal_0:any = (i1.ɵnov(_v,2).disabled || (null as any));
        _ck(_v,0,0,currVal_0);
      });
}
function View_LuncherComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(1,
      0,(null as any),(null as any),4,'button',[['class','mat-raised-button'],['color',
          'accent'],['mat-raised-button','']],[[8,'disabled',0]],[[(null as any),'click']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.stopKeyboardEngine()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i2.View_MatButton_0,i2.RenderType_MatButton)),i1.ɵdid(2,16384,(null as any),
      0,i3.MatPrefixRejector,([] as any[]),(null as any),(null as any)),i1.ɵdid(3,
      180224,(null as any),0,i4.MatButton,[i1.Renderer2,i1.ElementRef,i5.Platform,
          i6.FocusMonitor],{color:[0,'color']},(null as any)),i1.ɵdid(4,16384,(null as any),
      0,i4.MatRaisedButtonCssMatStyler,([] as any[]),(null as any),(null as any)),
      (_l()(),i1.ɵted(-1,0,['Stop Keyboard Core'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n  ']))],(_ck,_v) => {
    const currVal_1:any = 'accent';
    _ck(_v,3,0,currVal_1);
  },(_ck,_v) => {
    const currVal_0:any = (i1.ɵnov(_v,3).disabled || (null as any));
    _ck(_v,1,0,currVal_0);
  });
}
export function View_LuncherComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),11,'div',[['class',
      'luncher-box'],['fxLayout','column'],['fxLayoutAlign','center center']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),i1.ɵdid(1,737280,(null as any),
      0,i7.LayoutDirective,[i8.MediaMonitor,i1.ElementRef,i1.Renderer],{layout:[0,
          'layout']},(null as any)),i1.ɵdid(2,737280,(null as any),0,i9.LayoutAlignDirective,
      [i8.MediaMonitor,i1.ElementRef,i1.Renderer,[2,i7.LayoutDirective]],{align:[0,
          'align']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),
      i1.ɵeld(4,0,(null as any),(null as any),1,'div',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(5,
      (null as any),['\n    ','\n  '])),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_LuncherComponent_1)),
      i1.ɵdid(8,16384,(null as any),0,i10.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf'],ngIfElse:[1,'ngIfElse']},(null as any)),(_l()(),i1.ɵted(-1,
          (null as any),['\n  '])),(_l()(),i1.ɵand(0,[['stop_button',2]],(null as any),
          0,(null as any),View_LuncherComponent_2)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i11.LuncherComponent = _v.component;
    const currVal_0:any = 'column';
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = 'center center';
    _ck(_v,2,0,currVal_1);
    const currVal_3:boolean = !_co._apmTS.runningTest;
    const currVal_4:any = i1.ɵnov(_v,10);
    _ck(_v,8,0,currVal_3,currVal_4);
  },(_ck,_v) => {
    var _co:i11.LuncherComponent = _v.component;
    const currVal_2:any = _co._kD;
    _ck(_v,5,0,currVal_2);
  });
}
export function View_LuncherComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'app-apm-luncher',
      ([] as any[]),(null as any),(null as any),(null as any),View_LuncherComponent_0,
      RenderType_LuncherComponent)),i1.ɵdid(1,114688,(null as any),0,i11.LuncherComponent,
      [i12.ApmTestService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const LuncherComponentNgFactory:i1.ComponentFactory<i11.LuncherComponent> = i1.ɵccf('app-apm-luncher',
    i11.LuncherComponent,View_LuncherComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL3Zhci93d3cvYXBtL3NyYy9hcHAvYXBtL2FwbS1leGVyY2ljZS9sdW5jaGVyL2x1bmNoZXIuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL3Zhci93d3cvYXBtL3NyYy9hcHAvYXBtL2FwbS1leGVyY2ljZS9sdW5jaGVyL2x1bmNoZXIuY29tcG9uZW50LnRzIiwibmc6Ly8vdmFyL3d3dy9hcG0vc3JjL2FwcC9hcG0vYXBtLWV4ZXJjaWNlL2x1bmNoZXIvbHVuY2hlci5jb21wb25lbnQuaHRtbCIsIm5nOi8vL3Zhci93d3cvYXBtL3NyYy9hcHAvYXBtL2FwbS1leGVyY2ljZS9sdW5jaGVyL2x1bmNoZXIuY29tcG9uZW50LnRzLkx1bmNoZXJDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cImx1bmNoZXItYm94XCI+XG4gIDxkaXY+XG4gICAge3tfa0R9fVxuICA8L2Rpdj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwibHVuY2hLZXlib2FyZEVuZ2luZSgpXCIgKm5nSWY9XCIhX2FwbVRTLnJ1bm5pbmdUZXN0OyBlbHNlIHN0b3BfYnV0dG9uXCI+THVuY2ggS2V5Ym9hcmQgQ29yZTwvYnV0dG9uPlxuICA8bmctdGVtcGxhdGUgI3N0b3BfYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiAoY2xpY2spPVwic3RvcEtleWJvYXJkRW5naW5lKClcIj5TdG9wIEtleWJvYXJkIENvcmU8L2J1dHRvbj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PiIsIjxhcHAtYXBtLWx1bmNoZXI+PC9hcHAtYXBtLWx1bmNoZXI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNJRTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQTBDO01BQUE7TUFBQTtJQUFBO0lBQTFDO0VBQUEsdURBQUE7MkJBQUEsa0RBQUE7TUFBQTtNQUFBLDBDQUFBO01BQUEsMkNBQXdIOztRQUE5RjtRQUExQixXQUEwQixTQUExQjs7UUFBQTtRQUFBLFdBQUEsU0FBQTs7OztvQkFDMEIsOENBQ3hCO01BQUE7VUFBQTtNQUFBO1FBQUE7UUFBQTtRQUF5QztVQUFBO1VBQUE7UUFBQTtRQUF6QztNQUFBLHVEQUFBO01BQUEseUVBQUE7TUFBQTt5QkFBQSw0Q0FBQTtNQUFBO01BQXdFLDhDQUEyQjtVQUFBO0lBQXpFO0lBQTFCLFdBQTBCLFNBQTFCOztJQUFBO0lBQUEsV0FBQSxTQUFBOzs7O29CQU5KO01BQUE7TUFBQSxpRUFBQTtNQUFBO1VBQUEsaUNBQUE7TUFBQTtVQUFBLHlCQUF5RSw0Q0FDdkU7YUFBQTtVQUFBLDBEQUFLO01BQUEsa0NBRUM7TUFDTjthQUFBO1VBQUEseURBQW9KO1VBQUEseUJBQ3BKO1VBQUEsMENBRWM7VUFBQTs7SUFQWDtJQUFMLFdBQUssU0FBTDtJQUF1QjtJQUF2QixXQUF1QixTQUF2QjtJQUk0RTtJQUFBO0lBQTFFLFdBQTBFLG1CQUExRTs7O0lBSEs7SUFBQTs7OztvQkNEUDtNQUFBO2lDQUFBLFVBQUE7TUFBQTtJQUFBOzs7OyJ9