import {
  Component,
  computed,
  inject,
  model,
  OnInit,
  signal,
} from '@angular/core';
import { ResponsiveService } from '../../../../../../lib/src/core/services/responsive.service';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { BottomSheet } from '../../../../../../lib/src/core/components/bottom-sheet/bottom-sheet.component';
import { Button } from '../../../../../../lib/src/core/components/button/button.component';
import {
  Icon,
  SideSheet,
  Badge,
  Tree,
  TreeNode,
} from '../../../../../../lib/src/public-api';
import { ThemeConfiguratorComponent } from '../header/components/theme-configurator/theme-configurator.component';

@Component({
  selector: 'app-navigation',
  imports: [
    NgTemplateOutlet,
    BottomSheet,
    SideSheet,
    Button,
    Icon,
    Badge,
    ThemeConfiguratorComponent,
    RouterLink,
    RouterLinkActive,
    Tree,
    TreeNode,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {
  responsiveService = inject(ResponsiveService);
  readonly currentDevice = computed(() =>
    this.responsiveService.currentDevice()
  );
  router = inject(Router);
  readonly routes = signal(this.router.config);

  readonly isMenuVisible = model(false);
  readonly isThemeConfigVisible = model(false);
  readonly actualRouteData = signal(undefined);

  readonly filteredRoutes = computed(() => {
    const filterRoutes = (routes: any[]): any[] => {
      return routes
        .filter(route => route.path !== '' && route.path !== '**')
        .map(route => ({
          ...route,
          badge: route.data?.new ? 'New' : undefined,
          children: route.children ? filterRoutes(route.children) : [],
        }));
    };
    return filterRoutes(this.routes());
  });

  readonly topLevelRoutes = computed(() => {
    return this.filteredRoutes().filter(route => route.path !== 'components');
  });

  readonly componentsRoutes = computed(() => {
    const documentationRoute = this.filteredRoutes().find(
      route => route.path === 'components'
    );
    return documentationRoute?.children || [];
  });

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.findRouteData(this.routes(), event.urlAfterRedirects);
      }
    });
  }

  findRouteData(routes: any[], url: string, accumulatedPath = ''): void {
    for (const route of routes) {
      const currentPath = route.path
        ? `${accumulatedPath}/${route.path}`
        : accumulatedPath;
      if (currentPath === url) {
        this.actualRouteData.set(route.data);
        return;
      }
      if (route.children) {
        this.findRouteData(route.children, url, currentPath);
      }
    }
  }
}
