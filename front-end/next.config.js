const url = process.env.NEXT_API_URL;
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "res.cloudinary.com", "admin.duecoaching.com"],
  },
  env: {
    url: url,
  },
};
