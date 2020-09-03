# DCist Sponsored Widget Markup Generator

DCist sponsored posts will appear in the 1x4 in the top, and also in the Sidebar Widget for a given duration, usually about a week. Instructions for configuring the widget are below.

## Example

> From [DCist Stage](stage.dcist.com). On prod, this will say "Sponsored" instead of "Sponsored Content"

![Example Sponsored Post](https://github.com/wamu885/sponsored-widget-markup-generator/blob/master/images/sponsored-content-example.png)

## Set Up and Usage

> [Markup Reference](https://github.com/wamu885/sponsored-widget-markup-generator#markup-reference) below includes the markup template. You can use this if you have issues with the automatic markup generator.

1. Clone this repo
2. `cd sponsored-widget-markup-generator`
3. `open index.html`
4. Enter full URL of DCist sponsored post in the text input and ***hit enter***.
5. Copy markup from output box above the text input.
6. Go to Appearance> Widgets in WP Admin for DCist.
7. Paste into the HTML widget  (see screenshots below).
8. Drag from Inactive widgets to homepage, ***below the Newsletter Widget***.
9. Break cache by saving theme setting and clear the Pagely cache.
10. After the sponsored post needs to be taken down, drag from the homepage widget section back to the inactive widgets section.

## Steps 6 - 8

### Step 6
![Widget Admin](https://github.com/wamu885/sponsored-widget-markup-generator/blob/master/images/widget-admin.png)

### Step 7
![Custom](https://github.com/wamu885/sponsored-widget-markup-generator/blob/master/images/custom-html-inactive.png)

### Step 8
![Homepage Sidebar](https://github.com/wamu885/sponsored-widget-markup-generator/blob/master/images/homepage-sidebar.png)


## Markup Reference

In case something doesn't work with the widget, here is the markup template, for reference.

> For multiple sponsored posts, copy and paste the markup between the `<!-- Start Post -->` and `<!-- End Post -->` comments.

```html
  <div class="post-display-list widget-sponsored">
    <!-- Start Post -->
    <div class="post-layout-list-item without-audio" type="story">
        <div class="post-layout-card">
            <p class="post-timeslug"><span class="post-slug provider-external">{{ INSERT SPONSOR HERE }}</span>, <span class="post-timestamp">{{ INSERT DATE }}</span></p>
            <h2 class="post-title"><a href="{{ INSERT SPONSORED POST URL HERE }}>{{ INSERT SPONSORED POST TITLE HERE }}</a></h2>
            <div class="post-layout-list-item-button"></div>
        </div>
        <a href="{{ INSERT SPONSORED POST URL HERE }}">
            <img src="{{ INSERT 300 x 300 IMAGE URL HERE }}" class="post-image" alt="">
        </a>
    </div>
    <!-- End Post -->
	<div class="button-more-container"><a class="button-more" href="/person/sponsor/">More Sponsored Posts</a></div>
    <a href="/corporate-sponsorship/" class="learn-more">?</a>
    <style type="text/css">
        .widget-text .show-metadata > div:last-of-type:not(.button-more-container) { padding: 0; border-bottom: none; } /* Critical for cleaning up spacing and extra border on bottom */
        .widget-sponsored { position: relative; }
        @media only screen and (min-width: 25em) {
            .widget-sponsored .post-layout-list-item>a { flex-basis: 120px !important; } /* Prevents thumbnail from becoming ginormous on tablets */
            .widget-sponsored .post-layout-list-item > a:first-of-type img { max-width: 100% !important; } /* To fix thumnail width in Firefox */
        }
        .widget-sponsored .button-more-container { margin-top: -21px; }
        .widget-sponsored .learn-more { position: absolute; top: -52px; right: 0px; width: 12px; height: 12px; background-color: #999; border-radius: 50%; font-size: 10px; line-height: 12px; text-align: center; color: #fff; }
    </style>
  </div>
```
