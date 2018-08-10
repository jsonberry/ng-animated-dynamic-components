import {ViewTwoModule} from './view-two.module'

describe('ViewTwoModule', () => {
  let viewTwoModule: ViewTwoModule

  beforeEach(() => {
    viewTwoModule = new ViewTwoModule()
  })

  it('should create an instance', () => {
    expect(viewTwoModule).toBeTruthy()
  })
})
