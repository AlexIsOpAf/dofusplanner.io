import React, {Component} from "react";
import {InformationHeader} from "./InformationHeader";
import {SpellsMenu} from "./SpellsMenu";


class InformationMenuView extends Component {

    render() {
        return (
            <div>
                <InformationHeader/>
                <SpellsMenu/>
            </div>
        )
    }

}


export default InformationMenuView;