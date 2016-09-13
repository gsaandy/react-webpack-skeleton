import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {

    static propTypes = {
        location: React.PropTypes.object,
    };

    constructor() {
        super();
        this.state = {
            collapsed: true,
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        console.log(this);
        const collapsed = this.state.collapsed;
        this.setState({ collapsed });
    }

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;
        const featuredClass = location.pathname === '/' ? 'active' : '';
        const archivesClass = location.pathname.match(/^\/archives/) ? 'active' : '';
        const settingsClass = location.pathname.match(/^\/settings/) ? 'active' : '';
        const navClass = collapsed ? 'nav navbar-nav' : 'nav navbar-nav';

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" onClick={this.toggleCollapse}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                    </div>
                    <div className={'navbar-collapse'} id="bs-example-navbar-collapse-1">
                        <ul className={navClass}>
                            <li className={featuredClass} >
                                <IndexLink to="/" onClick={this.toggleCollapse}>Featured</IndexLink>
                            </li>
                            <li className={archivesClass}>
                                <Link to="archives" onClick={this.toggleCollapse}>Archives</Link>
                            </li>
                            <li className={settingsClass}>
                                <Link to="settings" onClick={this.toggleCollapse}>Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
