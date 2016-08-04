/**
 * Created by dave.held on 8/2/16.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FloxidPanelHeaderView from './FloxidPanelHeaderView';

export default class FloxidPanelHeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.displayName = 'FloxidPanelHeaderComponent';
        this._isMounted = false;

        this.state = {
            redraw: false,
        };
    }

    /**
     * For proof of concept, we assume the parentElement of this header control is the outer panel div,
     * which we'll toggle on clicks.
     * @param event
     * @private
     */
    _handleHeaderClick(event){
        // TODO: move click handling to a centralized event/stream-handling script to manage panel opening/closing,
        // e.g. to enable single vs multiple open panels at once.
        let headerElement = event && event.nativeEvent ? event.nativeEvent.target : null ;
        let panelElement = headerElement && headerElement.parentElement ? headerElement.parentElement : null ;

        // Check that the element is the correct outer element by the base of its className.
        if(panelElement && panelElement.className && panelElement.className.indexOf('floxid-panel-row-') >= 0) {
            if(panelElement.className.indexOf('floxid-panel-row-closed') >= 0) {
                panelElement.className = panelElement.className.replace('floxid-panel-row-closed', 'floxid-panel-row-open');
            }
            else {
                panelElement.className = panelElement.className.replace('floxid-panel-row-open', 'floxid-panel-row-closed');
            }
        }
    }

    render() {
        return (
            <FloxidPanelHeaderView text={this.props.text} handleHeaderClick={this._handleHeaderClick}>
            </FloxidPanelHeaderView>
        );
    }
}

FloxidPanelHeaderComponent.propTypes = {
    text: React.PropTypes.string,
}

FloxidPanelHeaderComponent.defaultProps = {
    text: null,
}