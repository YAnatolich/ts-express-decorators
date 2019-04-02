import {InjectorService, Provider} from "@tsed/di";
import {expect} from "chai";
import * as Sinon from "sinon";
import {TestContext} from "../src";

class FakeServer {
  static current: FakeServer;

  startServers: Function;

  injector = new InjectorService();

  async init() {

  }

  async start() {
    FakeServer.current = this;

    return this.startServers();
  }
}

class FakeService {
  $onInit() {

  }
}

describe("TestContext", () => {
  describe("reset()", () => {
    before(TestContext.create);

    it("should reset the injector", () => {
      const injectionKey = "key";
      TestContext.injector.set(injectionKey, new Provider("something"));
      TestContext.reset();
      expect((TestContext as any)._injector).eq(null);
    });
  });
  describe("bootstrap()", () => {
    beforeEach(TestContext.bootstrap(FakeServer as any));
    afterEach(TestContext.reset);

    it("should attach injector instance to TestContext", () => {
      expect(TestContext.injector).to.be.instanceof(InjectorService);
    });

    it("should replace FakeServer.startServers by a stub()", () => {
      expect(FakeServer.current.startServers).to.be.a("Function");
      expect(FakeServer.current.startServers()).to.be.an.instanceOf(Promise);
    });
  });

  describe("invoke()", () => {
    const sandbox = Sinon.createSandbox();

    before(TestContext.create);
    after(TestContext.reset);
    before(() => {
      sandbox.stub(FakeService.prototype, "$onInit");
    });

    after(() => {
      sandbox.restore();
    });

    describe("when $onInit return a nothing", () => {
      after(() => {
        sandbox.resetHistory();
        sandbox.resetBehavior();
      });

      it("should invoke Service and call $onInit hook", async () => {
        const instance = await TestContext.invoke(FakeService, []);
        expect(instance).to.be.instanceOf(FakeService);

        return instance.$onInit.should.have.been.called;
      });
    });

    describe("when $onInit return a promise", () => {
      before(() => {
        (FakeService.prototype.$onInit as any).resolves();
      });
      after(() => {
        sandbox.resetHistory();
        sandbox.resetBehavior();
      });

      it("should invoke Service and call $onInit hook", async () => {
        const instance = await TestContext.invoke(FakeService, []);
        expect(instance).to.be.instanceOf(FakeService);

        return instance.$onInit.should.have.been.called;
      });
    });
  });
});
