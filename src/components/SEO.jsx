// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, image }) => {
const defaultImage = "https://www.panumad.com/og-image-small.jpg";
const seoImage = image || defaultImage;

return (
<Helmet>
    { /* Standard metadata tags */ }
    <title>{`${title} | Panum A.D. Structures`}</title>
    <meta name='description' content={description} />
    <meta name="keywords" content="Panum, Panum A.D., Panum Structures, Panum Ad, Panum Construction, Construction company Abuja, Building contractors Nigeria, Civil Engineering Nigeria, EPS Building Technology, Affordable housing construction" />
    
    { /* End standard metadata tags */ }
    { /* Facebook tags */ }
    <meta property="og:type" content={type || 'website'} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={seoImage} />
    { /* End Facebook tags */ }
    { /* Twitter tags */ }
    <meta name="twitter:creator" content={name} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={seoImage} />
    { /* End Twitter tags */ }
</Helmet>
)
}
export default SEO;