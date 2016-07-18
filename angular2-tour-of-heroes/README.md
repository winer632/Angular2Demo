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


> 以前在ng1中如{{ name }}在ng中更多的是如下格式{{name}},中间没有空格了，你只用记住跟{}或()相关的都没有空格了    

> template支持es6中的``,写template确实比较舒服



## 不同branch

``` bash
git branch tour-of-heroes-step1
git push origin tour-of-heroes-step1
git check out tour-of-heroes-step1
```

