webpackJsonp([30],{56:function(e,r){e.exports="## Slider\r\n\r\nSlider provides an implementation of the Material Design slider component. Sliders are fully RTL-aware, and conform to the WAI-ARIA slider authoring practices.\r\n\r\n## Usage\r\n\r\n```html\r\n<m-slider onchange='change(event)'> </m-slider>\r\n<m-slider value=\"10\" discrete> </m-slider>\r\n<m-slider disabled > </m-slider>\r\n<m-slider discrete display-markers step=\"2\"> </m-slider>\r\n```\r\n\r\n## Used in Omi\r\n\r\nJSX:\r\n\r\n```jsx\r\n<m-slider onChange={(evt) => {\r\n  console.log(evt.detail.value)\r\n}}> </m-slider>\r\n<m-slider value={10} onChange={(evt) => {\r\n  console.log(evt.detail.value)\r\n}} discrete> </m-slider>\r\n<m-slider disabled > </m-slider>\r\n<m-slider discrete displayMarkers step={2}> </m-slider>\r\n```\r\n\r\n## API\r\n\r\n### Props\r\n\r\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\r\n| ------------- |:-------------:|:-----:|:-------------:|\r\n| discrete | boolean | -- | Coordinate 'display-markers' display markers |\r\n| value | number | 0 | The initial value of the slider |\r\n| disabled | boolean | -- | Disable the slider |\r\n| min | number | 0 | Least value |\r\n| max | number | 100 | Peak value |\r\n| step | number | 1 | Span |\r\n| display-markers | boolean | -- | Coordinate 'discrete' display markers |\r\n| onChange | function | -- | Select the trigger |\r\n"}});
//# sourceMappingURL=30.9a016992.chunk.js.map