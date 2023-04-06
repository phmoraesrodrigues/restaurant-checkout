import api from "./api";

describe("api", () => {
  it("is an axios instance", () => {
    expect(api.defaults.baseURL).toBe("http://localhost:3001");
  });
});
