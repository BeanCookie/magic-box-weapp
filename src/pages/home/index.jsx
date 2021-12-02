import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import './index.scss'

export default function index() {
  const dispatch = useDispatch();

  const { current } = useSelector(store => store.home);

  // useEffect(() => {
  //   dispatch({
  //     type: 'juejin/fetch',
  //   });
  // }, [dispatch]);


  return (
    <AtTabBar
      fixed
      tabList={[
        { title: '待办事项', iconType: 'bullet-list', text: 'new' },
        { title: '拍照', iconType: 'camera' },
        { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
      ]}
    />
  );
}

