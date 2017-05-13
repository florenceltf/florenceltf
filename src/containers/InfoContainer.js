import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import Info from '../components/Info';
import { styleDark } from '../actions';

class InfoContainer extends Component {
    componentDidMount() {
        this.props.onLoad()
    }
    
    render() {
        return (
                <Info {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    const { info, style } = state;
    return {
        ...info,
        style,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            $('body').addClass('dark').removeClass('light');
            return dispatch(styleDark())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);
