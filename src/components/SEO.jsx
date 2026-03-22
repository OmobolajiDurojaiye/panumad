// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type }) => {
return (
<Helmet>
    { /* Standard metadata tags */ }
    <title>{title} | Panum Ad Construction & Engineering</title>
    <meta name='description' content={description} />
    <meta name="keywords" content="Construction company Abuja, Building contractors Nigeria, Civil Engineering Nigeria, EPS Building Technology, Affordable housing construction, Panum Ad" />
    
    { /* End standard metadata tags */ }
    { /* Facebook tags */ }
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    { /* End Facebook tags */ }
    { /* Twitter tags */ }
    <meta name="twitter:creator" content={name} />
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    { /* End Twitter tags */ }
</Helmet>
)
}
export default SEO;