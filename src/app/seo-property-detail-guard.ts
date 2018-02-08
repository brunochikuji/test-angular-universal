import { SeoService } from './seo.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SeoPropertyDetailGuard implements CanActivate {

  public constructor(private seo: SeoService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const code = route.params['code'].replace(/.html$/, '');
    this.seo
      .setTitle([ 'Element #' + code, 'Elements List' ])
      .setDescription('Details of the element #' + code);
    return true;
  }
}
