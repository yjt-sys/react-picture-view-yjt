#### 引入图片查看器组件

```jsx
//引入
import PictureViewer from 'react-picture-view-yjt/build'
```

### 使用

```jsx

export default function App() {
	/*
		*@params imageData: string[]  图片数组   closeClick 关闭回调	
	*/
	const imageData = []
	const [closeClick,setCloseClick] = useState(false)
 return (
    <div>
      <button onClick={()=>setCloseClick(true)}>显示照片</button>
   		{ closeClick &&(
        <PictureViewer ImageData={imageData} closeClick={()=>setCloseClick(false)}/>
      )}

  </div>

 )
}
```



