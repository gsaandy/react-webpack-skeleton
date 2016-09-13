import React from 'react';

import Article from 'app/components/Article.jsx';

export default function Featured() {
    const Articles = [
        'Some Article',
        'Some Other Article',
        'Yet Another Article',
        'Still More',
        'Some Article',
        'Some Other Article',
        'Yet Another Article',
        'Still More',
        'Some Article',
        'Some Other Article',
        'Yet Another Article',
        'Still More',
    ].map((title, i) => <Article key={i} title={title} />);

    const adText = [
        'Ad spot #1',
        'Ad spot #2',
        'Ad spot #3',
        'Ad spot #4',
        'Ad spot #5',
    ];

    const randomAd = adText[Math.round(Math.random() * (adText.length - 1))];
    console.log('featured');
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="well text-center">
                        {randomAd}
                    </div>
                </div>
            </div>

            <div className="row">{Articles}</div>
        </div>
    );
}
