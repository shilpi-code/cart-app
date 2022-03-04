import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            title:'Mobile Phone',
            price:14000,
            qty:1,
            img:''
        }
    }
    increaseQuantity= () =>{
        this.setState({
            qty:this.state.qty+1
        })
        // console.log("this",this.state);
    }
    decreaseQuantity= () =>{
        const {qty}=this.state;
        if(qty===0)
        return;
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
    }
    render(){
        console.log("this.props",this.props);
        const{title,price,qty}=this.props;
        return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
                <div style={{color: 'grey'}}>Rs {price}</div>
                <div style={{color: 'grey'}}>{qty}</div>
            </div>
            <div className="cart-item-actions">

            <img alt="increase" 
                className="action-icons"
                onClick={this.increaseQuantity}
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />

            <img alt='decrease'
                className="action-icons" 
                onClick={this.decreaseQuantity}
                src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" />
            </div>
        </div>
        );
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'red'
    }
}
export default CartItem;
