import {ViewThreeModule} from './view-three.module'

describe('ViewThreeModule', () => {
  let viewThreeModule: ViewThreeModule

  beforeEach(() => {
    viewThreeModule = new ViewThreeModule()
  })

  it('should create an instance', () => {
    expect(viewThreeModule).toBeTruthy()
  })
})
