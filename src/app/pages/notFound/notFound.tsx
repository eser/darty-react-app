import React from 'react';

import { Header } from 'semantic-ui-react';

function NotFound() {
    return (
        <>
            <Header as="h1">Not Found</Header>

            Page not found
        </>
    );
}

export {
    NotFound as default,
};
