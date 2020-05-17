module.exports = {
  siteMetadata: {
    title: 'Skyfour - Hochzeitsband und Partyband - Buchen Sie Partymusik, Hochzeitsmusik und Live Jazz',
    description: 'Live-Band und Partyband - Wir liefern die perfekte Partymusik, ob als Hochzeitsband, Event-Band oder Jazzband.',
    author: 'Olivier Baumann',
    url: 'https://skyfour.ch',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/skyfour-favicon.png',
      },
    },
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://skyfour.ch`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    }, {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-43480308-3',
        anonymize: true,
        head: true,
      },
    }, {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-styled-components', {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-remove-serviceworker',
  ],
  // maps the author meta field in a blog markdown to the author info in the author.yaml file
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
};
