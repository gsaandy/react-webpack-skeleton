import React from 'react';

import Footer from 'app/components/layout/Footer';
import Nav from 'app/components/layout/Nav';

export default function Layout(props) {
    const { location } = props;
    const containerStyle = {
        marginTop: '60px',
    };
    console.log('layout');
    return (
        <div>
            <Nav location={location} />
            <div className="container" style={containerStyle}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>React Webpack Skeleton</h1>
                        {props.children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    );
}

Layout.propTypes = {
    location: React.PropTypes.object,
    children: React.PropTypes.object,
};

