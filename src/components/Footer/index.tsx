import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright="知莫"
      links={[
        {
          key: '知云图床',
          title: '知云图床',
          href: '',
          blankTarget: true,
        },
        {
          key: '知莫AI超级智慧体',
          title: '知莫AI超级智慧体',
          href: '',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Agan-ippe',
          blankTarget: true,
        },
        {
          key: '编程学习圈子',
          title: '编程学习圈子',
          href: 'https://www.codefather.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
