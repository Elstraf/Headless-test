import axios from "axios";

const getPosts = async () => {
  const res = await axios.get(
    "https://public-api.wordpress.com/rest/v1.1/sites/callumpowley.wordpress.com/posts/"
  );

  return res;
};

const getSinglePost = async (id) => {
  const res = await axios.get(
    `https://public-api.wordpress.com/rest/v1.1/sites/callumpowley.wordpress.com/posts/${id}`
  );

  return res;
};

export { getPosts, getSinglePost };
