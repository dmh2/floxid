/**
 * Created by dave.held on 7/15/16.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FloxidView from './FloxidView';
import FloxidPanelComponent from './FloxidPanelComponent';

export default class FloxidComponent extends Component {

    constructor(props) {
        super(props);

        this.displayName = 'FloxidComponent';
        this._isMounted = false;

        this.state = {
            panels: [
                {header:'header 1',
                content:'content 1 goes here'},
                {header:'header 2',
                content:'content 2 goes here'},
                {header:'header 3',
                content:'content 3 goes here'},
                {header:'header 4',
                content:'content 4 goes here'},
                {header:'header 5',
                content:'content 5 goes here'},
            ],
        };
    }

    buildPanels(panelDataList) {
        var i,
            panels = [],
            panel = {},
            panelData,
            panelCount = !isNaN(panelDataList.length) ? panelDataList.length : 0;

        for (i = 0; i < panelCount; i++) {
            panelData = panelDataList[i] ;
            panel =
                <FloxidPanelComponent key={i} header={panelData.header} content={panelData.content}/>;
            panels.push(panel);
        }

        return panels;
    }

    render() {
        return (
            <FloxidView panels={this.buildPanels(this.state.panels)}>
            </FloxidView>
        );
    }
}

FloxidComponent.propTypes = {
    value: React.PropTypes.any,
}

FloxidComponent.defaultProps = {
    value: undefined,
}