import React from "react";

class Tabs extends React.Component {
  constructor(props) {
     super(props);
     const tabElements = props.children.map(child => {
         return {
             title: child.props.title,
             text: child.props.children
         }
     });
     this.state = {
         tabElements,
         isVisibleTab : tabElements[0]
     };
  }
  onHandleChange(newTab){
     this.setState({ isVisibleTab : newTab });
     console.log(newTab.title);
  }

 render() {
   return (
     <div className="tabs-button">
       {this.state.tabElements.map( tab  => {
         return (<button
           key={tab.title}
           onClick={()=> this.onHandleChange(tab)}
           >
             {tab.title}
           </button>
         )}
       )}
       <p>
         {this.state.isVisibleTab.text}
       </p>
     </div>
   );
 }
}
export default Tabs;
