import { Link } from 'react-router-dom';
import './PageBanner.scss';


function PageBanner({ pagename, path }) {
    return (
        <>
            <section className="page-banner">
                <div className='container'>
                    <h2 className="page-name">{pagename}</h2>
                    <p className="breadcrumb"><Link to="/">Home</Link> &gt; {path}</p>
                </div>
            </section >
        </>
    )
}

export default PageBanner