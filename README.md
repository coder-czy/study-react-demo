## react 项目案例-汉堡侠

### 函数式组件和 css module，结合 antd 组件库开发项目

- `useState` 为组件添加状态
- `useContext` 向组件树深层传递数据
- 使用方式一： 1.引入 `context` 2.使用 `Xxx.Consumer` 组件来创建元素
  `Consumer` 的标签体需要一个回调函数
  它会将 `context` 设置为回调函数的参数，通过参数就可以访问到 `context` 中存储的数据

```jsx
const A = () => {
  return (
    <TestContext.Consumer>
      {(ctx) => {
        return (
          <div>
            {ctx.name} - {ctx.age}
          </div>
        )
      }}
    </TestContext.Consumer>
  )
}
```

- 使用 `Context` 方式二： 1.导入 Context 2.使用钩子函数 `useContext()`获取到 `context`
  `useContext()` 需要一个 `Context` 作为参数
  它会将 Context 中数据获取并作为返回值返回

  Xxx.`Provider` - 表示数据的生产者，可以使用它来指定 `Context` 中的数据 - 通过 `value` 来指定 Context 中存储的数据，
  这样一来，在该组件的所有的子组件中都可以通过 `Context` 来访问它所指定数据

  当我们通过 `Context` 访问数据时，他会读取离他最近的 `Provider` 中的数据，
  如果没有 `Provider`，则读取 `Context` 中的默认数据

```jsx
const B = () => {
  // 使用钩子函数获取Context
  const ctx = useContext(TestContext)

  return (
    <div>
      {ctx.name} -- {ctx.age}
    </div>
  )
}
```

- `useEffect` 解决组件产生的副作用
  默认情况下，`useEffect()`中的函数，会在组件渲染完成后调用，
  并且是每次渲染完成后都会调用

  在 `useEffect()`可以传递一个第二个参数，
  第二个参数是一个数组，在数组中可以指定 `Effect` 的依赖项
  指定后，只有当依赖发生变化时，`Effect` 才会被触发
  通常会将 `Effect` 中使用的所有的局部变量都设置为依赖项
  这样一来可以确保这些值发生变化时，会触发 `Effect` 的执行

  像 `setState()`是由钩子函数 `useState()`生成的
  `useState()`会确保组件的每次渲染都会获取到相同 `setState()`对象
  所以 `setState()`方法可以不设置到依赖中
  如果依赖项设置了一个空数组，则意味 `Effect` 只会在组件初始化时触发一次

  - React.memo
    memo 只会根据 props 判断是否需要重新渲染，和 state 和 context 无关，state 或 context 发生变化时，组件依然会正常的进行重新渲染
