import React from "react";
import axios from "axios";

const { REACT_APP_BACKEND_LOCAL_PORT } = process.env;

class ProductUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    state = { selectedFiles: null };
    onClickHandler = event => {
        const formData = new FormData();
        formData.append(
            "uploadImages",
            this.state.selectedFiles,
            this.state.selectedFiles.name
        );
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        axios.post(`${REACT_APP_BACKEND_LOCAL_PORT}/img/upload`, formData, config);
    };
    fileChangedHandler = event => {
        const files = event.target.files;
        this.setState({
            selectedFiles: files
        });
    };
    render() {
        return (
            <div>
                <input type="file" multiple onChange={this.fileChangedHandler} />
                <button onClick={this.onClickHandler}>저장하기</button>
            </div>
        );
    }
}

export default ProductUpload;