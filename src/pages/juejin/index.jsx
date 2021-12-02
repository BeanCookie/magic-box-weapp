import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Taro, { useDidShow, useReachBottom, usePullDownRefresh } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import './index.scss'

export default function index() {
  const dispatch = useDispatch()

  const { articles, params } = useSelector(store => store.juejin)

  useEffect(() => {
    dispatch({
      type: 'juejin/list',
    })
  }, [dispatch])


  useReachBottom(() => {
    dispatch({
        type: 'juejin/setParams',
        payload: {
          page: params.page + 1,
      },
    })
    dispatch({
      type: 'juejin/list',
    });
  });

  usePullDownRefresh(() => {
    dispatch({
        type: 'juejin/resetFilter',
    }).then(() => {
        Taro.stopPullDownRefresh();
    });
  });

  return (
    <View>
      <AtList>
        {articles.map(article => (
          <AtListItem
            onSwitchChange={() => handleSwitchChange}
            key={article.id}
            title={article.title}
            thumb={article.cover_image}
            note={article.brief_content}
          />
        ))}
      </AtList>
    </View>
  );
}

