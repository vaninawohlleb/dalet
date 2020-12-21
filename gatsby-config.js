require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Далет - център за познание`,
    author: {
      name: `Ванина Цонева`,
      summary: `Тук разширявате знанието си, освобождавате надеждата и сте архитект на идеите си. Далет е Портал към благоприятните пътища за опознаване на себе си и света и Междинна станция за вас и връзката ви с автентичността. Вие сте архитектът, а ние сме материализацията чрез курсове, практики и индивидуални консултации.`,
    },
    description: `Тук разширявате знанието си, освобождавате надеждата и сте архитект на идеите си. Далет е Портал към благоприятните пътища за опознаване на себе си и света и Междинна станция за вас и връзката ви с автентичността.Вие сте архитектът, а ние сме материализацията чрез курсове, практики и индивидуални консултации.`,
    siteUrl: `https://daletcenter.com`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "371928883772986",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
