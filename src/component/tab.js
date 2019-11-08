import React from 'react'
import axios from 'axios'
import { Menu, Icon } from 'antd';
import store from '../store/reducers/userReducer'
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sub1: [],
            sub2: [],
            sub3: [],
            sub4: [],
            data:store.getState(),
            pathName:''
        }
        store.subscribe(this.set)
    }

    handleClick = e => {
        console.log(e.key);
        this.setState({
            pathName:e.key
        })
    };
    set=()=>{
        this.setState({
            data:store.getState()
        })
    }
    componentDidMount = () => {
        axios.get('/tab.json').then((response) => {
            let sub1 = response.data.sub1;
            let sub2 = response.data.sub2;
            let sub3 = response.data.sub3;
            let sub4 = response.data.sub4;
            this.setState({
                sub1, sub2, sub3, sub4
            })
        })
    }

    render() {
        return (
            <div className="tab">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        {
                            this.state.sub1.map((val, ind) => {
                                return (
                                    <Menu.ItemGroup key={val.key} title={val.title}>
                                        {
                                            val.children.map((v, i) => {
                                                return (
                                                    <Menu.Item key={v.key}><Link to={v.key}>{v.label}</Link> </Menu.Item>
                                                )
                                            })
                                        }
                                    </Menu.ItemGroup>
                                )
                            })
                        }
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                            </span>
                        }
                    >
                        {
                            this.state.sub4.map((val, ind) => {
                                return (
                                    <Menu.Item key={val.key}>{val.label}</Menu.Item>
                                )
                            })
                        }
                        <SubMenu key="sub3" title="Submenu">
                            {
                                this.state.sub3.map((val, ind) => {
                                    return (
                                        <Menu.Item key={val.key}>{val.label}</Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>Navigation Three</span>
                            </span>
                        }
                    >
                        {
                            this.state.sub4.map((val, ind) => {
                                return (
                                    <Menu.Item key={val.key}>{val.label}</Menu.Item>
                                )
                            })
                        }
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default Tab