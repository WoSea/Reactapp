import React from 'react';
import { Header } from 'semantic-ui-react';
import './index.css';

const SiteTitle = () => {
    const sHeader = 'Local Weather';
    document.title = '${sHeader} | Creature of Tech';
    return (
        <Header
            as="h1"
            content={sHeader}
            className="site-title"
            textAlign="center"
        />
    );
};
export default SiteTitle;