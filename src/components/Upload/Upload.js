import axios from 'axios';
import React, { Component } from 'react'
import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
import "../Upload/Upload.css";
export default class Upload extends Component {

    // state={
    //     file:'',
    // }

    // componentDidMount=()=>{
    //     const {file}=this.props;
    //     this.setState({file});
    // }

    // uploadFile=({target:{files}})=>{
    //     console.log(files[0]);
    //     const data=new FormData();
    //     data.append('file',files[0]);

    //     // axios.post("http://localhost:8080/admin/upload",data)
    //     // .then(res=>{if(res.data){alert(res.data)}
    //     //     else alert("File format is not correct")
    //     // });

    // }

    // onSubmit=({})=>{
    //     axios.post("http://localhost:8080/admin/upload",data)
    //     .then(res=>{if(res.data){alert(res.data)}
    //         else alert("File format is not correct")
    //     });
    // }


    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }
    submit(){
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        console.log(this.state.selectedFile);
        if(!this.state.selectedFile)
        {
            alert("No File selected");
        }
        let url = "http://localhost:8080/admin/upload";
        axios.post(url, data, { 
        })
        .then(res => {
            if(res.data)
            {
                alert(res.data);
            }
            else{
                alert("Appropriate file didnit submitted");
            }
            
        })
    }

    logout=()=>{

        localStorage.clear();
  
        window.location.href="/";
  
      }

  render() {
    return (
        <div className='navbar'>
            <nav className='nav1'>
                <div className='logo'>Sales Incentive</div>
                    <ul className='ul1'>
                        <li><Link className='a1' to="/upload">Upload</Link></li>
                        <li><Link className='a1' to="/salesperson">SalesPerson</Link></li>
                        <li><Link className='a1' to="/products">Products</Link></li>
                        <li><Link className='a1' to="/quota">Quota</Link></li>
                        <li><button className='button1' onClick={this.logout}>logout</button></li>
                    </ul>
            </nav>
        {/* <section className='container'>
            <div className="container5">
                <div className="row">
                    <div className="col-md-7">
                        <div className="form-group files color">
                            <label className='heading3'>Upload Your File </label>
                            <input type="file" onChange={this.uploadFile}/>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        <section className='container5'>
            <div class="frame1">
                <div class="center1">
                    <div class="title2">
                        <h1 className='h111'>Drop file to upload</h1>
                    </div>

                    <div class="dropzone2">
                        <img src="http://100dayscss.com/codepen/upload.svg" class="uploadicon" alt='' />
                        <input type="file" class="uploadinput"onChange={this.handleInputChange}/>
                    </div>

                    <button type="button" class="btnnnn" name="uploadbutton" onClick={()=>this.submit()}>Upload file</button>

                </div>
            </div>
            </section>
      </div>
    )
  }
}
