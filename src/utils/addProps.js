import React from 'react';

function addPropsToReactElement(element, props) {
    if (React.isValidElement(element)) {
      return React.cloneElement(element, props)
    }
    return element
  };
  
  function addPropsToChildren(children, props) {
    if (!Array.isArray(children)) {
      return addPropsToReactElement(children, props)
    }
    return children.map(childElement =>
      addPropsToReactElement(childElement, props)
    )
  };

  export default addPropsToChildren;