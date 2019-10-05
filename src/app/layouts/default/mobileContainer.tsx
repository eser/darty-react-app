import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Button, Responsive, Segment, Menu, Sidebar, Icon } from 'semantic-ui-react';

import getWidth from './getWidth';

function MobileContainer(props) {
    const [ sidebarOpened, setSidebarOpened ] = useState(false);

    return (
        <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth} >
            <Sidebar as={Menu} animation="push" inverted onHide={() => setSidebarOpened(false)} vertical visible={sidebarOpened}>
                <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
                <Menu.Item as={NavLink} to="/dummy/">Dummy</Menu.Item>
                <Menu.Item as="a">Log in</Menu.Item>
                <Menu.Item as="a">Sign Up</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment inverted textAlign="center" style={{ padding: '1em 0em' }} vertical>
                    <Container>
                        <Menu inverted pointing secondary size="large">
                            <Menu.Item onClick={() => setSidebarOpened(true)}>
                                <Icon name="sidebar" />
                            </Menu.Item>
                            <Menu.Item position="right">
                                <Button as="a" inverted>Log in</Button>
                                <Button as="a" inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>

                {props.children}
            </Sidebar.Pusher>
        </Responsive>
    );
}

export {
    MobileContainer as default,
};
