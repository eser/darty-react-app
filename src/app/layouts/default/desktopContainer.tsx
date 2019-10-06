import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Button, Responsive, Visibility, Segment, Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import getWidth from './getWidth';

import layoutStyles from './assets/styles.scss';

function DesktopContainer(props) {
    const [ fixed, setFixed ] = useState(false);

    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility once={false} onBottomPassed={() => setFixed(true)} onBottomPassedReverse={() => setFixed(false)}>
                <Segment inverted textAlign="center" vertical className={layoutStyles.header}>
                    <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
                        <Container>
                            <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
                            <Menu.Item as={NavLink} to="/dummy/">Dummy</Menu.Item>

                            <Menu.Item position="right">
                                <Button as="a" href="https://github.com/eserozvataf/darty-react-app" inverted={!fixed} primary={fixed}>
                                    <FontAwesomeIcon icon={faGithub} />
                                    {' '}
                                    GitHub Repository
                                </Button>
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
