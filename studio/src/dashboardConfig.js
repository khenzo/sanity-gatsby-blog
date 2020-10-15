export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f87ef90ab244d95e4bf3680',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ypxq5w8g',
                  apiId: '0ce69196-b74e-4c61-af39-dbb6b1943c3f'
                },
                {
                  buildHookId: '5f87ef9019bbc18e4e6c6624',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wet34e43',
                  apiId: 'cfb059bf-f614-46b9-bcb7-9a07ce0ea6f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/khenzo/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wet34e43.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
