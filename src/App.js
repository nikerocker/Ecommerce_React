import React,{Component} from 'react'
import './App.css';
import ProductSection from './components/ProductSection';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      productsData:[]
    };
  }

  componentDidMount() {
    this.getProductData();
  }

  getProductData(){
    fetch('./products.json')
    .then(res => res.json())
    .then(data => {
          this.setState({productsData:data})
      })
    .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        <ProductSection productsData={this.state.productsData}/>
      </div>
    )
  }
}

