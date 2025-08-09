export const siteLink =
  process.env.NODE_ENV !== "development"
    ? process.env.SITE_LINK
    : "http://localhost:3000";
export const siteName = "DeepSentry";
