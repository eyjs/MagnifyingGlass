# ES6+ Magnifying Glass

## 제작이유

- 가벼운 이미지 Viewer가 필요 했음.
- 다른 오픈소스들은 많은 기능들이 첨부되어 있고 대부분 ES5+ 형태
- Class 기반 쉬운 라이브러리를 제작 해보고 싶었음.

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

- NPM/YARN 배포[프로그램 대비 필요 X]
- Wrap 내부 이미지 전체 적용 로직

