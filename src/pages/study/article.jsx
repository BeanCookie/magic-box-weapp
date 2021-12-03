import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WebView } from '@tarojs/components'

import './index.scss'

export default function index() {
  const { articleUrl } = useSelector(store => store.study)
  return (
    <WebView src={articleUrl} />
  )
}