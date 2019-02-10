import React , {Component} from 'react';
import './FoundPage.css';
import MiddleSection from './MiddleSection/MiddleSection';
import TopSection from './TopSection/TopSection';
import LastSection from './LastSection/LastSection';


class FoundPage extends Component{
  //this.props.match.params.Title
  render(){
    return(
      <div className="FoundPage">
        <TopSection />
        <br/>
        <MiddleSection name={this.props.match.params.Title}/>
        <LastSection />
      </div>
    );
  }
}

export default FoundPage;
