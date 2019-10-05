import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Button, Responsive, Visibility, Segment, Menu } from 'semantic-ui-react';

import getWidth from './getWidth';

function DesktopContainer(props) {
    const [ fixed, setFixed ] = useState(false);

    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility once={false} onBottomPassed={() => setFixed(true)} onBottomPassedReverse={() => setFixed(false)}>
                <Segment inverted textAlign="center" style={{ padding: '1em 0em' }} vertical>
                    <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
                        <Container>
                            <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
                            <Menu.Item as={NavLink} to="/dummy/">Dummy</Menu.Item>

                            <Menu.Item position="right">
                                <Button as="a" inverted={!fixed}>Log in</Button>
                                <Button as="a" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </Visibility>

            {props.children}
        </Responsive>
    );
}

export {
    DesktopContainer as default,
};
