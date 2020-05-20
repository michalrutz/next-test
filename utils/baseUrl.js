const baseUrl =
  process.env.NODE_ENV === "production"
    ? 'https://next-tes.herokuapp.com/'
    : "http://localhost:3000";

export default baseUrl;