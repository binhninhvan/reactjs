import React, { Component } from 'react';

class ContentProps extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trangThai: 0
        }
    }

    thongbao = () => {
        alert('Viet xu ly thong bao trong react js');
    }
    
    thongbao3 = (x) => {
        alert(x);
    }

    renderButton = () => {
        return (
            <div class="row">
                <div className="btn btn-group">
                    <div className="btn btn-info" onClick = {() => this.editClick()} >Edit</div>
                    <div className="btn btn-warning" onClick = {()=>this.thongbao()} >Remove</div>
                    {/* <div className="btn btn-info" onClick={this.thongbao}>Edit</div>
                    <div className="btn btn-warning" onClick={()=>this.thongbao()}>Remove</div> */}
                    {/* <div className="btn btn-info" onClick={()=>this.thongbao3("Thai Binh")}>Arrow Function</div>
                    <div className="btn btn-warning" onClick={this.thongbao3.bind(this, "Nguyen Thai Binh")}>Call by Bind</div> */}
                </div>
            </div>
        )
    }

    renderForm = () => (
        <div className="row">
            <div className="form-group">
                <input type="text" name="ten" className="form-control" defaultValue={this.props.tieude} ref = {(dulieu)=>{this.trunggian = dulieu;}}/>
            </div>
            <div className="form-group">
                <div className="btn btn.block btn-success" onClick = {() => this.saveClick()} >Save</div>
            </div>
        </div>
    )

    displayCheck = () => {
        if (this.state.trangThai === 0) {
            return this.renderButton();
        } else {
            return this.renderForm();
        }
    }
    
    editClick = () => {
        this.setState({trangThai: 1});
    }

    saveClick = () => {
        this.setState({trangThai: 0});
        console.log(this.trunggian.value);
    }

    render() {
        return (
            <section>
                <div className="container">
                <div className="row align-items-center">
                    <div className={"col-lg-6 " + this.props.order1}>
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={this.props.image} alt />
                        </div>
                    </div>
                    <div className={"col-lg-6 " + this.props.order2}>
                        <div className="p-5">
                            <h2 className="display-4">{this.props.tieude}</h2>
                            <p>{this.props.noidung}</p>
                            
                            {this.displayCheck()}
                        </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default ContentProps;