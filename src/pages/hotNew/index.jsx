import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Weibo from '@/components/weibo';

import './index.scss'

export default function index() {

  const { tabList } = useSelector(store => store.hotNew)
  const [current, setCurrent] = useState(0);

  const handleTableClick = e => {
    setCurrent(e);
  }

  return (
    <AtTabs 
      current={current} 
      tabList={tabList} 
      onClick={handleTableClick}
    >
      <AtTabsPane current={current} index={0} >
        <Weibo></Weibo>
      </AtTabsPane>
    </AtTabs>
  );
}
