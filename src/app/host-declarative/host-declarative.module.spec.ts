import { HostDeclarativeModule } from './host-declarative.module';

describe('HostDeclarativeModule', () => {
  let hostDeclarativeModule: HostDeclarativeModule;

  beforeEach(() => {
    hostDeclarativeModule = new HostDeclarativeModule();
  });

  it('should create an instance', () => {
    expect(hostDeclarativeModule).toBeTruthy();
  });
});
