import Main from "./Main"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {withRouter} from 'react-router'
import * as actions from "../redux/action";

function mapStatetoProps(state) {
    return {
        posts : state
    }
}

function mapDispatchToProps(dispatch) {
    // Shorthand    
    return bindActionCreators(actions, dispatch);

}
const App = withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main))

export default App