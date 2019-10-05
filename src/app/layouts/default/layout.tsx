import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faDiscord, faSlack, faGithub } from '@fortawesome/free-brands-svg-icons';

import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

import ResponsiveContainer from './responsiveContainer';

import 'semantic-ui-css/semantic.css';
import './assets/fonts/arbutus-slab.scss';
import layoutStyles from './assets/styles.scss';

function Layout(props) {
    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help

    return (
        <ResponsiveContainer>
            {props.children}

            <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as="h4" content="About" />
                                <List link inverted>
                                    <List.Item as="a">Sitemap</List.Item>
                                    <List.Item as="a">Contact Us</List.Item>
                                    <List.Item as="a">Religious Ceremonies</List.Item>
                                    <List.Item as="a">Gazebo Plans</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as="h4" content="Services" />
                                <List link inverted>
                                    <List.Item as="a">Banana Pre-Order</List.Item>
                                    <List.Item as="a">DNA FAQ</List.Item>
                                    <List.Item as="a">How To Access</List.Item>
                                    <List.Item as="a">Favorite X-Men</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as="h4" inverted>
                                    Footer Header
                                </Header>
                                <p>
                                    Extra space for a call to action inside the footer that could help re-engage users.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </ResponsiveContainer>
    );
}

export {
    Layout as default,
};
