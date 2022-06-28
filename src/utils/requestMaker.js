import axios from "axios";

export const requestMaker = (url, action, body) => {
  return axios[action](url, body && body).then((res) => res);
};

export const getCoins = async (url) => {
  const { data } = await requestMaker(url, "get");
  return data;
};
