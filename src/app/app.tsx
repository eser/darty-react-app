import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './layouts/default/index';
import Home from './pages/home/index';
import Dummy from './pages/dummy/index';
import NotFound from './pages/notFound/index';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/dummy/" element={<Layout><Dummy /></Layout>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export {
    App as default,
};
