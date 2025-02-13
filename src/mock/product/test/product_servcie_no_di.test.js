const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");


jest.mock('../product_client');
describe("ProductService", () => {
  const fetchItems = jest.fn(async () => {
    return [
      { item: '🥛', available: true },
      { item: '🍌', available: false }
    ]
  });

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    }
  })
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    // clearMocks related...
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: '🥛', available: true }]);
  });

  it('test', async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  })  
})