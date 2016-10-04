declare var require: Function;

import { useRouterHistory } from 'react-router';

const createHashHistory = require('history/lib/createHashHistory');
const customHistory = useRouterHistory(createHashHistory)({
    queryKey: false
});

export default customHistory;
