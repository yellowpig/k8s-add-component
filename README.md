# k8s-add-component
改动k8s/dashbaord源码，为项目添加自定义组件

## 添加纪录
8.25 容器组页将删除按钮改为重启按钮     
添加组件actionbarreDetailButtonsComponent、actionbarRestartItemComponent     

## 技术难点
1.国际化文件修改容易出错     
2.二次开发时注意原代码的命名规则     
3.AngularJs的自定义组件用法：在html中由'-'连接，在js中由驼峰表示法声明     
```html
<kd-actionbar-redetail-buttons ...></kd-actionbar-redetail-buttons>
```
```javascript
export default angular
    .module(
        'kubernetesDashboard.common.components.actionbar',
        [
          'ngMaterial',
          'ui.router',
          resourceModule.name,
        ])
    .component('kdActionbarRedetailButtons', actionbarreDetailButtonsComponent)
```
