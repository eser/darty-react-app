import React from 'react';
import { NavLink } from 'react-router-dom';

interface LayoutContainerProps {
}

interface LayoutContainerState {
}

class LayoutContainer extends React.Component<LayoutContainerProps, LayoutContainerState> {
    constructor(props: LayoutContainerProps, context: any) {
        super(props, context);

        this.state = {};
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    render(): JSX.Element {
        return (
            <div className="hero is-fullheight">
                <header className="header hero-head">
                    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                        <div className="container">
                            <div className="navbar-brand">
                                {/* <div className="navbar-item">
                                    Dart React App
                                </div> */}
                                <span className="navbar-burger burger" role="button" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </span>
                            </div>
                            <div id="navbarMenu" className="navbar-menu">
                                <div className="navbar-start">
                                    <NavLink exact={true} to="/" className="navbar-item" activeClassName="is-active">Home</NavLink>
                                    <NavLink to="/dummy/" className="navbar-item" activeClassName="is-active">Dummy</NavLink>
                                </div>
                                <div className="navbar-end">
                                    <a className="navbar-item" href="https://github.com/eserozvataf/dart-react-app">
                                        <span className="icon"><i className="fa fa-code-fork fa-fw" aria-hidden="true"></i></span>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <main className="section hero-body">
                    <div className="container">
                        <div className="content">
                            {this.props.children}
                        </div>
                    </div>
                </main>
                <footer className="footer hero-foot">
                    <div className="container">
                        <div className="content has-text-centered">
                            Dart React App is a front-end development stack for starting with a structured, scaleable and adaptable basecode.<br />
                            Visit <a href="https://github.com/eserozvataf/dart-react-app">GitHub page</a> for details. Apache License, Version 2.0
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export {
    LayoutContainer as default,
    LayoutContainerProps,
    LayoutContainerState,
};
