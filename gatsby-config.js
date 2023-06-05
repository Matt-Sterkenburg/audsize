// Ghost API Keys
content_api_key = '7ec0690bd8beb0745af4e43f05'
admin_api_key = '647e3bbb8149a400019c5072:27064f7d03905511124c80d814d7d4b1fd9f38698e9a9dd21761ec0b77aab81a'
api_url = 'https://audsize.ghost.io'

// Airtable Keys
airtable_api_key = 'key7BR4o5dCsDxaU8'
airtable_base_id = 'appfYlMkuFw3TW2vK'
airtable_table_name = 'Company Detail'

// OpenAI Keys
openai_API_KEY = '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'
organization_id = 'org-jDDLZtw2CpDvl5g7z7XxKVcU'   // "OpenAI-Organization": "org-xxxx"


/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: api_url,
        contentApiKey: content_api_key,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: airtable_api_key, 
        tables: [
          {
            baseId: airtable_base_id,
            tableName: `Company Detail`,
          },
          // you can add more tables here
        ]
      }
    },
  ],
};
