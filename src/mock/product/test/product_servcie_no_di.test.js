const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");

jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "Milk", available: true },
    { item: "Banana", available: false },
  ]);
  let productService;
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let callback;
  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
