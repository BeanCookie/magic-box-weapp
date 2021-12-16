import React, { useState, useEffect, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WebView } from '@tarojs/components'

import './index.scss'

export default function index() {
  const { hotNewUrl } = useSelector(store => store.hotNew)
  return (
    <WebView src={hotNewUrl} />
  )
}