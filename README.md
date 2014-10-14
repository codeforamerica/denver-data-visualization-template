Denver Data Visualization Template
=====================


Table of Contents
* [What is the Denver Data Visualization Template?][whatis]
* [Technical details and developer documentation][technical]
* [License][license]


[whatis]: #what-is-the-denver-data-visualization-template
[technical]: #technical-details
[license]: #license

##What is the Denver Data Visualization Template?

The Denver Data Visualization Template is a starting point for anyone to create rich, interactive, and visual dashboards using open data. The template created by the 2014 Code for America Fellows for the City and County of Denver. So far the template has been used to create the following visualizations:

* [Marijuana Indicators in Denver][mj-viz]
* [Denver 311 Indicators][311-viz]

[mj-viz]: http://mj.denvervisualizations.com
[311-viz]: http://denvervisualizations.com/

[Read more about the Denver Data Visualization Template here](/docs/about.md)

##Technical Details

This is the starting point for Denver visualizations. It unifies the look and feel of the sites. All visualizations share the same stack, built on top of jekyll. ETL scripts update the data from Denver's [open data portal][portal]. See the readme for each repo for additional details.

[portal]: http://data.denvergov.org/

**Languages**: Javascript, HTML, CSS, Ruby (ETL scripts)


### Platform pieces
* [jekyll][jekyll] is a static site generator.
* [D3][d3] is the charting library we use to generate visualizations
* [SASS][SASS] is used for managing CSS variables.
* [jQuery][jquery] is used for handling navigation and chart responsivity.
* [Bootstrap 3.1.1][bootstrap] is used as the frontend HTML/CSS/JS framework.

[jekyll]: http://jekyllrb.com/
[d3]: http://d3js.org/
[sass]: http://sass-lang.com/
[jquery]: http://jquery.com/
[bootstrap]: http://getbootstrap.com/

### Libraries
* [dimple][dimple] is a D3 plugin that makes it easier to generate and style charts
* [handlebars][handlebars] is templating library.
* [Rake][rake] is used to run the ETL scripts.

[dimple]: http://dimplejs.org/
[handlebars]: http://handlebarsjs.com/
[rake]: https://github.com/jimweirich/rake

### Prerequisites
* [Ruby 2.1.1][ruby]
* [Bundler][bundler] in the command line: ` gem install bundler `

[ruby]: https://www.ruby-lang.org/en/news/2014/02/24/ruby-2-1-1-is-released/
[bundler]: http://bundler.io/

### Code
See the readmes for other visualization repos for specific deployment details.

[This is the template repo][code].

[code]: https://github.com/codeforamerica/denver-data-visualization-template

### Installation, Usage

**Download dependencies** in the command line: ` bundle `

#### Local Development
1. Jekyll compiles everything into a static site in the _site folder. In order to get the latest changes and start the server, use the following command: `jekyll serve --watch`
1. Navigate to [localhost:4000][local] to preview the site. Most changes will update immediately. The exception is changes to *_config.yml*. The server will need to be restarted in that case.

[local]: http://localhost:4000  

#### Deployment
1. Compile the site: `jekyll build`
1. Deploy contents of */_site* to server.

#### ETL Scripts
[Rake][] tasks exist for each section of the data visualization. These tasks query the open data portal and update the csv files located in /data with the latest data. These can be set to run on a schedule through task scheduler (windows), a cron job (others), or heroku scheduler (heroku). Errors output to the console.
* List all tasks: `rake -T`
* Run all tasks: `rake`

[rake]: https://github.com/jimweirich/rake


### Submitting an Issue
We use the GitHub issue tracker to track bugs and features. Before submitting a bug report or feature request, check to make sure it hasn't already been submitted. When submitting a bug report, please include a [Gist][] that includes a stack trace and any details that may be necessary to reproduce the bug.

[gist]: https://gist.github.com/

### Submitting a Pull Request
1. [Fork the repository.][fork]
2. [Create a topic branch.][branch]
3. [Submit a pull request.][pr]

[fork]: http://help.github.com/fork-a-repo/
[branch]: http://learn.github.com/p/branching.html
[pr]: http://help.github.com/send-pull-requests/

##License
See the [LICENSE][] for details.
[license]: https://github.com/boonrs/denver-infographic-template/blob/master/LICENSE

