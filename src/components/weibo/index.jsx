import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Taro, { useDidShow, useReachBottom, usePullDownRefresh } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"

import './index.scss'

export default function Weibo() {
  const dispatch = useDispatch()

  const { hotNews, params } = useSelector(store => store.weibo)

  useEffect(() => {
    dispatch({
      type: 'weibo/list',
    })
  }, [dispatch])


  useReachBottom(() => {
    dispatch({
      type: 'weibo/setParams',
      payload: {
        page: params.page + 1,
      },
    })
    dispatch({
      type: 'weibo/list',
    });
  })
  
  const handleClick = keyWord => {
    dispatch({
      type: 'hotNew/setHotNewUrl',
      payload: {
        hotNewUrl: `https://s.weibo.com/weibo?q=%23${keyWord}%23`,
      },
    })
    Taro.navigateTo({
      url: `/pages/hotNew/new`
    })
  }

  usePullDownRefresh(() => {
    dispatch({
        type: 'weibo/resetFilter',
    }).then(() => {
        Taro.stopPullDownRefresh();
    });
  });

  return (
    <View>
      <AtList>
        {hotNews.map(hotNew => (
          <AtListItem
            onClick={() => handleClick(hotNew.key_word)}
            key={hotNew.id}
            title={hotNew.key_word}
            thumb={hotNew.cover_image}
            note={hotNew.brief_content}
          />
        ))}
      </AtList>
    </View>
  );
}

