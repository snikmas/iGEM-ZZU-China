import React, { useState, useCallback } from 'react';
import { useNavigate,  } from 'react-router-dom';

import { Carousel, Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';

import axios from 'axios';
import useStorage from '../../utils/useStorage';

const Login = () => {

  // 全局message
  const [messageApi, contextHolder] = message.useMessage();

  const [accessToken, setAccessToken, removeAccessToken] = useStorage('access_token', '');
  const [userStatus, setuserStatus, removeuserStatus] = useStorage('userStatus', '');
  const [userInfo, setuserInfo, removeuserInfo] = useStorage('userinfo', '');


  const carouselItems = [
      {
      title: ' Smart Chain Email Radar ',
      description: 'AI perspective requirement, 3 seconds to lock in the best carrier',
      image: ' https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg ',
      },
      {
      title: ' Fast filling engine ',
      description: ' Bill scanning AI decoding, generate compliant customs declaration form with one key',
      image: ' https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png ',
      },
      {
      title: ' Chain AI Manager ',
      description: ' Your 24-hour digital freight forwarding expert provides intelligent management of the entire process',
      image: ' https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg ',
      },
    ];
    
    
  // 登录loading
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  // 登录方法
  const onLogin = useCallback(async (values) => {
    setLoading(true);

    const params = new URLSearchParams(); 
    params.append('username', values.username);
    params.append('password', values.password);

    try {
      const response = await axios.post('/auth/login', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const { access_token, user_id } = response.data;

      setAccessToken(access_token);
      setuserStatus('login');
      setuserInfo(values.username);

      const userinfo_str = JSON.stringify({
        "username": values.username,
        "userId": user_id,
    })
      setuserInfo(userinfo_str);

      messageApi.info('Login Success');

      navigate('/dash'); // 跳转到首页
    } catch (error) {
      messageApi.error('Username Or Password Error');

      removeAccessToken('access_token');
      removeuserStatus('userStatus');
      removeuserInfo('userinfo');
    } finally {
      setLoading(false);
    }
  }, []);



  return (
    <div className="login-container">
      {contextHolder}
      <div className="login-left">
        <Carousel autoplay className='login-carousel'>
          {carouselItems.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="carousel-content">
                <img src={item.image} alt={item.title} className="carousel-image" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))
          }
        </Carousel>

      </div>

      <div className="login-right">
        <div className="login-form-container">
          <h2 className="login-title">Account Login</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onLogin}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please enter username!' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="username"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>remember</Checkbox>
              </Form.Item>
              {/* <a className="login-form-forgot" href="">
                忘记密码
              </a> */}
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={loading}
                size="large"
                block
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;