function markup ( 
  sponsor,
  date,
  linkPath,
  title,
  imageUrl300x300
) {
  return `
  <div class="post-display-list widget-sponsored">
    <!-- Start Post -->
    <div class="post-layout-list-item without-audio" type="story">
        <div class="post-layout-card">
            <p class="post-timeslug"><span class="post-slug provider-external">${sponsor}</span>, <span class="post-timestamp">${date}</span></p>
            <h2 class="post-title"><a href="${linkPath}">${title}</a></h2>
            <div class="post-layout-list-item-button"></div>
        </div>
        <a href="${linkPath}">
            <img src="${imageUrl300x300}" class="post-image" alt="">
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
  `
}

function getPostData(link) {
  const storyURLFragment = link.split('/story')[1]
  const dcistURL = `https://dcist.com/wp-json/wp/v2/wamu-story${storyURLFragment}`
  fetch(dcistURL)
    .then(res => res.json())
    .then(story => {
      const title = story.title.replace('Sponsored: ', '').replace('Sponsored:', '')
      const sponsor = extractSponsor(story.content)
      const date = getDate(story.created)
      const imageUrl300x300 = story.imageData.sizes.ratio112x.url
      const linkPath = link.split('dcist.com')[1]
      const html = markup ( 
        sponsor,
        date,
        linkPath,
        title,
        imageUrl300x300
      )
      promoHTML.innerText = html
    })
}

function extractSponsor (content) {
  const regex = /<div class="sponsored-bar">Paid for and posted by <strong>(.+)<\/strong>/
  return content.match(regex)[1]
}

function getDate (storyCreatedAt) {
  const date = new Date(storyCreatedAt)
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ][date.getMonth()]
  const day = date.getDate()
  return `${month} ${day}`
}

document.querySelector('form').addEventListener('submit', handleSubmit)

function handleSubmit (event) {
  event.preventDefault()
  getPostData(storyURLInput.value)
  console.log(storyURLInput.value)
}