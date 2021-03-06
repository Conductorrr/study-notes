
import { Chart } from '@antv/g2';

const data = [
  { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
  { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
  { x: 90.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
  { x: 80.4, y: 112.5, z: 12, name: 'NL', country: 'Netherlands' },
  { x: 80.3, y: 86.1, z: 41.8, name: 'Design\n$76,233\n3montn', country: 'Sweden' },
  { x: 78.4, y: 65.1, z: 16.6, name: 'ES', country: 'Spain' },
  { x: 74.2, y: 68.5, z: 34.5, name: 'Design\n$76,233\n3montn', country: 'France' },
  { x: 73.5, y: 85.1, z: 10, name: 'NO', country: 'Norway' },
  { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
  { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
  { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
  { x: 65.5, y: 126.4, z: 15.3, name: '', country: 'United States' },
  { x: 65.4, y: 50.8, z: 8.5, name: 'HU', country: 'Hungary' },
  { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
  { x: 64, y: 82.9, z: 11.3, name: 'NZ', country: 'New Zealand' }
];
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
  padding: [20, 20, 50, 80],
});
chart.data(data);
chart.scale({
  x: {
    alias: 'Daily fat intake', // 定义别名
    tickInterval: 5, // 自定义刻度间距
    max: 96, // 自定义最大值
    min: 62 // 自定义最小是
  },
  y: {
    alias: 'Daily sugar intake',
    tickInterval: 50,
    max: 165,
    min: 0
  },
  z: {
    alias: 'Obesity(adults) %'
  }
});
// 开始配置坐标轴
chart.axis(false);
chart.legend(false);
chart.tooltip({
  title: 'country',
  showMarkers: false
});
chart
  .point()
  .position('x*y')
  .color('r(0.5,0.5,0.5) 0:#837DD8 1:#6C63C0')
  .size('z', [10, 40])
  .label('name*country', {
    offset: 0, // 文本距离图形的距离
    style: {
      fill: '#E3E2E2',
      stroke: '#fff',
      lineWidth: 0.1,
    }
  })
  .shape('circle')
  .tooltip('x*y*z')
  .style({
    lineWidth: 1,
    stroke: '#A48DD5',
    fillOpacity: 0.9,
  });
// chart.annotation().line();
// chart.annotation().line({
//   top: true,
//   start: ['min', 50],
//   end: ['max', 50],
//   text: {
//     content: 'Safe sugar intake 50g/day',
//     position: 'end',
//     style: {
//       textAlign: 'end'
//     }
//   }
// });
chart.annotation().region({
  start: ['0%', '0%'],
  end: ['100%', '100%'],
  style: {
    lineWidth: 1,
    fillOpacity: 0,
    strokeOpacity: 1,
    stroke: '#545454',
  }
});

chart.interaction('element-active');

chart.render();
