import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Taro, { useDidShow, useReachBottom, usePullDownRefresh } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"

import './index.scss'

export default function Juejin() {
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
  })

  const handleClick = id => {
    dispatch({
      type: 'study/setArticleUrl',
      payload: {
        articleUrl: 'https://juejin.cn/post/' + id,
      },
    })
    Taro.navigateTo({
      url: `/pages/study/article`
    })
  }

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
            onClick={() => handleClick(article.id)}
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

