import React from 'react';

import Article from 'app/components/Article.jsx';

export default function Archives(props) {
    const { query } = props.location;
    const { params } = props;
    const { article } = params;
    const { date, filter } = query;

    const Articles = [
        'Some Article',
        'Some Other Article',
        'Yet Another Article',
        'Still More',
        'Fake Article',
        'Partial Article',
        'American Article',
        'Mexican Article',
    ].map((title, i) => <Article key={i} title={title} />);

    return (
        <div>
            <h1>Archives</h1>
            article: {article}, date: {date}, filter: {filter}
            <div className="row">{Articles}</div>
        </div>
    );
}

Archives.propTypes = {
    location: React.PropTypes.object,
    params: React.PropTypes.object,
};
