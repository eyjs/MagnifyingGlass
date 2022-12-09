# ES6+ Magnifying Glass

## 특징

- 간단한 사용 방법
- Css In JavaScript
- Zoom 배율 설정
- Glass 크기 설정
- 활성화 / 비활성화

## 사용 방법

```Javascript
<script>
// 전역 객체 선언
import { Magnify } from './MagnifyingGlass.js';

const glass;
window.addEventListener('load', () => {
  const option = {
    wrap : document.querySelector('.wrap'),
    target : document.querySelector('.target'),
    zoom: 3
  }
  glass = new Magnify(option);
})
</script>
```

## 준비중
- NPM/YARN 배포
- Wrap 내부 이미지 전체 적용 로직

