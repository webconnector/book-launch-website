IMAGE ASSETS
============

The original HTML references these three images from the existing external image host, so the page continues to display them without local image files:

1. Moonlight Stories with Grandma book cover
   https://htmlhost.co/m/5eb204a7-c42c-44be-95dc-5a6923cea71e
2. Serving My Fatherland book cover
   https://htmlhost.co/m/84b32874-b03f-43e5-bb2c-3c68c2ad8f83
3. Author portrait
   https://htmlhost.co/m/b45b9b73-b653-43cc-87f9-6a9e3847b75d

The original image files were not included with the HTML, and this environment could not retrieve them from the host. To store them locally, save the files in this folder using names such as:
- moonlight-stories-cover.jpg
- serving-my-fatherland-cover.jpg
- author-portrait.jpg

Then update each matching <img src="https://htmlhost.co/..."> in index.html to:
- images/moonlight-stories-cover.jpg
- images/serving-my-fatherland-cover.jpg
- images/author-portrait.jpg

Also update the og:image metadata URL in index.html to the publicly hosted image URL after deployment. Social preview metadata generally needs an absolute public URL, not a local relative path.
