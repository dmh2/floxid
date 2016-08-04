/**
 * Created by dave.held on 7/15/16.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class FloxidPanelContentView extends Component {
    
    constructor(props) {
        super(props);

        this.displayName = 'FloxidPanelContentView';
        this._isMounted = false;

        this.state = {
            redraw: false,
        };
    }

    render() {
        return (
            <div className="floxid-panel-row-content" ref="floxid-panel-content">
                {this.props.content}
            </div>
        );
    }
}

FloxidPanelContentView.propTypes = {
    content: React.PropTypes.any,
}

FloxidPanelContentView.defaultProps = {
    content: null,
}