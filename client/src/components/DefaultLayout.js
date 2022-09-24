import React from 'react';
import '../resources/default-layout.css';
import { Button, Dropdown, Menu, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('Expense-tracker-user'));
    const navigate = useNavigate();
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <li onClick={() => {
                            localStorage.removeItem('Expense-tracker-user');
                            navigate('/login');
                        }}>
                            Logout
                        </li>
                    ),
                }
            ]}
        />
    );
    return (
        <div className='layout'>

            <div className="header d-flex justify-content-between align-items-center">
                <div>
                    <h1 className='logo'>Financivisor</h1>
                </div>
                <div>
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <button className='primary'>{user.name}</button>
                    </Dropdown>
                    {/* <h1 className='username'>{user.name}</h1> */}
                </div>

            </div>

            <div className='content'>
                {props.children}
            </div>

        </div>
    )

}

export default DefaultLayout;
