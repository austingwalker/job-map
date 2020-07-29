import axios from "axios";

export default {
  getTest: function() {
    return axios.get("https://api.linkedin.com/v1/job-search?job-title=Software+Engineer");
  }
};
