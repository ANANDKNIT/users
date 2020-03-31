import axios from "axios";

export const getData = () => {
  return new Promise(resolve => {
    axios
      .get("/mockData.json")
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        console.error(error);
        return error;
      });
  });
};
