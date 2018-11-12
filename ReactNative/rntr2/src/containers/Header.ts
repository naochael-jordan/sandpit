import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = (state: object) => {
  return state;
};

export default connect(mapStateToProps)(Header);
