# Classroom Build

A static One Classroom prototype, built with [Jekyll](http://jekyllrb.com).

## Getting Started

#### Requisites

1. Ruby as [required by Jekyll](http://jekyllrb.com/docs/installation/)
2. [Bundler](http://bundler.io) via `gem install bundler`
3. [Node.js](https://changelog.com/install-node-js-with-homebrew-on-os-x/) with npm

#### Install

1. Clone this repository
2. Run `bundle install`
3. Run `bundle exec rake`

#### Run

1. Run `bundle exec jekyll serve`
2. View the site at http://127.0.0.1:4000

## Creating Courses

Creating a new course called _Sample Course_:

1. Create a new folder called `/_courses/sample-course/`.
2. Create a new [YAML](http://jekyllrb.com/docs/datafiles/) file called  `/_data/courses/sample-course.yml`, containing:

	```yaml
	name: Sample Course
	navigation:
	    - slug: index
	      label: Overview
	    - slug: assignment
	      label: Assignment
	    - slug: calendar
	      label: Calendar
	    - slug: discussion
	      label: Discussion
	```
3. Create file `/_courses/sample-course/index.md` containing:
	```markdown
	---
	title: "Overview: Sample Course"
	layout: course
	course: sample-course
	---

	Hello world.
	```
4. Visit the newly created course at http://127.0.0.1:4000/courses/sample-course/
5. Add other pages as needed.

## Development

#### Overview

* Jekyll stores content in [Markdown](https://help.github.com/articles/markdown-basics/) format.
* Layouts use the [Liquid](http://liquidmarkup.org/) template system.
* Front-end CSS is pre-processed with [SASS](http://sass-lang.com).
* [Zurb Foundation](http://foundation.zurb.com/docs/) is used as a front-end framework.
* For further details see [Jekyll Directory Structure](http://jekyllrb.com/docs/structure/).


#### Content

See the `courses` folder to create and modify course content.

Metadata about each course is stored in `_data/courses/course-name.yml`

#### HTML Templates

Templates are stored in folders `_layouts` and `_includes`.

See [Jekyll Templates Guide](http://jekyllrb.com/docs/templates/) for more details.

See [Zurb Foundation Grids](http://foundation.zurb.com/grid.html) for details about the structure of the HTML used in front-end templates.

#### CSS

Start with `/css/main.scss` and the `_sass` folder.

Sass files are compiled down to `_site/css/main.css`.

You can configure Sass settings in the `sass` section of `_config.yml`.

Portions of the Zurb Foundation framework are included in `/css/main.css`, as well as [normalize.css](https://necolas.github.io/normalize.css/). Some unused components of Zurb Foundation have been commented out to reduce the size of the resulting compiled CSS.

Changes to Sass files are automatically compiled by Jekyll.

## Testing

HTML content generated in the `_site` folder is tested with [HTML Proof](https://github.com/gjtorikian/html-proofer). Just run:

	bundle exec htmlproof ./_site/courses
