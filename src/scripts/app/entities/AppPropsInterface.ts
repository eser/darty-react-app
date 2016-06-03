import * as React from 'react';

import { AppModel } from '../models/AppModel';

export interface AppPropsInterface extends React.Props<any> {
    model: AppModel
}
