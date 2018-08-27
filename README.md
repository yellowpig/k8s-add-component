# k8s-add-component
改动k8s/dashbaord源码，为项目添加自定义组件

## 添加纪录
8.25 【容器组-详情】将删除按钮改为重启按钮     
添加组件actionbarRedetailButtonsComponent、actionbarRestartItemComponent     
8.26 【容器组-详情】将删除dialog改为重启dialog    
添加资源restartresource    
8.26 【容器组】将resourcecard中最后一列操作的删除按钮改为重启按钮     
添加组件resourceCardRestartMenuItemComponent

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
4.AngularJs的一次性绑定命令{{::$ctrl.namespace}}     
5.源码中的dialog是作为服务注入的，展示在页面的button是组件     
6.resourcard组件和子组件的组织方式
不同页面用到的组件相同时，可以像actionbar组件一般，直接把子组件封装在actionbar中，页面调用actionbar即可。      
不同页面用到resourcecard组件时，会包含很多不同组合的小组件。所以把父组件、子组件分别注册成.component，页面调用时用标签嵌套的方式实现不同子组件的组合   
```html
    <kd-resource-card-column class="kd-row-layout-column kd-icon-column">
      <kd-logs-button object-meta="::$ctrl.pod.objectMeta" resource-kind-name="::$ctrl.pod.typeMeta.kind">
      </kd-logs-button>
      <kd-resource-card-menu>
        <kd-resource-card-restart-menu-item resource-kind-name="[[Pod|Name of the pod resource]]">
        </kd-resource-card-restart-menu-item>
        <kd-resource-card-edit-menu-item resource-kind-name="[[Pod|Name of the pod resource]]">
        </kd-resource-card-edit-menu-item>
      </kd-resource-card-menu>
    </kd-resource-card-column>
```
