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
                  buildHookId: '5f7f7a35ed8e210bbd107f16',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gp9gumwr',
                  apiId: '0f99c312-8945-4ccf-9657-445142be09d6'
                },
                {
                  buildHookId: '5f7f7a3564d99214be98c6f6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fouerxtv',
                  apiId: '37788be5-a4d3-4459-89be-bc6e712cad65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tburk98/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fouerxtv.netlify.app', category: 'apps'}
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
