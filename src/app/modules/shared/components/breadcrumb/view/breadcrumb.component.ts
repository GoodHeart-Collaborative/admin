import { Component, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RouteStep } from '../models/index';
import { BreadcrumbService } from '../service/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  private $changes: Map<string, string> = new Map();
  private $baseUrlSteps: string[] = [];
  @Input()
  set baseUrl(url: string) {
    this.$baseUrlSteps = this.$createSteps(url);
  }
  routeSteps: RouteStep[] = [];
  constructor(
    router: Router,
    private $route: ActivatedRoute,
    breadcrumb: BreadcrumbService
  ) {
    breadcrumb.events.subscribe(({ label, target, url = '' }: any) => {
      if (label.includes('%')) {
        // label.replace('%', '')\
        label = label.split('%').join('');
      }
      // console.log(target, label, label.includes('%'));
      this.$changes.set(target, label);
      const routeStep = this.routeSteps.find((step: RouteStep) => {
        return step.label === target;
      });

      if (url) {
        setTimeout(() => {
          console.log(this.routeSteps);
          const step = this.routeSteps.find((step: RouteStep) => step.label === target);
          if (step) {

            step.url = url;
          }


        }, 0);
      }

      if (routeStep) {
        routeStep.label = label;

      }
    });
    this.$listenRouteChange(router);
  }
  private $createSteps(url: string): string[] {
    return url.split('/').filter(path => path !== '');
  }
  private $listenRouteChange(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let url = event.urlAfterRedirects;
        const index = url.indexOf('?');
        if (index !== -1) {
          url = url.substr(0, index);
        }
        const steps = this.$createSteps(url);
        this.routeSteps = steps.reduce<{ [key: string]: any }>((data, step, index, arr) => {
          if (step === 'admin') {
            return data;
          }
          if (step !== 'admin' && step !== this.$baseUrlSteps[index]) {
            const currentUrl = `${data.currentUrl}/${step}`;
            if (this.$changes.has(step)) {
              step = this.$changes.get(step);
            }
            return {
              currentUrl,
              steps: [...data.steps, new RouteStep(step, currentUrl)]
            };
          }
          return data;
        }, { currentUrl: '/admin', steps: [] }).steps;
      }
    });
  }
}