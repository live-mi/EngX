describe('Open home screen and find product card and go to the product details screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have Home screen', async () => {
    await expect(element(by.id('home-screen-container'))).toBeVisible()
  })

  it('should find 1st product, press it and check if it is product details screen', async () => {
    const products = element(by.label('product card container'))

    await products.atIndex(0).tap()

    await expect(
      element(by.id('product-details-screen-container')),
    ).toBeVisible()
  })
})
