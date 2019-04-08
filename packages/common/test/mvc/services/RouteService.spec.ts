import {inject} from "@tsed/testing";
import {expect} from "chai";
import * as Sinon from "sinon";
import {
  Controller,
  ExpressApplication,
  GlobalProviders,
  InjectorService,
  LocalsContainer,
  RouteService
} from "../../../src";

describe("RouteService", () => {
  describe("addRoute", () => {
    const sandbox = Sinon.createSandbox();

    @Controller("/my-route")
    class MyCtrl {
    }

    after(() => {
      GlobalProviders.delete(MyCtrl);
    });

    it("should add a route", async () => {
      // GIVEN
      const injector = new InjectorService();
      injector.addProvider(MyCtrl);

      const expressApp = {
        use: sandbox.stub()
      };

      const locals = new LocalsContainer();
      locals.set(ExpressApplication, expressApp);

      await injector.load();
      const routeService = await injector.invoke<RouteService>(RouteService, locals, {rebuild: true});

      // WHEN
      routeService.addRoute("/test", MyCtrl);

      // THEN
      const provider = injector.getProvider(MyCtrl)!;
      routeService.routes.should.deep.eq([{provider, "route": "/test/my-route"}]);
      expressApp.use.should.have.been.calledWithExactly("/test/my-route", provider.router);
    });
  });

  describe("getRoutes", () => {
    const sandbox = Sinon.createSandbox();

    @Controller("/my-route")
    class MyCtrl {
    }

    after(() => {
      GlobalProviders.delete(MyCtrl);
    });

    it("should add a route", async () => {
      // GIVEN
      const injector = new InjectorService();
      injector.addProvider(MyCtrl);

      const expressApp = {
        use: sandbox.stub()
      };

      const locals = new LocalsContainer();
      locals.set(ExpressApplication, expressApp);

      await injector.load();
      const routeService = await injector.invoke<RouteService>(RouteService, locals, {rebuild: true});
      routeService.addRoute("/test", MyCtrl);

      // WHEN
      const result = routeService.getRoutes();
      // THEN
      result.should.deep.eq([]);
    });
  });

  it("should inject RouteService and return routes", inject([RouteService], (routeService: RouteService) => {
    const routes = routeService.getRoutes();

    expect(routes).to.be.an("array");
  }));

  it("should inject RouteService and print routes", inject([RouteService], (routeService: RouteService) => {
    let str = "";

    // tslint:disable-next-line: no-unused-variable
    const routes = routeService.printRoutes({
      info: (...args: any[]) => (str += args.join(" "))
    });

    return expect(!!str).to.be.true;
  }));

  it("should inject RouteService and print routes", inject([RouteService], (routeService: RouteService) => {
    routeService.printRoutes();
  }));
});
