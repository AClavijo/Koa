/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../src/app/apm/apm-exercice/apm-exercice.module';
import * as i2 from '@angular/common';
import * as i3 from '@angular/platform-browser';
import * as i4 from '@angular/animations/browser';
import * as i5 from '@angular/platform-browser/animations';
import * as i6 from '@angular/animations';
import * as i7 from '@angular/cdk/bidi';
import * as i8 from '@angular/material/icon';
import * as i9 from '@angular/http';
import * as i10 from '@angular/cdk/platform';
import * as i11 from '@angular/cdk/a11y';
import * as i12 from '@angular/cdk/scrolling';
import * as i13 from '@angular/cdk/overlay';
import * as i14 from '@angular/material/core';
import * as i15 from '@angular/flex-layout/media-query/match-media';
import * as i16 from '@angular/flex-layout/media-query/breakpoints/break-point-registry';
import * as i17 from '@angular/flex-layout/media-query/breakpoints/break-points';
import * as i18 from '@angular/flex-layout/media-query/media-monitor';
import * as i19 from '@angular/flex-layout/media-query/observable-media-service';
import * as i20 from '@angular/material/button';
import * as i21 from '@angular/material/grid-list';
import * as i22 from '@angular/material/toolbar';
import * as i23 from '@angular/cdk/portal';
import * as i24 from '@angular/material/sidenav';
import * as i25 from '@angular/material/card';
import * as i26 from '@angular/material/form-field';
import * as i27 from '@angular/material/input';
import * as i28 from '../../../../../src/app/apm-material/apm-material.module';
import * as i29 from '@angular/flex-layout/media-query/_module';
import * as i30 from '@angular/flex-layout/flexbox/_module';
import * as i31 from '../../../../../src/app/shared/shared.module';
export const ApmExerciceModuleNgFactory:i0.NgModuleFactory<i1.ApmExerciceModule> = i0.ɵcmf(i1.ApmExerciceModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(5120,
          i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i2.NgLocalization,i2.NgLocaleLocalization,
          [i0.LOCALE_ID]),i0.ɵmpd(4608,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(5120,
          i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),
          i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),i0.ɵmpd(4608,i3.DomSanitizer,
              i3.ɵe,[i2.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i3.DomSanitizer]),
          i0.ɵmpd(4608,i3.HAMMER_GESTURE_CONFIG,i3.HammerGestureConfig,([] as any[])),
          i0.ɵmpd(5120,i3.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
            return [new i3.ɵDomEventsPlugin(p0_0),new i3.ɵKeyEventsPlugin(p1_0),new i3.ɵHammerGesturesPlugin(p2_0,
                p2_1)];
          },[i2.DOCUMENT,i2.DOCUMENT,i2.DOCUMENT,i3.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i3.EventManager,i3.EventManager,[i3.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i3.ɵDomSharedStylesHost,i3.ɵDomSharedStylesHost,[i2.DOCUMENT]),
          i0.ɵmpd(4608,i3.ɵDomRendererFactory2,i3.ɵDomRendererFactory2,[i3.EventManager,
              i3.ɵDomSharedStylesHost]),i0.ɵmpd(5120,i4.AnimationDriver,i5.ɵc,([] as any[])),
          i0.ɵmpd(5120,i4.ɵAnimationStyleNormalizer,i5.ɵd,([] as any[])),i0.ɵmpd(4608,
              i4.ɵAnimationEngine,i5.ɵb,[i4.AnimationDriver,i4.ɵAnimationStyleNormalizer]),
          i0.ɵmpd(5120,i0.RendererFactory2,i5.ɵe,[i3.ɵDomRendererFactory2,i4.ɵAnimationEngine,
              i0.NgZone]),i0.ɵmpd(6144,i3.ɵSharedStylesHost,(null as any),[i3.ɵDomSharedStylesHost]),
          i0.ɵmpd(4608,i0.Testability,i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i3.Meta,
              i3.Meta,[i2.DOCUMENT]),i0.ɵmpd(4608,i3.Title,i3.Title,[i2.DOCUMENT]),
          i0.ɵmpd(4608,i6.AnimationBuilder,i5.ɵBrowserAnimationBuilder,[i0.RendererFactory2,
              i3.DOCUMENT]),i0.ɵmpd(6144,i7.DIR_DOCUMENT,(null as any),[i3.DOCUMENT]),
          i0.ɵmpd(4608,i7.Directionality,i7.Directionality,[[2,i7.DIR_DOCUMENT]]),
          i0.ɵmpd(5120,i8.MatIconRegistry,i8.ICON_REGISTRY_PROVIDER_FACTORY,[[3,i8.MatIconRegistry],
              [2,i9.Http],i3.DomSanitizer]),i0.ɵmpd(4608,i10.Platform,i10.Platform,
              ([] as any[])),i0.ɵmpd(4608,i11.InteractivityChecker,i11.InteractivityChecker,
              [i10.Platform]),i0.ɵmpd(4608,i11.FocusTrapFactory,i11.FocusTrapFactory,
              [i11.InteractivityChecker,i10.Platform,i0.NgZone]),i0.ɵmpd(136192,i11.AriaDescriber,
              i11.ARIA_DESCRIBER_PROVIDER_FACTORY,[[3,i11.AriaDescriber],i10.Platform]),
          i0.ɵmpd(5120,i11.LiveAnnouncer,i11.LIVE_ANNOUNCER_PROVIDER_FACTORY,[[3,i11.LiveAnnouncer],
              [2,i11.LIVE_ANNOUNCER_ELEMENT_TOKEN],i10.Platform]),i0.ɵmpd(5120,i11.FocusMonitor,
              i11.FOCUS_MONITOR_PROVIDER_FACTORY,[[3,i11.FocusMonitor],i0.NgZone,i10.Platform]),
          i0.ɵmpd(5120,i12.ScrollDispatcher,i12.SCROLL_DISPATCHER_PROVIDER_FACTORY,
              [[3,i12.ScrollDispatcher],i0.NgZone,i10.Platform]),i0.ɵmpd(5120,i12.ViewportRuler,
              i12.VIEWPORT_RULER_PROVIDER_FACTORY,[[3,i12.ViewportRuler],i10.Platform,
                  i0.NgZone,i12.ScrollDispatcher]),i0.ɵmpd(4608,i13.ScrollStrategyOptions,
              i13.ScrollStrategyOptions,[i12.ScrollDispatcher,i12.ViewportRuler]),
          i0.ɵmpd(5120,i13.OverlayContainer,i13.ɵa,[[3,i13.OverlayContainer]]),i0.ɵmpd(4608,
              i13.ɵf,i13.ɵf,[i12.ViewportRuler]),i0.ɵmpd(4608,i13.Overlay,i13.Overlay,
              [i13.ScrollStrategyOptions,i13.OverlayContainer,i0.ComponentFactoryResolver,
                  i13.ɵf,i0.ApplicationRef,i0.Injector,i0.NgZone]),i0.ɵmpd(5120,i13.ɵc,
              i13.ɵd,[i13.Overlay]),i0.ɵmpd(4608,i14.ErrorStateMatcher,i14.ErrorStateMatcher,
              ([] as any[])),i0.ɵmpd(4608,i15.MatchMedia,i15.MatchMedia,[i0.NgZone]),
          i0.ɵmpd(4608,i16.BreakPointRegistry,i16.BreakPointRegistry,[i17.BREAKPOINTS]),
          i0.ɵmpd(4608,i18.MediaMonitor,i18.MediaMonitor,[i16.BreakPointRegistry,i15.MatchMedia]),
          i0.ɵmpd(4608,i19.ObservableMedia,i19.MediaService,[i15.MatchMedia,i16.BreakPointRegistry]),
          i0.ɵmpd(512,i2.CommonModule,i2.CommonModule,([] as any[])),i0.ɵmpd(1024,
              i0.ErrorHandler,i3.ɵa,([] as any[])),i0.ɵmpd(1024,i0.APP_INITIALIZER,
              (p0_0:any,p0_1:any) => {
                return [i3.ɵc(p0_0,p0_1)];
              },[[2,i3.NgProbeToken],[2,i0.NgProbeToken]]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i3.BrowserModule,i3.BrowserModule,[[3,i3.BrowserModule]]),i0.ɵmpd(512,
              i5.BrowserAnimationsModule,i5.BrowserAnimationsModule,([] as any[])),
          i0.ɵmpd(512,i14.CompatibilityModule,i14.CompatibilityModule,([] as any[])),
          i0.ɵmpd(512,i7.BidiModule,i7.BidiModule,([] as any[])),i0.ɵmpd(256,i14.MATERIAL_SANITY_CHECKS,
              true,([] as any[])),i0.ɵmpd(512,i14.MatCommonModule,i14.MatCommonModule,
              [[2,i14.MATERIAL_SANITY_CHECKS]]),i0.ɵmpd(512,i8.MatIconModule,i8.MatIconModule,
              ([] as any[])),i0.ɵmpd(512,i10.PlatformModule,i10.PlatformModule,([] as any[])),
          i0.ɵmpd(512,i14.MatRippleModule,i14.MatRippleModule,([] as any[])),i0.ɵmpd(512,
              i11.A11yModule,i11.A11yModule,([] as any[])),i0.ɵmpd(512,i20.MatButtonModule,
              i20.MatButtonModule,([] as any[])),i0.ɵmpd(512,i14.MatLineModule,i14.MatLineModule,
              ([] as any[])),i0.ɵmpd(512,i21.MatGridListModule,i21.MatGridListModule,
              ([] as any[])),i0.ɵmpd(512,i22.MatToolbarModule,i22.MatToolbarModule,
              ([] as any[])),i0.ɵmpd(512,i23.PortalModule,i23.PortalModule,([] as any[])),
          i0.ɵmpd(512,i12.ScrollDispatchModule,i12.ScrollDispatchModule,([] as any[])),
          i0.ɵmpd(512,i13.OverlayModule,i13.OverlayModule,([] as any[])),i0.ɵmpd(512,
              i24.MatSidenavModule,i24.MatSidenavModule,([] as any[])),i0.ɵmpd(512,
              i25.MatCardModule,i25.MatCardModule,([] as any[])),i0.ɵmpd(512,i26.MatFormFieldModule,
              i26.MatFormFieldModule,([] as any[])),i0.ɵmpd(512,i27.MatInputModule,
              i27.MatInputModule,([] as any[])),i0.ɵmpd(512,i28.ApmMaterialModule,
              i28.ApmMaterialModule,([] as any[])),i0.ɵmpd(512,i29.MediaQueriesModule,
              i29.MediaQueriesModule,([] as any[])),i0.ɵmpd(512,i30.FlexLayoutModule,
              i30.FlexLayoutModule,([] as any[])),i0.ɵmpd(512,i31.SharedModule,i31.SharedModule,
              ([] as any[])),i0.ɵmpd(512,i1.ApmExerciceModule,i1.ApmExerciceModule,
              ([] as any[])),i0.ɵmpd(256,i17.BREAKPOINTS,i17.RAW_DEFAULTS,([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL3Zhci93d3cvYXBtL3NyYy9hcHAvYXBtL2FwbS1leGVyY2ljZS9hcG0tZXhlcmNpY2UubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL3Zhci93d3cvYXBtL3NyYy9hcHAvYXBtL2FwbS1leGVyY2ljZS9hcG0tZXhlcmNpY2UubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=