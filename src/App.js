import React, {Component} from 'react';
import FloxidComponent from './FloxidComponent';

export default class App extends Component {
    render() {
        return (<FloxidComponent/>);

        let containerClasses = "floxid-container floxid-column" ;
        let panelClasses = "floxid-panel-row-open" ;
        let panelClassesClosed = "floxid-panel-row-closed" ;
        let panelHeaderClasses = "tp-flex-header-item floxid-panel-row-header" ;
        let panelContentClasses = "tp-flex-item floxid-panel-row-content" ;

        return (
        <div className={containerClasses}>
            <div className={panelClassesClosed}>panel 1
               {/*<div className={panelHeaderClasses}>*/}
               {/*Header 1*/}
               {/*</div>*/}
               {/*<div className={panelContentClasses}>*/}
               {/*content ontent tent ent nt t t tn tne tnet tnetno tnetnoc*/}
               {/*</div>*/}
            </div>
            <div className={panelClasses}>panel 2
                {/*<div className={panelHeaderClasses}>*/}
                    {/*Header 2*/}
                {/*</div>*/}
                {/*<div className={panelContentClasses}>*/}
                    {/*content ontent tent ent nt t t tn tne tnet tnetno tnetnoc*/}
                {/*</div>*/}
            </div>
            <div className={panelClassesClosed}>panel 3
                {/*<div className={panelHeaderClasses}>*/}
                    {/*Header 3*/}
                {/*</div>*/}
                {/*<div className={panelContentClasses}>*/}
                    {/*content ontent tent ent nt t t tn tne tnet tnetno tnetnoc*/}
                {/*</div>*/}
            </div>

          </div>
        );
    }
}