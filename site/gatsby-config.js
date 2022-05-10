module.exports = {
  siteMetadata: {
    description: "Personal page of Alan Abundis",
    locale: "en",
    title: "Alan Abundis",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "warm-red",
      },
    },
  ],
}
