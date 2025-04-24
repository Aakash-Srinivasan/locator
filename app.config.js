const IS_BUSINESS = process.env.APP_VARIANT === "business";
const IS_DEFAULT = process.env.APP_VARIANT === "default";
const getUniqueIdentifier = () => {
  if (IS_DEFAULT) {
    return "com.app.locator";
  } else if (IS_BUSINESS) {
    return "com.app.delieverylocator";
  }
};

const getAppName = () => {
  if (IS_DEFAULT) {
    return "Locator";
  } else if (IS_BUSINESS) {
    return "Route Locator";
  }
};

const getAppIcon = () => {
  if (IS_DEFAULT) {
    return "./assets/images/icon-customer.jpg";
  } else if (IS_BUSINESS) {
    return "./assets/images/icon-business.jpg";
  }
};

export default ({ config }) => ({
  ...config,
  name: getAppName(),
  icon: getAppIcon(), // 👈 Add this line
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
  },
  extra: {
    ...config.extra,
    appVariant: process.env.APP_VARIANT || "default",
  },
});
