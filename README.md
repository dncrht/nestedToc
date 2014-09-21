# nestedToc

nestedToc is a light jQuery plugin that will automatically generate a table of contents for your page.

## Try it!

Include the file in your page.

If you have a `div#my-content` and you want to extract a table of contents out of its headings,
and put the table in `div#my-toc`…

```javascript
  $('#my-toc').nestedToc({container: '#my-content'});
```

You can pass several options:

- container: element to scan the table of contents from. By default: `body`
- ignoreH: scan from this heading level. By default: 1. This will scan h2, h3, h4…
If you want to include h1, pass a 0.

Simplest usage:

```javascript
  $('#my-toc').nestedToc();
```

## How does it look like?

Given this document:

```html
<h2>Title</h2>
Paragraph 1
<h3>Deeper title</h3>
Paragraph 2
<h2>Second title</h2>
Paragraph 3
```

You'll get:

```html
<ol>
  <li>
    <a href="#Title">Title</a>
    <ol>
      <li>
        <a href="#Deeper-title">Deeper-title</a>
      </li>
    </ol>
  </li>
  <li>
    <a href="#Second-title">Second-title</a>
  </li>
</ol>
```

The `id` attribute of the heading tags will be altered in order the links to work.

### Styling

Complement the table of contents with the CSS of your choice. Suggestion:

```css
  ol
    counter-reset: section
    list-style-type: none
    ol
      margin-left: 30px
  li
    display: block
    &:before
      counter-increment: section
      content: counters(section,".") ". "
```

…to get a nice numbered ordering:

```
1. Title
   1.1. Deeper title
2. Second title
```

Read more about [ordered list counters](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Counters).

## Problems

It is known not to work if there's a gap between levels.

```html
<h2>Title</h2>
<h4>Sub title</h4>
```

The `h4` must have been an `h3`.
