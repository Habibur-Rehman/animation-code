import axios from "axios";

const helper = {
  scroll: (id) => {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  },
  getFirstError: (errors, suffix = "_error") => {
    console.log(`${Object.keys(errors)[0]}${suffix}`);

    return `${Object.keys(errors)[0]}${suffix}`;
  },
  get: async (url, params = {}) => {
    try {
      const response = await axios.get(url, { params });

      const { data } = response;

      if (data.status === 200) {
        return data;
      }

      if (data.status >= 400 || data.status <= 499) {
        // toast.error(data.message);
        return null;
      }
    } catch (error) {
      // notification["error"]({
      //   message: "Internal Server Error",
      // });

      // toast.error("Internal Server Error");

      console.log("error", error);
      //   return false;
    }
  },
  post: async (url, request, headers) => {
    try {
      const response = await axios.post(url, request, headers);

      const { data } = response;
      if (data.status === 200) {
        return data;
      }

      if (data.status >= 400 || data.status <= 499) {
        // toast.error(data.message);

        return null;
      }
    } catch (error) {
      // toast.error("Internal Server Error");
      console.log("error", error.response);
    }
  },
};

export default helper;
