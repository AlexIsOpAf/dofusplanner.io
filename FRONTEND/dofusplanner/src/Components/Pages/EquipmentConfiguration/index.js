import React from "react";
// import {connect} from "react-redux";
import stylesCss from './index.css'
import GenerationConfig from "./GenerationConfig";
import Typography from "@material-ui/core/Typography";

class EquipmentConfiguration extends React.Component {



    render() {
        return (
            <div className="page-container">
                <div>
                {/*    AD banner here when we build */}
                </div>
                <div style={{display: 'flex'}}>
                    <GenerationConfig/>
                    {/*<TextButtons changeActiveKey={this.handleChange} />*/}
                </div>
                <div>
                    {/*    AD banner here when we build */}
                </div>
            </div>
        )
    }

}

export default EquipmentConfiguration;
// export default connect(mapStateToProps, mapDispatchToProps)(EquipmentConfiguration);