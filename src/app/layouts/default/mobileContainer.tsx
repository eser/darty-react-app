import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./assets/styles.less";
import layoutStyles from "./assets/styles.module.less";

function MobileContainer(props) {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <div
      as={Sidebar.Pushable}
      // at="mobile"
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={() => setSidebarOpened(false)}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item as={NavLink} to="/">Home</Menu.Item>
        <Menu.Item as={NavLink} to="/dummy/">Dummy</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          vertical
          className={layoutStyles.header}
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={() => setSidebarOpened(true)}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item position="right">
                <Button
                  as="a"
                  href="https://github.com/eserozvataf/darty-react-app"
                  inverted
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>

        {props.children}
      </Sidebar.Pusher>
    </div>
  );
}

export { MobileContainer as default };
