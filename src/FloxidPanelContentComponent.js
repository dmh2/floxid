/**
 * Created by dave.held on 8/2/16.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FloxidPanelContentView from './FloxidPanelContentView';

export default class FloxidPanelContentComponent extends Component {

    constructor(props) {
        super(props);

        this.displayName = 'FloxidPanelContentComponent';
        this._isMounted = false;

        this.state = {
            redraw: false,
        };
    }

    render() {
        return (
            <FloxidPanelContentView content={this.props.content}>
            </FloxidPanelContentView>
        );
    }
}

FloxidPanelContentComponent.propTypes = {
    content: React.PropTypes.any,
}

FloxidPanelContentComponent.defaultProps = {
    content: null,
}