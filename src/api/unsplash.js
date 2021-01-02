import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID deUQ7XhGmjmV11UfFWLynvUrOxM0RdejNgKhNrMV6do",
  },
});
