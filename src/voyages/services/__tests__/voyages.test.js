import { fetchDirections, fetchVoyage, fetchToken } from "../voyages";
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

const FETCH_ROUTE_FAILURE_RESPONSE = {
  status: "failure",
  error: "Location not accessible by car"
};

const FETCH_TOKEN_RESPONSE = {
  token: "token"
};

describe("API calls check", () => {
  let get, post;

  beforeEach(() => {
    get = jest.spyOn(makeNetworkCall, "get");
    post = jest.spyOn(makeNetworkCall, "post");

    post.mockImplementation(() =>
      Promise.resolve({
        data: FETCH_TOKEN_RESPONSE
      })
    );
  });

  it("request token from backend", async () => {
    const token = await fetchToken("from", "to");
    expect(token).toBeDefined();
    post.mockRestore();
  });

  it("request location points from backend", async () => {
    get.mockImplementation(() =>
      Promise.resolve({ data: FETCH_ROUTE_RESPONSE })
    );
    const result = await fetchVoyage("dummyTokenValue");
    expect(result).toBeDefined();
    get.mockRestore();
  });

  it("requests location details with token and lng/lat", async () => {
    get.mockImplementation(() =>
      Promise.resolve({
        data: FETCH_ROUTE_RESPONSE
      })
    );

    const result = await fetchDirections("from", "to");
    expect(result).toBeDefined();
    expect(result.status).toEqual("success");
    get.mockRestore();
  });

  it("handles faliure responses while requesting location details with token and lng/lat", async () => {
    get.mockImplementation(() =>
      Promise.resolve({
        data: FETCH_ROUTE_FAILURE_RESPONSE
      })
    );

    const result = await fetchDirections("from", "to");
    expect(result).toBeDefined();
    expect(result.status).toEqual("failure");
    expect(result.error).toEqual("Location not accessible by car");
    get.mockRestore();
  });
});
