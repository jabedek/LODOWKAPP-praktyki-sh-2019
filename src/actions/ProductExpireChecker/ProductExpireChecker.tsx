import React, { Component } from 'react'
import './ProductExpireChecker.scss'
import { expirationChecker } from './ProductExpireService'

interface DateState {
    currentDate: Date,
    productYear: number,
    productMounth: number,
    productDay: number
}

interface PropsDateComponent {
    productYear: number,
    productMounth: number,
    productDay: number,
}

export default class ProductExpireChecker extends Component<PropsDateComponent, DateState> {

    state = {
        currentDate: new Date(),
        productYear: this.props.productYear,
        productMounth: this.props.productMounth,
        productDay: this.props.productDay,
    }

    render() {
        return <div>
            <div>{expirationChecker(this.props.productDay, this.props.productMounth, this.props.productYear)}</div>
        </div>

    }
}