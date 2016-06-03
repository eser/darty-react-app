import * as React from 'react';

import { appModel } from '../models/appModel';

export interface appPropsInterface extends React.Props<any> {
    model: appModel
}
