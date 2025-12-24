There are three different ways to apply CSS to an HTML document.

## Adding CSS to our document

- external stylesheets (most common)
  The external stylesheets is the most common approach because this way you can use the same stylesheets
  to multiple web pages.
- internal stylesheets
  It's when we use the html 'style' tag.
- inline styles

When it comes to level of importance (the rule that will actually be applied), this is the order of
specificity:

inlines > internal stylesheets > external stylesheets

Avoid using `Inline CSS` if possible. You can already imagine how bad it is for maintainance, not
to mention it mixes structure (HTML) and styles.

## Using common selectors

Any HTML is a valid `CSS Selector`. By separating by commas we can use multiple selectors at once.
Example:

```css
p,
li {
  color: green; /* both all paragraphs and list items of our web page will be green */
}
```

There is a special selector type called `descendant combinator`, which takes the form of a space between
two other selectors

Example:

```css
foo bar {
    rule1
}
```

This is saying:
Apply `rule1` to all elements `bar` that are descendant of the element `foo` in the page.

We can select the next element from the same hierarchy level using the `+` symbol.

Example:

```css
foo + bar {
    ruleX
}
```

This is saying:

Apply `ruleX` to the `bar` element that comes right after the `foo` element.

In css there's the concept of the `state of an element`, and it's represented by a `pseudo-class`,

what is `pseudo-class`: A pseudo-class is a keyword, prefixed with a colon (:)
that defines a special state or condition to which you may want to apply styles, they have this name
because they act as if a class had been added to the elmement dinamically based on user interaction.

## transforming an element

The CSS `transform` property allows you to rotate, scale, skew or move (translate) an element.

You apply transformations using specific functions within the `transform` property value. Multiple
functions can be chained in a space separated list.

e.g.:

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  /* The element is first scaled, then rotated */
  transform: scale(1.2) rotate(1.2deg);
}
```

For more control, you can use individual `translate`, `rotate`, `scale` properties. Which are applied
in that specific order.

e.g.:

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  /* The element is first scaled, then rotated */
  scale: 1.2;
  rotate: 1.2deg;
}
```

## @rules (at rules)

@rules provide instructions for how CSS should behave.
@media is a very common @rule, which is used to create `media queries`.

Media queries use conditional logic for applying CSS styling.
They apply styles based on device characteristics, such as screen width, which is essential for responsive
design.

Example:

```css
body {
  background-color: pink; /* Default background */
}

@media (min-width: 600px) {
  body {
    background-color: lightblue; /* Background changes if viewport is wider than 600px */
  }
}
```

The are many different kind of at rules (@rule), some of them:

## @import

This one is used to import styles sheets. We can specify both a local path (relative or absolute) or an external
path (that's how we import google fonts using their apis)

Example:

```css
/* The @import rule 
 * We can import either locally (specifying the path) or from a remote source, that's how we import 
 * Google Fonts for instance.
 * */
@import url("./toImport.css");
```

Usually imports are the first things in a CSS document.

## About styles:

It's very common and idiomatic css to style things in one rule if they only havea single rule:

e.g.:

```CSS
@media (width >= 30em) {
    body { background-color: blue; }
}

@keyframes pulse {
    0%   { transform: scale(1);  }
    50%  { transform: scale(1.2);}
    100% { transform: scale(1);  }
}
```

## About animations:

We can use many different animations at the same element:

```CSS
.box {
    margin: 30px;
    width:  100px;
    height: 100px;
    background-color: rebeccapurple;
    transform: rotate(0.8turn);

    animation:
        colorchange 2s infinite,
        pulse 0.5s infinite;
}
```
