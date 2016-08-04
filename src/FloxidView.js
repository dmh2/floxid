import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class FloxidView extends Component {
    
    constructor(props) {
        super(props);

        this.displayName = 'FloxidView';
        this._isMounted = false;

        this.state = {
            redraw: false,
        };
    }

    render() {
        return (
            <div className="floxid-container floxid-column" ref="floxid-view">
                {this.props.panels}
            </div>
        );
    }
}

FloxidView.propTypes = {
    value: React.PropTypes.any,
    panels: React.PropTypes.array,
}

FloxidView.defaultProps = {
    value: undefined,
    panels: [],
}