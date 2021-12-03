import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Taro, { useDidShow, useReachBottom, usePullDownRefresh } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import './index.scss'

export default function Csdn() {
  const dispatch = useDispatch()

  const { articles, params } = useSelector(store => store.csdn)

  useEffect(() => {
    dispatch({
      type: 'csdn/list',
    })
  }, [dispatch])


  useReachBottom(() => {
    dispatch({
      type: 'csdn/setParams',
      payload: {
        page: params.page + 1,
      },
    })
    dispatch({
      type: 'csdn/list',
    });
  })

  const handleClick = article => {
    console.log(`https://blog.csdn.net/${article.user_name}/article/details/${article.id}`);
    dispatch({
      type: 'study/setArticleUrl',
      payload: {
        articleUrl: `https://blog.csdn.net/${article.user_name}/article/details/${article.id}`,
      },
    })
    Taro.navigateTo({
      url: `/pages/study/article`
    })
  }

  usePullDownRefresh(() => {
    dispatch({
        type: 'csdn/resetFilter',
    }).then(() => {
        Taro.stopPullDownRefresh();
    });
  });

  return (
    <View>
      <AtList>
        {articles.map(article => (
          <AtListItem
            onClick={() => handleClick(article)}
            key={article.id}
            title={article.title}
            thumb={article.cover_image}
          />
        ))}
      </AtList>
    </View>
  );
}

