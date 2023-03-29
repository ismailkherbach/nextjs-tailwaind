const path = require("path");
const withTM = require("next-transpile-modules")(["echarts", "zrender"]);

const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
});

module.exports = nextConfig;
