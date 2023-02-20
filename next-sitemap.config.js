/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: "*", allow: "/" },
      ],
      additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
    },
    exclude: ["/login", "/about", "/privacity-policy", "/favorite", "/forgot", "", "/user", "/contact", "dmca", "register"],
};