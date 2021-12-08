export function getStrapiMedia(url) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (
    url.startsWith("http") ||
    url.startsWith("//") ||
    url.startsWith("https")
  ) {
    return url;
  }

  if (url.startsWith("https://res.cloudinary.com")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${process.env.url || "http://localhost:1344"}${url}` || url;
}
