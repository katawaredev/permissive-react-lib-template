const { createConfig } = require("rollup-config-permissive");

const configHandler = (config, format, environment) => {
  console.info(
    `Format: ${format}${environment ? `; Environment: ${environment}` : ""}`
  );
  // if (environment === "production")
  //   console.info(JSON.stringify(config, null, 2));

  return config;
};

module.exports = createConfig(configHandler);
