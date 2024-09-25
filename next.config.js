// next.config.js (if using Next.js)
module.exports = {
    webpack(config, { dev }) {
      if (dev) {
        config.module.rules.forEach((rule) => {
          if (rule.oneOf) {
            rule.oneOf.forEach((oneOf) => {
              if (
                oneOf.test &&
                oneOf.test.toString().includes("css") &&
                oneOf.use
              ) {
                oneOf.use.forEach((use) => {
                  if (
                    use.loader &&
                    use.loader.includes("css-loader") &&
                    use.options.modules
                  ) {
                    use.options.modules.localIdentName =
                      "[name]__[local]___[hash:base64:5]";
                  }
                });
              }
            });
          }
        });
      }
      return config;
    },
  };
  