import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import './index.scss'

export default function index() {
  const dispatch = useDispatch();

  const { articles } = useSelector(store => store.juejin);

  useEffect(() => {
    dispatch({
      type: 'juejin/fetch',
    });
  }, [dispatch]);


  return (
    <View>
      <AtList>
        {articles.map(article => (
          <AtListItem
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

