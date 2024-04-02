import React, { memo, useEffect, useRef, useState } from 'react'
import { CSSTransition,SwitchTransition } from 'react-transition-group'

import PropTypes from 'prop-types'
import { BrowerWrapper } from './style'
import IconClose from '../../assets/svg/icon-close.jsx'
import IconLeft from '../../assets/svg/icon-left.jsx'
import IconRight from '../../assets/svg/icon-right.jsx'
import IconHidden from '../../assets/svg/icon-hidden.jsx'
import IconShow from '../../assets/svg/icon-show.jsx'

const PictureViewer = memo((props)=> {

    const { ImageData,closeClick } = props
    const [currentIndex,setCurrentIndex] = useState(0)
    const [isNexts,setIsNexts] = useState(true)
    const [isShow,setIsShow] = useState(true)
    const imageRef = useRef()


    // 计算当前需要元素需要移动的距离
    useEffect(()=>{
        // 1, 获取currentIndex 对应的item
        const selectItemEl = imageRef.current.children[currentIndex]
        const itemOffset = selectItemEl.offsetLeft
        const itemWidth = selectItemEl.clientWidth

        // 2,content 的宽度        
        const contentWidth = imageRef.current.clientWidth

        // 3，获取currentIndex要滚动的距离
        let distance = itemOffset + itemWidth * 0.5 - contentWidth * 0.5

        // 4，滚动到指定位置
        imageRef.current.scrollTo({
            left:distance,
            behavior:'smooth'
        })


    },[currentIndex])



    // 当图片浏览器展示出来时，滚动条消失
    useEffect(()=>{
        document.body.style.overflow = 'hidden'
        return ()=>{
            document.body.style.overflow = 'auto'
        }
    },[])

    const closeBtnWrapper = ()=>{
        if(closeClick) closeClick();
    }

    // 控制图片切换
    const controlClick = (isNext=true,e)=>{
        let newIndex = isNext?currentIndex +1 :currentIndex-1
        if(newIndex<0) newIndex = ImageData.length-1;
        if(newIndex>ImageData.length-1) newIndex = 0;
        // 更新当前索引
        setCurrentIndex(newIndex)
        setIsNexts(isNext)

        // 阻止冒泡
        e.stopPropagation();
    }
  return (
    <BrowerWrapper isnext={isNexts}>
        <div className="top">
            <div className="close-btn" onClick={closeBtnWrapper}>
                    <IconClose/>
            </div>
        </div>
        <div className="content">
            <div className="control">
                <div className="btn left" onClick={(e)=>controlClick(false,e)}>
                        <IconLeft width='77' height='77'/>
                </div>
                <div className="btn right" onClick={(e)=>controlClick(true,e)}>
                        <IconRight width='77' height='77'/>
                </div>
            </div>
            <div className="pictures">
                <SwitchTransition mode='in-out'>
                    <CSSTransition key={ImageData[currentIndex]} classNames="fade" timeout={100}>
                        <img src={ImageData[currentIndex]} alt="" />
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div> 
        <div className="bottom">
            <div className="viewInfo">
                <div className="info">
                    <div className="desc">
                        <span className="index">{currentIndex+1}/{ImageData.length}</span>
                        <span>room Apartment图片{currentIndex+1}</span>  
                    </div>
                    <div className="toggle">
                        {
                            isShow?<span onClick={()=>setIsShow(false)}>隐藏照片列表<IconHidden/></span>:<span onClick={()=>setIsShow(true)}>显示照片列表<IconShow/></span>
                        }
                    </div>
                </div>
                <div className="imageList" style={{height:isShow?'67px':'0px'}} ref={imageRef}>
                    { ImageData.map((item,index)=>{
                        return (
                            <div className={`item ${currentIndex===index?'active':''}`} key={index} >
                                <img src={item} alt="" onClick={()=>setCurrentIndex(index)}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    </BrowerWrapper>
  )
})

PictureViewer.propTypes = {
    ImageData:PropTypes.array
}

export default PictureViewer
