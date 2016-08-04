/**
 * Created by dave.held on 7/15/16.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class FloxidPanelHeaderView extends Component {
    
    constructor(props) {
        super(props);

        this.displayName = 'FloxidPanelHeaderView';
        this._isMounted = false;

        this.state = {
            redraw: false,
        };
    }

    _handleHeaderClick(event){
        if(this.props.handleHeaderClick){
            this.props.handleHeaderClick(event);
        }
    }

    render() {
        return (
            <div className="floxid-panel-row-header" ref="floxid-panel-header" onClick={this._handleHeaderClick.bind(this)}>
                {this.props.text}
            </div>
        );
    }
}

FloxidPanelHeaderView.propTypes = {
    text: React.PropTypes.string,
    handleHeaderClick: React.PropTypes.func,
}

FloxidPanelHeaderView.defaultProps = {
    text: '',
    handleHeaderClick: null,
}