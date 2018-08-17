import { ContainerStateModule } from './container-state.module';

describe('ContainerStateModule', () => {
  let containerStateModule: ContainerStateModule;

  beforeEach(() => {
    containerStateModule = new ContainerStateModule();
  });

  it('should create an instance', () => {
    expect(containerStateModule).toBeTruthy();
  });
});
