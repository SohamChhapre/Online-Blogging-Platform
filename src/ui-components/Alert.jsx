import React from 'react';
import PropTypes from 'prop-types';

// this is simple Component which shows alert Notification
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

// this component will take other component and add's animation
// here class:wow bounceInUp is class from wow.js library which has some animation affects
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

// this component will take other component and add set timeout property to its rendering
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

// AnimatedAlert add animation in the Alert component
const AnimatedAlert=withAnimation(Alert);

// DismissableAlert this will set time out in the AnimatedAlert component
const DismissableAlert=withDismiss(AnimatedAlert);

export default DismissableAlert;


// jdfhdjfh


import React from 'react';
import PropTypes from 'prop-types';

// this is simple Component which takes message as a prop which shows alert Notification 
const Alert=({message})=>{
    return (<div>
        {
            show && <div className={`alert alert-${type}`} role="alert">{message}</div>
        }
    </div>)
};

Alert.propTypes={
    type: PropTypes.string.isRequired,
    message: PropTypes.string,
    
};

Alert.defaultProps={
    message: null
    };

// this component will take other component and add's animation
// here class:wow bounceInUp is class from wow.js library which has some animation affects
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

// this component will take other component and add set timeout property to its rendering
const withDismiss=(Component)=>{
    // dummy Component which will takes the property of other component and add's it's own property
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

// AnimatedAlert add animation in the Alert component
const AnimatedAlert=withAnimation(Alert);

// DismissableAlert this will set time out in the AnimatedAlert component
const DismissableAlert=withDismiss(AnimatedAlert);

export default DismissableAlert;