import { createGlobalStyle } from 'styled-components'

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1605766159124'); /* IE9 */
  src: url('./iconfont.eot?t=1605766159124#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1605766159124') format('woff'),
  url('./iconfont.ttf?t=1605766159124') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1605766159124#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-dianhua:before {
  content: "\e627";
}

.icon-zuojiantou:before {
  content: "\e629";
}

.icon-youjiantou:before {
  content: "\e62a";
}

.icon-erweima:before {
  content: "\e600";
}

.icon-zhiding:before {
  content: "\e63b";
}

.icon-ai-app:before {
  content: "\e622";
}

.icon-icon_location:before {
  content: "\e61f";
}

.icon-pingguo:before {
  content: "\e63d";
}

.icon-youxiang:before {
  content: "\e62e";
}

.icon-dianhua1:before {
  content: "\e61b";
}

.icon-chakan:before {
  content: "\e836";
}
`
