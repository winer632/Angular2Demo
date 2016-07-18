# ng2

## ng2与ng1区别

* ng-model 变成[(ngModal)]
* *ngFor="let hero of heroes"
* *ngIf="selectedHero"

* (click)="fun()" // 方法
* [class.selected]="hero === selectedHero" // 属性绑定

``` javascript
// @Component中的styles示例

styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
`]

// @Component中的template示例
template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
`
```

## 命名约定

### 组件命名

你会注意到，在名叫 `app.component.ts` 的文件中有一个 `AppComponent` 组件，在名叫 `hero-detail.component.ts` 的文件中有一个 `HeroDetailComponent` 组件。    

我们的所有组件名都以 Component 结尾。所有组件的文件名都以 .component 结尾。    

这里我们使用小写 `中线命名法` ( 也叫 `烤串命名法` ) 拼写文件名，所以不用担心它在服务器或者版本控制系统中出现大小写问题。

### 服务命名

我们遵循的文件命名约定是：服务名称的小写形式 ( 基本名 ) ，加上 .service 后缀。 如果服务名称包含多个单词，我们就把基本名部分写成中线形式 (dash-case ，也被称作烤串形式 kebab-case) 。 比如， SpecialSuperHeroService 服务应该被定义在 special-super-hero.service.ts 文件中。

## 引入组件
``` javascript
import { HeroDetailComponent } from './hero-detail.component';

@Component {
  ...
  template: `
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `
  directives: [HeroDetailComponent]
}
```

``` javascript
// 子组件如果有父组件输入属性时
import { Component, Input } from '@angular/core';

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
```


> 以前在ng1中如{{ name }}在ng中更多的是如下格式{{name}},中间没有空格了，你只用记住跟{}或()相关的都没有空格了    

> template支持es6中的``,写template确实比较舒服



## 不同branch

``` bash
git branch tour-of-heroes-step1
git push origin tour-of-heroes-step1
git check out tour-of-heroes-step1
```

