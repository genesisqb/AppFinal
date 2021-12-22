import React from 'react';
import ReactDOM from 'react-dom';

class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            React.createElement("tr", null,
                React.createElement("th", { colSpan: "3" },
                    category)));


    }
}


class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            React.createElement("span", { style: { color: 'red' } },
                product.name);


        return (
            React.createElement("tr", null,
                React.createElement("td", null, name),
                React.createElement("td", null, product.price),
                React.createElement("td", null, product.image)));


    }
}


class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach(product => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    React.createElement(ProductCategoryRow, {
                        category: product.category,
                        key: product.category
                    }));

            }
            rows.push(
                React.createElement(ProductRow, {
                    product: product,
                    key: product.name
                }));


            lastCategory = product.category;
        });

        return ( <
            table >
            <
            thead >
            <
            tr >
            <
            th > Nombre < /th> <
            th > Precio < /th> <
            th > Imagen < /th> < /
            tr > < /thead> <
            tbody > { rows } < /tbody> < /
            table >
        );
    }
}


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return ( <
            form >
            <
            input type = "text"
            placeholder = "Search..."
            value = { this.props.filterText }
            onChange = { this.handleFilterTextChange }
            /> <
            p >
            <
            input type = "checkbox"
            checked = { this.props.inStockOnly }
            onChange = { this.handleInStockChange }
            /> { ' ' }
            Productos en stock <
            /p> < /
            form >
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return ( <
            div >
            <
            SearchBar filterText = { this.state.filterText }
            inStockOnly = { this.state.inStockOnly }
            onFilterTextChange = { this.handleFilterTextChange }
            onInStockChange = { this.handleInStockChange }
            /> <
            ProductTable products = { this.props.products }
            filterText = { this.state.filterText }
            inStockOnly = { this.state.inStockOnly }
            /> < /
            div >
        );
    }
}


const PRODUCTS = [
    { category: 'Remera Dama', name: 'Reme Shoes Love', price: '700 UYU', stocked: true, image: 'shoes.jpg' },
    { category: 'Remera Dama', name: 'Reme London', price: '700 UYU', stocked: true, image: 'london.jpg' },
    { category: 'Remera Dama', name: 'Reme Coffe Time', price: '700 UYU', stocked: false, image: 'coffe-time.jpg' },
    { category: 'Remera Dama', name: 'Reme Goku', price: '700 UYU', stocked: true, image: 'goku.jpg' },
    { category: 'Remera Dama', name: 'Reme FBC', price: '700 UYU', stocked: false, image: 'fbc.jpg' },
    { category: 'Remera Caballero', name: 'Reme Vegeta', price: '700 UYU', stocked: true, image: 'vegeta.jpg' },
    { category: 'Remera Dama', name: 'Reme Luna', price: '700 UYU', stocked: true, image: 'luna.jpg' },
    { category: 'Remera Caballero', name: 'Reme para Papá', price: '800 UYU', stocked: true, image: 'corona.jpg' },
    { category: 'Remera Caballero', name: 'Reme para Papá Moderno', price: '900 UYU', stocked: true, image: 'papa-moderno.jpg' }
];




ReactDOM.render(
    React.createElement(FilterableProductTable, { products: PRODUCTS }),
    document.getElementById('container'));


/* 

 const botonAgregar = document.getElementById("agregar");
const express = require("express");
const router = express.Router();
const fs = require("fs");

const listarProductos = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("./producto.json", "", function(err, producto) {
            if (err) {
                reject(err);
            }

            const productoJson = JSON.parse(producto);
            resolve(productoJson);
        });
    });
};


module.exports = { listarProductos }; */