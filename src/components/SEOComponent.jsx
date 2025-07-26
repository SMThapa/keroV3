import { Helmet } from 'react-helmet';

function SEOComponent({ title, description, image, url }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <link rel="canonical" href={url} />
      </Helmet>
    </>
  );
}

export default SEOComponent;
