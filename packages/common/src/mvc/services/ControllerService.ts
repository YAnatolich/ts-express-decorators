import {ProxyMap, Type} from "@tsed/core";
import {Constant, Injectable, InjectorService, ProviderScope, ProviderType} from "@tsed/di";
import {ControllerBuilder} from "../class/ControllerBuilder";
import {ControllerProvider} from "../class/ControllerProvider";
import {IRouteProvider, RouteService} from "./RouteService";

@Injectable({
  scope: ProviderScope.SINGLETON,
  global: true
})
export class ControllerService extends ProxyMap<Type<any> | any, ControllerProvider> {
  @Constant("routers.defaultRoutersOptions", {})
  private defaultRoutersOptions: any;

  /**
   *
   * @param injector
   * @param routeService
   */
  constructor(private injector: InjectorService, private routeService: RouteService) {
    super(injector as any, {filter: {type: ProviderType.CONTROLLER}});

    this.buildControllers();
  }

  get routes(): IRouteProvider[] {
    return this.routeService.routes || [];
  }

  /**
   * Build routers and controllers
   */
  private buildControllers() {
    this.forEach((provider: ControllerProvider) => {
      if (!provider.router && !provider.hasParent()) {
        new ControllerBuilder(provider, this.defaultRoutersOptions).build(this.injector);
      }
    });
  }
}
