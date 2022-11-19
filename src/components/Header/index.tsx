import React from 'react';
import { Menu, MenuProps } from 'antd';

function Header(): React.ReactElement {
  const items: MenuProps['items'] = [
    {
      label: '首页',
      key: 'home'
    },
    {
      label: '文章分类',
      key: 'category'
    },
    {
      label: '标签',
      key: 'tag'
    },
    {
      label: '文章归档',
      key: 'archives'
    },
    {
      label: '日志',
      key: 'log'
    },
    {
      label: '留言板',
      key: 'messageBoard'
    }
  ];
  return (
    <div
      style={{
        width: '100%',
        height: '40px'
      }}>
      <div>
        <img src="../../assets/webIcon.jpg" alt="xxx" />
      </div>
      <Menu onClick={onClick} mode="horizontal" items={items} />
    </div>
  );

  function onClick(val: any): void {
    console.log('onClick-->', val);
  }
}

export default Header;
