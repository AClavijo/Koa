/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '../../../src/app/app.module';
import * as i2 from '../../../src/app/app.component';
import * as i3 from './app.component.ngfactory';
import * as i4 from '@angular/common';
import * as i5 from '@angular/platform-browser';
import * as i6 from '@angular/animations/browser';
import * as i7 from '@angular/platform-browser/animations';
import * as i8 from '../../../src/app/core/engine/keyboard-engine.service';
import * as i9 from '../../../src/app/core/engine/timer-engine.service';
import * as i10 from '../../../src/app/core/apm-test/apm-test.service';
import * as i11 from '@angular/animations';
import * as i12 from '@angular/cdk/bidi';
import * as i13 from '@angular/material/icon';
import * as i14 from '@angular/http';
import * as i15 from '@angular/cdk/platform';
import * as i16 from '@angular/cdk/a11y';
import * as i17 from '@angular/cdk/scrolling';
import * as i18 from '@angular/cdk/overlay';
import * as i19 from '@angular/material/core';
import * as i20 from '@angular/flex-layout/media-query/match-media';
import * as i21 from '@angular/flex-layout/media-query/breakpoints/break-point-registry';
import * as i22 from '@angular/flex-layout/media-query/breakpoints/break-points';
import * as i23 from '@angular/flex-layout/media-query/media-monitor';
import * as i24 from '@angular/flex-layout/media-query/observable-media-service';
import * as i25 from '@ngrx/store';
import * as i26 from '../../../src/app/core/reducers/bo.reducer';
import * as i27 from '../../../src/app/core/core.module';
import * as i28 from '@angular/material/button';
import * as i29 from '@angular/material/grid-list';
import * as i30 from '@angular/material/toolbar';
import * as i31 from '@angular/cdk/portal';
import * as i32 from '@angular/material/sidenav';
import * as i33 from '@angular/material/card';
import * as i34 from '@angular/material/form-field';
import * as i35 from '@angular/material/input';
import * as i36 from '../../../src/app/apm-material/apm-material.module';
import * as i37 from '@angular/flex-layout/media-query/_module';
import * as i38 from '@angular/flex-layout/flexbox/_module';
import * as i39 from '../../../src/app/shared/shared.module';
import * as i40 from '../../../src/app/apm/apm-exercice/apm-exercice.module';
import * as i41 from '../../../src/app/apm/apm.module';
export var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]),
        i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(4608, i0.Compiler, i0.Compiler, []), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i5.DomSanitizer, i5.ɵe, [i4.DOCUMENT]),
        i0.ɵmpd(6144, i0.Sanitizer, null, [i5.DomSanitizer]), i0.ɵmpd(4608, i5.HAMMER_GESTURE_CONFIG, i5.HammerGestureConfig, []), i0.ɵmpd(5120, i5.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i5.ɵDomEventsPlugin(p0_0), new i5.ɵKeyEventsPlugin(p1_0),
                new i5.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i4.DOCUMENT, i4.DOCUMENT, i4.DOCUMENT, i5.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i5.EventManager, i5.EventManager, [i5.EVENT_MANAGER_PLUGINS, i0.NgZone]),
        i0.ɵmpd(135680, i5.ɵDomSharedStylesHost, i5.ɵDomSharedStylesHost, [i4.DOCUMENT]),
        i0.ɵmpd(4608, i5.ɵDomRendererFactory2, i5.ɵDomRendererFactory2, [i5.EventManager,
            i5.ɵDomSharedStylesHost]), i0.ɵmpd(5120, i6.AnimationDriver, i7.ɵc, []),
        i0.ɵmpd(5120, i6.ɵAnimationStyleNormalizer, i7.ɵd, []), i0.ɵmpd(4608, i6.ɵAnimationEngine, i7.ɵb, [i6.AnimationDriver, i6.ɵAnimationStyleNormalizer]),
        i0.ɵmpd(5120, i0.RendererFactory2, i7.ɵe, [i5.ɵDomRendererFactory2, i6.ɵAnimationEngine,
            i0.NgZone]), i0.ɵmpd(6144, i5.ɵSharedStylesHost, null, [i5.ɵDomSharedStylesHost]),
        i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i5.Meta, i5.Meta, [i4.DOCUMENT]), i0.ɵmpd(4608, i5.Title, i5.Title, [i4.DOCUMENT]),
        i0.ɵmpd(4608, i8.KeyboardEngineService, i8.KeyboardEngineService, []),
        i0.ɵmpd(4608, i9.TimerEngineService, i9.TimerEngineService, []),
        i0.ɵmpd(4608, i10.ApmTestService, i10.ApmTestService, [i8.KeyboardEngineService,
            i9.TimerEngineService]), i0.ɵmpd(4608, i11.AnimationBuilder, i7.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i5.DOCUMENT]), i0.ɵmpd(6144, i12.DIR_DOCUMENT, null, [i5.DOCUMENT]), i0.ɵmpd(4608, i12.Directionality, i12.Directionality, [[2,
                i12.DIR_DOCUMENT]]), i0.ɵmpd(5120, i13.MatIconRegistry, i13.ICON_REGISTRY_PROVIDER_FACTORY, [[3, i13.MatIconRegistry], [2, i14.Http], i5.DomSanitizer]), i0.ɵmpd(4608, i15.Platform, i15.Platform, []), i0.ɵmpd(4608, i16.InteractivityChecker, i16.InteractivityChecker, [i15.Platform]), i0.ɵmpd(4608, i16.FocusTrapFactory, i16.FocusTrapFactory, [i16.InteractivityChecker, i15.Platform, i0.NgZone]),
        i0.ɵmpd(136192, i16.AriaDescriber, i16.ARIA_DESCRIBER_PROVIDER_FACTORY, [[3,
                i16.AriaDescriber], i15.Platform]), i0.ɵmpd(5120, i16.LiveAnnouncer, i16.LIVE_ANNOUNCER_PROVIDER_FACTORY, [[3, i16.LiveAnnouncer], [2, i16.LIVE_ANNOUNCER_ELEMENT_TOKEN], i15.Platform]),
        i0.ɵmpd(5120, i16.FocusMonitor, i16.FOCUS_MONITOR_PROVIDER_FACTORY, [[3, i16.FocusMonitor],
            i0.NgZone, i15.Platform]), i0.ɵmpd(5120, i17.ScrollDispatcher, i17.SCROLL_DISPATCHER_PROVIDER_FACTORY, [[3, i17.ScrollDispatcher], i0.NgZone, i15.Platform]), i0.ɵmpd(5120, i17.ViewportRuler, i17.VIEWPORT_RULER_PROVIDER_FACTORY, [[3, i17.ViewportRuler], i15.Platform,
            i0.NgZone, i17.ScrollDispatcher]), i0.ɵmpd(4608, i18.ScrollStrategyOptions, i18.ScrollStrategyOptions, [i17.ScrollDispatcher, i17.ViewportRuler]),
        i0.ɵmpd(5120, i18.OverlayContainer, i18.ɵa, [[3, i18.OverlayContainer]]), i0.ɵmpd(4608, i18.ɵf, i18.ɵf, [i17.ViewportRuler]), i0.ɵmpd(4608, i18.Overlay, i18.Overlay, [i18.ScrollStrategyOptions, i18.OverlayContainer, i0.ComponentFactoryResolver,
            i18.ɵf, i0.ApplicationRef, i0.Injector, i0.NgZone]), i0.ɵmpd(5120, i18.ɵc, i18.ɵd, [i18.Overlay]), i0.ɵmpd(4608, i19.ErrorStateMatcher, i19.ErrorStateMatcher, []), i0.ɵmpd(4608, i20.MatchMedia, i20.MatchMedia, [i0.NgZone]),
        i0.ɵmpd(4608, i21.BreakPointRegistry, i21.BreakPointRegistry, [i22.BREAKPOINTS]),
        i0.ɵmpd(4608, i23.MediaMonitor, i23.MediaMonitor, [i21.BreakPointRegistry, i20.MatchMedia]),
        i0.ɵmpd(4608, i24.ObservableMedia, i24.MediaService, [i20.MatchMedia, i21.BreakPointRegistry]),
        i0.ɵmpd(135680, i25.State, i25.State, [i25.ActionsSubject, i25.ReducerObservable,
            i25.ScannedActionsSubject, i25.INITIAL_STATE]), i0.ɵmpd(6144, i25.StateObservable, null, [i25.State]), i0.ɵmpd(4608, i25.Store, i25.Store, [i25.StateObservable,
            i25.ActionsSubject, i25.ReducerManager]), i0.ɵmpd(512, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i5.ɵa, []),
        i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1) {
            return [i5.ɵc(p0_0, p0_1)];
        }, [[2, i5.NgProbeToken], [2, i0.NgProbeToken]]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver,
            i0.ApplicationInitStatus]), i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]),
        i0.ɵmpd(512, i5.BrowserModule, i5.BrowserModule, [[3, i5.BrowserModule]]), i0.ɵmpd(131584, i25.ActionsSubject, i25.ActionsSubject, []), i0.ɵmpd(2048, i25.ReducerManagerDispatcher, null, [i25.ActionsSubject]), i0.ɵmpd(256, i25._INITIAL_STATE, undefined, []), i0.ɵmpd(1024, i25.INITIAL_STATE, i25._initialStateFactory, [i25._INITIAL_STATE]), i0.ɵmpd(256, i25._INITIAL_REDUCERS, { bo: i26.boReducer }, []), i0.ɵmpd(2048, i25._STORE_REDUCERS, null, [i25._INITIAL_REDUCERS]),
        i0.ɵmpd(1024, i25.INITIAL_REDUCERS, i25._createStoreReducers, [i0.Injector,
            i25._INITIAL_REDUCERS, i25._STORE_REDUCERS]), i0.ɵmpd(256, i25._REDUCER_FACTORY, i25.combineReducers, []), i0.ɵmpd(256, i25.META_REDUCERS, [], []), i0.ɵmpd(1024, i25.REDUCER_FACTORY, i25.createReducerFactory, [i25._REDUCER_FACTORY, i25.META_REDUCERS]), i0.ɵmpd(131584, i25.ReducerManager, i25.ReducerManager, [i25.ReducerManagerDispatcher, i25.INITIAL_STATE, i25.INITIAL_REDUCERS,
            i25.REDUCER_FACTORY]), i0.ɵmpd(2048, i25.ReducerObservable, null, [i25.ReducerManager]), i0.ɵmpd(131584, i25.ScannedActionsSubject, i25.ScannedActionsSubject, []), i0.ɵmpd(512, i25.StoreRootModule, i25.StoreRootModule, [i25.ActionsSubject,
            i25.ReducerObservable, i25.ScannedActionsSubject]), i0.ɵmpd(512, i27.CoreModule, i27.CoreModule, []), i0.ɵmpd(512, i7.BrowserAnimationsModule, i7.BrowserAnimationsModule, []), i0.ɵmpd(512, i19.CompatibilityModule, i19.CompatibilityModule, []), i0.ɵmpd(512, i12.BidiModule, i12.BidiModule, []), i0.ɵmpd(256, i19.MATERIAL_SANITY_CHECKS, true, []),
        i0.ɵmpd(512, i19.MatCommonModule, i19.MatCommonModule, [[2, i19.MATERIAL_SANITY_CHECKS]]),
        i0.ɵmpd(512, i13.MatIconModule, i13.MatIconModule, []), i0.ɵmpd(512, i15.PlatformModule, i15.PlatformModule, []), i0.ɵmpd(512, i19.MatRippleModule, i19.MatRippleModule, []), i0.ɵmpd(512, i16.A11yModule, i16.A11yModule, []), i0.ɵmpd(512, i28.MatButtonModule, i28.MatButtonModule, []),
        i0.ɵmpd(512, i19.MatLineModule, i19.MatLineModule, []), i0.ɵmpd(512, i29.MatGridListModule, i29.MatGridListModule, []), i0.ɵmpd(512, i30.MatToolbarModule, i30.MatToolbarModule, []), i0.ɵmpd(512, i31.PortalModule, i31.PortalModule, []), i0.ɵmpd(512, i17.ScrollDispatchModule, i17.ScrollDispatchModule, []), i0.ɵmpd(512, i18.OverlayModule, i18.OverlayModule, []), i0.ɵmpd(512, i32.MatSidenavModule, i32.MatSidenavModule, []), i0.ɵmpd(512, i33.MatCardModule, i33.MatCardModule, []),
        i0.ɵmpd(512, i34.MatFormFieldModule, i34.MatFormFieldModule, []),
        i0.ɵmpd(512, i35.MatInputModule, i35.MatInputModule, []), i0.ɵmpd(512, i36.ApmMaterialModule, i36.ApmMaterialModule, []), i0.ɵmpd(512, i37.MediaQueriesModule, i37.MediaQueriesModule, []), i0.ɵmpd(512, i38.FlexLayoutModule, i38.FlexLayoutModule, []), i0.ɵmpd(512, i39.SharedModule, i39.SharedModule, []), i0.ɵmpd(512, i40.ApmExerciceModule, i40.ApmExerciceModule, []), i0.ɵmpd(512, i41.ApmModule, i41.ApmModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, []),
        i0.ɵmpd(256, i22.BREAKPOINTS, i22.RAW_DEFAULTS, [])]);
});
//# sourceMappingURL=app.module.ngfactory.js.map