import Main from "./Main"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { removePost } from "../redux/action"

function mapStatetoProps(state) {
    return {
        posts : state
    }
}

function mapDispatchToProps(dispatch) {
    // Shorthand
    return bindActionCreators({removePost}, dispatch);

}
const App = connect(mapStatetoProps, mapDispatchToProps)(Main)

export default App