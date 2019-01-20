import { fetchDirections, fetchRoute, fetchToken } from '../routes'
import { makeNetworkCall } from "../../../shared/services/axios";

const mockDirectionResponse = {
  status: "success",
  path: [
    ["22.372081", "114.107877"],
    ["22.326442", "114.167811"],
    ["22.284419", "114.159510"]
  ],
  total_distance: 20000,
  total_time: 1800
};

const mockTokenResponse = {
  token: "token"
};

describe("Test for directions api", () => {
  it("Should test for fetchToken method", async () => {
    const post = jest.spyOn(makeNetworkCall, "post");

    post.mockImplementation(() => Promise.resolve({ data: mockTokenResponse }));

    const token = await fetchToken("from", "to");
    expect(token).toBeDefined();
    post.mockRestore();
  });

  it("Should test for fetchRoute method", async () => {
    const get = jest.spyOn(makeNetworkCall, "get");

    get.mockImplementation(() =>
      Promise.resolve({ data: mockDirectionResponse })
    );

    const result = await fetchRoute("token");
    expect(result).toBeDefined();
    expect(result.status).toEqual("success");
    get.mockRestore();
  });

  it("Should test for fetchDirections method", async () => {
    const get = jest.spyOn(makeNetworkCall, "get");
    const post = jest.spyOn(makeNetworkCall, "post");

    post.mockImplementation(() =>
      Promise.resolve({
        data: {
          token: "token"
        }
      })
    );

    get.mockImplementation(() =>
      Promise.resolve({
        data: mockDirectionResponse
      })
    );

    const result = await fetchDirections("from", "to");
    expect(result).toBeDefined();
    expect(result.status).toEqual("success");
  });
});
