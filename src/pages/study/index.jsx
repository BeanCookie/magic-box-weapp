import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Juejin from '@/components/juejin';
import Csdn from '@/components/csdn';
import Meituan from '@/components/meituan';

import './index.scss'

export default function index() {

  const { tabList } = useSelector(store => store.study)
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
        <Juejin></Juejin>
      </AtTabsPane>
      <AtTabsPane current={current} index={1} >
        <Csdn></Csdn>
      </AtTabsPane>
      <AtTabsPane current={current} index={2} >
        <Meituan></Meituan>
      </AtTabsPane>
    </AtTabs>
    //   <AtTabsPane  index={0} >
    //     <Juejin></Juejin>
    //   </AtTabsPane>
    //   <AtTabsPane  index={1}>
    //     <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
    //   </AtTabsPane>
    //   <AtTabsPane  index={2}>
    //     <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
    //   </AtTabsPane>
    // </AtTabs>
  );
}

