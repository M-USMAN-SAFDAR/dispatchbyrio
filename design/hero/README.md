# RIO cinematic hero assets

The live website uses an original procedural Three.js truck scene and `client/public/media/rio-hero-poster.jpg` as its fallback. The unused MP4 has been removed from deployed assets. The original source images and offline render script are retained here for future design work.

The two source images were made with the built-in imagegen tool, then rendered locally with slow camera pushes and crossfades using FFmpeg. This is an image-based motion film, not generated footage of an independently moving truck. Higgsfield rejected both Seedance 2.5 and Kling 3.0 generation attempts with “Requires plus plan or higher”; neither attempt returned a job.

The visual direction follows the supplied reference: a realistic side-profile semi in warm sunset light, then an elevated freight-yard composition. All website text is HTML, separate from the media.

`render-film.py` recreates the film and poster using Python with `imageio-ffmpeg`. Source PNGs are kept here rather than in the deployed public directory.

The current 3D hero pauses offscreen and in hidden tabs, respects reduced-motion preferences, and retains the poster if WebGL fails. Animation starts automatically; the scroll journey has no play/pause or chapter controls.

## Sunset source prompt

Use case: ads-marketing. Asset type: cinematic website hero background, ultra-wide 16:9 landscape 2560x1440. Create an exceptionally realistic high-end CGI automotive commercial still: a modern aerodynamic American sleeper semi truck with a long unbranded cream dry van trailer, in entire side profile, nose facing right, parked on a vast beautifully smooth dark asphalt freight yard at golden-hour sunset. The tractor is rich burnished copper orange, physically detailed sculpted aerodynamic panels, real glass windows, chrome wheel hubs and realistic tires, accurate chassis, trailer ribbing and subtle reflective details. Entire truck visible from x=15% to x=87%, wheels at y=68%, trailer top at y=42%. Low horizon at 59%, vast luminous uncluttered sky taking the upper half, gradients from amber yellow near the horizon to smoky blue gray overhead. Sun low far left off frame, fine atmospheric haze, dramatic long shadow cast toward foreground right. Distant minimal warehouse silhouettes very low on horizon only. Sophisticated photographic lighting and subtle film grain, visually like an expensive logistics company brand film. Wide eye-level profile shot with 70mm lens, realistic proportions. Upper 35% of sky and lower 22% dark asphalt must stay empty for HTML text overlays. NO text, no logos, no watermarks, no UI, no monitor or desk, no border. No cartoon, no low-poly, no geometric toy, no people. Professional photorealistic cinematic image, cohesive warm amber and deep charcoal color palette.

## Yard source prompt

Use the sunset truck image as a visual identity reference. Create the next scene of the same premium logistics brand film: a photorealistic elevated drone view of an organized American freight yard at late golden hour, with the same aerodynamic copper-orange sleeper tractor and cream long trailer prominent center-right. Include cream trailers at a warehouse loading dock, warm practical yard lights, an orange sunset, and generous dark asphalt for HTML copy. Wide 16:9 composition, accurate vehicle detail, professional automotive rendering. No text, logos, UI, watermark, monitor, toy-like or low-poly appearance.
