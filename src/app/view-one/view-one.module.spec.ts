import {ViewOneModule} from './view-one.module'

describe('ViewOneModule', () => {
  let viewOneModule: ViewOneModule

  beforeEach(() => {
    viewOneModule = new ViewOneModule()
  })

  it('should create an instance', () => {
    expect(viewOneModule).toBeTruthy()
  })
})
