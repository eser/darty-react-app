import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Button, Responsive, Segment, Menu, Sidebar, Icon } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import getWidth from './getWidth';

import layoutStyles from './assets/styles.less';

function MobileContainer(props) {
    const [ sidebarOpened, setSidebarOpened ] = useState(false);

    return (
        <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
            <Sidebar as={Menu} animation="push" inverted onHide={() => setSidebarOpened(false)} vertical visible={sidebarOpened}>
                <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
                <Menu.Item as={NavLink} to="/dummy/">Dummy</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment inverted textAlign="center" vertical className={layoutStyles.header}>
                    <Container>
                        <Menu inverted pointing secondary size="large">
                            <Menu.Item onClick={() => setSidebarOpened(true)}>
                                <Icon name="sidebar" />
                            </Menu.Item>
                            <Menu.Item position="right">
                                <Button as="a" href="https://github.com/eserozvataf/darty-react-app" inverted>
                                    <FontAwesomeIcon icon={faGithub} />
                                    {' '}
                                    GitHub
                                </Button>
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
