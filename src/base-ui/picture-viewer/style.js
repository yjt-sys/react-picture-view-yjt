import styled from 'styled-components'
export const BrowerWrapper = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:#333;
    display:flex;
    flex-direction:column;

    .top{
        position:relative;
        height:86px;
        .close-btn{
            position:absolute;
            top:15px;
            right:25px;
            cursor: pointer;
        }
    }
    
    .content{
        position:relative;
        flex:1;
        display:flex;
        justify-content:center;
        .control{
            position:absolute;
            z-index:100;
            left:0;
            right:0;
            top:0;
            bottom:0;
            display:flex;
            justify-content:space-between;
            color:#fff;

            .btn{
                display:flex;
                justify-content:center;
                align-items:center;
                width:83px;
                cursor: pointer;
                /* height:100% */
            }
        }
        .pictures{
            position:relative;
            height:100%;
            overflow:hidden;
            width:100%;
            max-width:105vh;

            img{
                position:absolute;
                top:0;
                left:0;
                right:0;
                bottom:0;
                margin:auto;
                width:100%;
                object-fit: none;
                height:100%;
                user-select:none;
                z-index: 1;
            }

            /* 动画 */
            .fade-enter{
                transform:translateX(${props=>props.isnext ? "100%":"-100%"});
                opacity:0;
            }
            .fade-enter-active {
                transform:translate(0);
                opacity:1;
                transition: all 200ms ease;
            }
            .fade-exit{
                opacity:1;
            }
            .fade-exit-active {
                opacity:0;
                transition: all 200ms ease;
            }
         }
    }
    .bottom{
        height:100px;
        margin-top:10px;
        display:flex;
        justify-content:center;

        .viewInfo{
            position:absolute;
            bottom:10px;
            width:100vw;
            max-width:105vh;
            color:#eee;
            font-size:12px;

            .info{
                display:flex;
                justify-content:space-between;
                .toggle{
                    cursor: pointer;
                }
            }

            .imageList{
                position:relative;
                margin-top:3px;
                overflow:hidden;
                transition: height 300ms ease;
                /* transition:transform 200ms ease; */
                display:flex;
                >*{
                    flex-shrink:0;
                }

                .item{
                    margin-right:15px;
                    cursor:pointer;
                    img{
                        height:67px;
                        opacity:0.5;
                        transition: transform 0.3s ease;
                    }
                    &.active{
                        img{
                            opacity:1;
                        }
                    }
                }
                .item:last-child{
                    margin-right:0;
                }
            }
        }
       
    }
`