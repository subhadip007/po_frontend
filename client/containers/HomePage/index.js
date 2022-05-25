/* eslint-disable import/first */
import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import image from '../../assets/images/photo.jpg';
import { message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './index.css';
import Demo from './form';

const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const HomePage = () => (
  <div>
  <Dragger {...props} className="dragger">
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
   
    <Button icon={<UploadOutlined />} style={{backgroundColor:'#37b047'}}>Click to Upload</Button>
  

  
  </Dragger>
  <Demo/>
  </div>
);


export default HomePage;