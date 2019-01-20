import { makeNetworkCall } from '../../../shared/services/axios';

const fetchToken = async (from, to) => {
    const request = {
        from,
        to
    };
    const response = await makeNetworkCall.post("/route", request);
    const { token } = response.data;
    return token;
};

const fetchRoute = async token => {
    const response = await makeNetworkCall.get(`/route/${token}`);
    return response.data;
};

const fetchDirections = async (from, to) => {
    const token = await fetchToken(from, to);
    let result = await fetchRoute(token);

    // if status is 'in progress' then retry the request again
    if (
        result &&
        result.status &&
        result.status.toLowerCase() === "in progress"
    ) {
        result = await fetchDirections(from, to);
    }

    return result;
};

export { fetchToken, fetchRoute, fetchDirections };
