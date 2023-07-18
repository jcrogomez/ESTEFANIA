import './index.css';
import Parse from 'parse';
import { useWindowSize } from 'react-use';
import addPropsToChildren from '../../utils/addProps';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Layout, Modal, Spin, Image, theme, Space, Form, Input, Button } from 'antd';

const { Header, Content, Footer } = Layout; 

const use100vh = () => {
  const ref = React.useRef();
  const { height } = useWindowSize();

  React.useEffect(
    () => {
      if (!ref.current) {
        return;
      }
      ref.current.style.height = height + 'px';
    },
    [height],
  );

  return ref;
}

const Dashboard = ({ children }) => {
  // Ref to adapt to mobile view 
  const ref = use100vh();

  // Contact Modal
  const [modal, modalContextHolder] = Modal.useModal();

  // Theme
  const {
    token: { colorPrimary },
  } = theme.useToken();

  // Form Hook
  const [form] = Form.useForm();

  // Handle loading
  const [ isLoading, setIsLoading ] = useState(false);
  
  return (
      <Layout style={{height: "100vh", overflow: 'hidden'}} ref={ref}>
        {modalContextHolder}
        <Header style={{backgroundColor: colorPrimary, textAlign:'center', color: 'white', fontSize: '3rem' }}>
          ESTEFANIA
        </Header>
        <Layout style={{ overflowX: 'hidden', overflowY: 'auto' }}>
          <Content>
              <Suspense
                fallback={<Layout>
                            <Layout.Footer className="footer">
                              <Spin size="large"/>
                            </Layout.Footer>
                          </Layout>}>
                {addPropsToChildren(children, { })}
              </Suspense>
          </Content>
        </Layout>
        <Footer className="footer">
          <Image preview={false} src={'https://ecolistico.com/img/logo.png'} alt={'Ecolistico'} width={300} height={51}/>
        </Footer>
      </Layout>
  );
}


export default Dashboard;