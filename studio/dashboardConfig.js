export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f32d0fafc532956c4a08aec',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gipnt879',
                  apiId: '95b5135e-a270-4e9e-a9a0-29883e39a3e9'
                },
                {
                  buildHookId: '5f32d0fafc532983e7a08546',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1x4s84cy',
                  apiId: 'd397fea3-3ff8-47d6-8279-9085ab8371c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rishikashyap099/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1x4s84cy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
