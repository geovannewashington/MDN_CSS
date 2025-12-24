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
