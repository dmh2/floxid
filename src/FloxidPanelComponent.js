/**
 * Created by dave.held on 7/15/16.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FloxidPanelView from './FloxidPanelView';

export default class FloxidPanelComponent extends Component {

    constructor(props) {
        super(props);

        this.displayName = 'FloxidPanelComponent';
        this._isMounted = false;

        this.state = {
            redraw: false,
        };
    }

    render() {
        return (
            <FloxidPanelView header={this.props.header} content={this.props.content}>
            </FloxidPanelView>
        );
    }
}

FloxidPanelComponent.propTypes = {
    value: React.PropTypes.any,
    header: React.PropTypes.string,
    content: React.PropTypes.any,
}

FloxidPanelComponent.defaultProps = {
    value: undefined,
    header: '',
    content: null,
}