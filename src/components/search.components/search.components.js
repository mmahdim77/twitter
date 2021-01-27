import { Input, Avatar, Upload, Button, Modal, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
const Search = () => {
    const [searchItem, setSerachItem] = useState(null);

    const search = (event) => {
        if (searchItem) {
            console.log(searchItem[1:])
            if (searchItem[0] === "#") {
                // axios.get('http://twitterapifinal.pythonanywhere.com/twitt/Search_View/*'+ , { headers: { 'Authorization': 'Bearer  ' + token } }).then(
                //     res => {
                //         console.log(res)
                //     }
                // )
            }
            else {
                if (searchItem[0] === "@") {

                }
                else {

                }
            }
        }
    }
    return (
        <div>
            <label>
                <Input className="input" value={searchItem} placeholder="search" onChange={(e) => setSerachItem(e.target.value)} >

                </Input>
                <Button onClick={search} type="primary" icon={<SearchOutlined
                />}>
                </Button>
            </label>
        </div>
    )
}

export default Search