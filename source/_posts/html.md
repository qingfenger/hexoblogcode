---
title: html
date: 2017-12-18 13:16:21
tags: html
---
```bash
**上传图片**
<input type="file"  name="file_head" id="file_head" accept="image/*" capture="camera" onchange="javascript:setImagePreview();" />
<input type="file"  name="file_head" id="file_head"  accept="image/gif, image/jpeg" capture="camera" onchange="javascript:setImagePreview();" />
		 **视频**
		 <input type="file" accept="video/*" capture="camcorder">
		 **录音**
		 <input type="file" accept="audio/*" capture="microphone"/>
```
capture表示，可以捕获到系统默认的设备，比如：camera--照相机；camcorder--摄像机；microphone--录音。
accept表示，直接打开系统文件目录。
其实html5的input:file标签还支持一个multiple属性，表示可以支持多选，如：<input type="file" accept="image/*" multiple>
加上这个multiple后，capture就没啥用了，因为multiple是专门yong用来支持多选的。