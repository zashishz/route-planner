import { fetchDirections, fetchRoute, fetchToken } from "../routes";
import { makeNetworkCall } from "../../../shared/services/axios";

const FETCH_ROUTE_RESPONSE = {
  status: "success",
  path: [
    ["22.372081", "114.107877"],
    ["22.326442", "114.167811"],
    ["22.284419", "114.159510"]
  ],
  total_distance: 20000,
  total_time: 1800
};

const FETCH_TOKEN_RESPONSE = {
  token: "token"
};

describe("API calls check", () => {
  it("request token from backend", async () => {
    const postCall = jest.spyOn(makeNetworkCall, "post");

    postCall.mockImplementation(() =>
      Promise.resolve({ data: FETCH_TOKEN_RESPONSE })
    );

    const token = await fetchToken("from", "to");
    expect(token).toBeDefined();
    postCall.mockRestore();
  });

  it("request location points from backend", async () => {
    const getCall = jest.spyOn(makeNetworkCall, "get");

    getCall.mockImplementation(() =>
      Promise.resolve({ data: FETCH_ROUTE_RESPONSE })
    );

    const result = await fetchRoute("dummyTokenValue");
    expect(result).toBeDefined();
    getCall.mockRestore();
  });

  it("requests location details with token and lng/lat", async () => {
    const get = jest.spyOn(makeNetworkCall, "get");
    const post = jest.spyOn(makeNetworkCall, "post");

    post.mockImplementation(() =>
      Promise.resolve({
        data: FETCH_TOKEN_RESPONSE
      })
    );

    get.mockImplementation(() =>
      Promise.resolve({
        data: FETCH_ROUTE_RESPONSE
      })
    );

    const result = await fetchDirections("from", "to");
    expect(result).toBeDefined();
    expect(result.status).toEqual("success");
  });
});
