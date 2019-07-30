import React from 'react';
import PropTypes from 'prop-types';

const Alert=({type,message,children,show,toggleAlert})=>{
    return (<div>
        {
            show && <div onClick={toggleAlert} className={`alert alert-${type}`} role="alert">{message?message:children}</div>
        }
    </div>)
};

Alert.propTypes={
    type: PropTypes.string.isRequired,
    message: PropTypes.string,
    show:PropTypes.bool,
    toggleAlert:PropTypes.func
};

Alert.defaultProps={
    message: null,
    show:true,
    toggleAlert(){

    }
};

const withAnimation=(Component)=>{
    const Animated=(props)=>{
          return (
              <div className="wow bounceInUp">
                <Component {...props} />
              </div>
          );
    };
    return Animated;
};

const withDismiss=(Component)=>{
    class Dismissablecomponent extends React.Component{
        componentDidMount(){
            setTimeout(()=>{ this.props.toggleAlert()},2000);
        }
        render(){
            return <Component {...this.props} />
        }
    }
    return Dismissablecomponent;
}

const AnimatedAlert=withAnimation(Alert);
const DismissableAlert=withDismiss(AnimatedAlert);
export default DismissableAlert;