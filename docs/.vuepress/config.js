module.exports = {
  title: "Ts.ED",
  description: "A TypeScript Framework on top of Express",
  serviceWorker: false,
  theme: "tsed",
  themeConfig: {
    version: require("../../package").version,
    repo: "TypedProject/ts-express-decorators",
    gitterUrl: "https://gitter.im/Tsed-io/community",
    editLinks: true,
    docsDir: "docs",
    sidebar: "auto",
    ga: "UA-35240348-1",
    apiUrl: "/api.json",
    algolia: {
      apiKey: "f8a038207e461aaac0e2fd16403c2b01",
      indexName: "ts_ed"
    },

    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: "Getting started",
            link: "/getting-started.html"
          },
          {
            text: "Configuration",
            link: "/configuration.html"
          },
          {
            text: "Docs",
            items: [
              {
                text: "Overview",
                items: [
                  {link: "/docs/controllers.html", text: "Controllers", items: []},
                  {link: "/docs/providers.html", text: "Providers"},
                  {link: "/docs/model.html", text: "Models"},
                  {link: "/docs/converters.html", text: "Converters"},
                  {link: "/docs/middlewares.html", text: "Middlewares"},
                  {link: "/docs/filters.html", text: "Filters"},
                  {link: "/docs/interceptors.html", text: "Interceptors"},
                  {link: "/docs/server-loader.html", text: "ServerLoader"}
                ]
              },
              {
                text: "Advanced",
                items: [
                  {link: "/docs/injection-scopes.html", text: "Injection scopes"},
                  {link: "/docs/customer-provider.html", text: "Custom Providers"},
                  {link: "/docs/testing.html", text: "Testing"},
                  {link: "/api.html", text: "Api Reference"}
                ]
              }
            ]
          },
          {
            text: "Guide",
            type: "links",
            items: [
              {link: "/tutorials/", text: "Examples"},
              {link: "/tutorials/authentication.html", text: "Authentication"},
              {link: "/tutorials/session.html", text: "Session & cookies"},
              {link: "/tutorials/passport.html", text: "Passport.js"},
              {link: "/tutorials/typeorm.html", text: "TypeORM"},
              {link: "/tutorials/mongoose.html", text: "Mongoose"},
              {link: "/tutorials/graphql.html", text: "GraphQL"},
              {link: "/tutorials/socket-io.html", text: "Socket.io"},
              {link: "/tutorials/swagger.html", text: "Swagger"},
              {link: "/tutorials/ajv.html", text: "Validation with AJV"},
              {link: "/tutorials/multer.html", text: "Upload files"},
              {link: "/tutorials/serve-static-files.html", text: "Serve static files"},
              {link: "/tutorials/templating.html", text: "Templating"},
              {link: "/tutorials/throw-http-exceptions.html", text: "Throw HTTP exceptions"},
              {link: "/tutorials/not-found-page.html", text: "Customize 404"},
              {link: "/tutorials/aws.html", text: "AWS project"}
            ]
          }
        ],

        sidebar: {
          "/docs/middlewares/": [{
            title: "Middlewares",
            collapsable: false,
            children: [
              "global-middleware",
              "global-error-middleware",
              "endpoint-middleware",
              "endpoint-error-middleware",
              "call-sequence",
              "override-middleware",
              "override/authentication",
              "override/global-error-handler",
              "override/response-view",
              "override/send-response"
            ]
          }],

          "/docs/": [
            {
              title: "Overview",
              collapsable: false,
              children: [
                "controllers",
                "providers",
                "model",
                "converters",
                "middlewares",
                "filters",
                "interceptors",
                "server-loader"
              ]
            },
            {
              title: "Advanced",
              collapsable: false,
              children: [
                "injection-scopes",
                "custom-providers",
                "testing"
              ]
            }
          ],


          "/tutorials/": [{
            title: "Guide",
            collapsable: false,
            children: [
              "",
              "authentication",
              "session",
              "passport",
              "typeorm",
              "mongoose",
              "graphql",
              "socket-io",
              "swagger",
              "ajv",
              "custom-validator",
              "multer",
              "serve-static-files",
              "templating",
              "throw-http-exceptions",
              "not-found-page",
              "aws"
            ]
          }]
        },

        otherTopics: [
          "/tutorials/authentication",
          "/tutorials/session",
          "/tutorials/passport",
          "/tutorials/typeorm",
          "/tutorials/mongoose",
          "/tutorials/graphql",
          "/tutorials/socket-io",
          "/tutorials/swagger",
          "/tutorials/ajv",
          "/tutorials/custom-validator",
          "/tutorials/multer",
          "/tutorials/serve-static-files",
          "/tutorials/templating",
          "/tutorials/throw-http-exceptions",
          "/tutorials/not-found-page",
          "/tutorials/aws",
          "/docs/controllers",
          "/docs/providers",
          "/docs/model",
          "/docs/converters",
          "/docs/middlewares",
          "/docs/filters",
          "/docs/interceptors",
          "/docs/server-loader",
          "/docs/injection-scopes",
          "/docs/custom-providers",
          "/docs/testing"
        ],

        footer: {
          lastUpdated: "Last update",
          caughtMistake: "Caught a mistake or want to contribute to the documentation?",
          editPageOnGithub: "Edit on Github",
          contribute: "Contribute",
          helpToContribute: "Help shape the future of Ts.Ed by joining our team and send us pull requests via our",
          githubRepository: "GitHub repository!",
          license: "License",
          releaseUnder: "Released under the",
          documentationGeneratedWith: "Documentation generated with"
        }
      }
    }
  },
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require("vuepress-theme-tsed/plugins/markdown-it-symbol"));
    }
  }
};
