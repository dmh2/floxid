/**
 * Created by dave.held on 7/15/16.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FloxidPanelHeaderComponent from './FloxidPanelHeaderComponent';
import FloxidPanelContentComponent from './FloxidPanelContentComponent';

export default class FloxidPanelView extends Component {
    
    constructor(props) {
        super(props);

        this.displayName = 'FloxidPanelView';
        this._isMounted = false;

        this.state = {
            redraw: false,
        };
    }

    render() {
        return (
            <div className="floxid-panel-row floxid-column" ref="floxid-panel">
                <FloxidPanelHeaderComponent text={this.props.header}/>
                <FloxidPanelContentComponent content={this.props.content}/>
            </div>
        );
    }
}

FloxidPanelView.propTypes = {
    value: React.PropTypes.any,
    header: React.PropTypes.string,
    content: React.PropTypes.any,
}

FloxidPanelView.defaultProps = {
    value: undefined,
    header: '',
    content: null,
}