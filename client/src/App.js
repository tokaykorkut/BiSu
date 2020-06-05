import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { getSubInfo } from './actions/userActions';
import { getOrder } from './actions/accountActions';

class App  extends React.Component{
  

  componentDidMount(){
    this.props.getOrder()
    this.props.getSubInfo()
  }
  

  render(){ 
   if (this.props.order && this.props.sublist) {
     
  return (
    <div >
      <CssBaseline/>
      <Typography variant='h1'>ORDER</Typography>
      {this.props.order.map((item)=>(<p>{item.products}</p>))}
      <p></p>
      <Typography variant='h1'>SUBSCRIPTIONS</Typography>
  {this.props.sublist.map((item)=>(<p>{item.subscriptionId},{item.fullName},{item.address},{item.locationName},{item.subCityName},{item.cityName},{item.brand},{item.phoneNumber},{item.distributorNumber}</p>))}
    </div>
  )}else{return(<div></div>)}
}
}

const mapStateToProps = (state) =>({
  sublist: state.account.sublist,
  order: state.user.order
})

export default connect(mapStateToProps,{getOrder,getSubInfo})(App);
