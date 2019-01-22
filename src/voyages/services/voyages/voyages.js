import { makeNetworkCall } from "../../../shared/services/axios";

// Responsible for fetching token value
const fetchToken = async (from, to) => {
  const request = {
    from,
    to
  };
  const response = await makeNetworkCall.post("/route", request);
  const { token } = response.data;
  return token;
};

// Responsible for fetching Route if token value available
const fetchVoyage = async token => {
  const response = await makeNetworkCall.get(`/route/${token}`);
  return response.data;
};

// Handle server response and retry if server busy
const fetchDirections = async (from, to) => {
  const token = await fetchToken(from, to);
  let result = await fetchVoyage(token);

  // if status is 'in progress' then retry the request again
  if (
    result &&
    result.status &&
    result.status.toLowerCase() === "in progress"
  ) {
    // calls itself again if server busy
    result = await fetchDirections(from, to);
  }

  return result;
};

export { fetchToken, fetchVoyage, fetchDirections };
